
/*
* PROPERTIES:
* IBISPoller.settingsLoaded
* IBISPoller.settings
*/


(function (window) {
	'use strict';
	function defineLibrary() {
		var Library = {};
		Library.settingsLoaded = false;
		Library.startPolling = startPolling;
		Library.initializeEnvironment = initializeEnvironment;

		return Library;
	}



	if (typeof (window.IBISPoller) === 'undefined') {
		window.IBISPoller = defineLibrary();
	} else {
		console.log("Library already defined.");
	}
})(window);



function startPolling(scope) {

	executePollInterval(scope);

}

function executePollInterval(scope) {

	var ibisDataPoints = {};
	var ibisFunctions = {};
	var ibisFunctionsArrays = {};

	IBISLibrary.getChildren(scope, "", ibisFunctions);

	console.log(ibisFunctions);

	IBISLibrary.getCompressedObject(IBISApi.compressedObjectUri() + "?rp=" + IBISLibrary.rp, function (linkData) {
		var obj, i = 0,
			len = linkData.length,
			links = 0;

		for (; i < len; i++) {
			obj = linkData[i];
			addFunction(ibisFunctions, obj, ibisFunctionsArrays);
			ibisDataPoints[obj.rp] = new IBISDataPoint.instance(obj);
			links++;
		}
		update();
		//setInterval(update, parseInt(IBISPoller.settings.environment.realTimePollInterval));
		setInterval(update, 1000);

		function update() {

			IBISLibrary.getCompressedObjectData(IBISApi.compressedObjectDataUri() + "?rp=" + IBISLibrary.rp, function (liveData) {
				var livePoint, j = 0,
					liveLen = liveData.length,
					func, dataPoint;
				for (; j < liveLen; j++) {
					livePoint = liveData[j];
					callFunctions(ibisFunctions, livePoint, ibisFunctionsArrays, ibisDataPoints);
				}
				stage.update();
			});
		}
	});

}

function addFunction(functions, linkObj, arr) {

	functions[linkObj.rp] = functions[linkObj.linkID];

	if (arr.hasOwnProperty(linkObj.rp)) {

		arr[linkObj.rp].push(functions[linkObj.linkID]);

	} else {

		arr[linkObj.rp] = [];
        arr[linkObj.rp].push(functions[linkObj.linkID]);

	}
	console.log('new link obj');

}

function callFunctions(functions, point, arr, ibisDataPoints) {

	var func;
	var pointArray = arr[point.rp];
	var pointArrayLength;
	var dataPoint;

	if (pointArray !== undefined) {
		pointArrayLength = pointArray.length;

		for (var i = 0; i < pointArrayLength; i++) {
			func = pointArray[i];

			if (func !== undefined) {
				if (point.rp === '') {
				}
				dataPoint = ibisDataPoints[point.rp];
				if (dataPoint !== undefined) {
					dataPoint.setPointData(point.value);
					dataPoint.setPointStatusObject(point.status);
					func(dataPoint);
				}
			}
		}

	}

}

function initializeEnvironment(whenDoneCallBack) {

	if (IBISPoller.settingsLoaded === true) {
		whenDoneCallBack();
	} else {


		$.getJSON(IBISApi.settingsUri() + "?rp=" + IBISLibrary.rp, function (serverSettings) {
			IBISPoller.settingsLoaded = true;
			IBISPoller.settings = serverSettings;
			applyStageProperties();
			whenDoneCallBack();
		}
		);
	}

}


function applyStageProperties() {
	//stage.enableMouseOver(parseInt(IBISPoller.settings.environment.enableMouseOverFrequency));

	stage.enableMouseOver();
}



