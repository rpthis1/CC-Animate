/*
* PROPERTIES:
* IBISLibrary.baseApi
* IBISLibrary.rp
*/


(function (window) {
	'use strict';
	function defineLibrary() {
		var Library = {};
		Library.getChildren = getChildren;
		Library.getCompressedObject = getCompressedObject;
		Library.getCompressedObjectData = getCompressedObjectData;
		Library.increaseFrameRate = increaseFrameRate;
		Library.lowerFrameRate = lowerFrameRate;
        Library.assetsLoaded = assetsLoaded;
		Library.stageIsReady = stageIsReady;

		return Library;
	}


	if (typeof (window.IBISLibrary) === 'undefined') {
		window.IBISLibrary = defineLibrary();
	} else {
		console.log("Library already defined.");
	}
})(window);

function getChildren(clip, parentName, functions) {


	var i, key;
	var clipch = clip.children;
	for (key in clip) {
		if (clip[key] instanceof createjs.Container) {
			for (i = 0; i < clipch.length; i++) {
				if (clip[key] === clipch[i]) {
					if (parentName === "") {
						clip[key].ibisName = key;
					} else {
						clip[key].ibisName = parentName + "." + key;
					}
					
					console.log(clip[key].ibisName);
					
					addIbisFunctions(clip[key], functions);
					getChildren(clip[key], clip[key].ibisName, functions);
					break;
				}
			}
		}
	}
}

function addIbisFunctions(obj, functions) {

	if (obj.hasOwnProperty('frame_0')) {
		var functionsArray = obj.frame_0();
		var funcObj;

		if (Array.isArray(functionsArray)) {
			for (var i = 0, len = functionsArray.length; i < functionsArray.length; i++) {
				funcObj = functionsArray[i];
				functions[obj.ibisName + ":" + funcObj.funcName] = funcObj.func;
			}
		}
	}
}

function getCompressedObject(url, callBack) {
	var links;
	$.getJSON(url, callBack);
}

function getCompressedObjectData(url, callBack) {
	var links;
	$.getJSON(url, callBack);
}

function increaseFrameRate() {
	createjs.Ticker.setFPS(parseInt(IBISPoller.settings.environment.fastFrameRate));
	createjs.Ticker.addEventListener("tick", stage);
}

function lowerFrameRate() {
 	createjs.Ticker.setFPS(parseInt(IBISPoller.settings.environment.slowFrameRate));
	createjs.Ticker.removeEventListener("tick", stage);
}

function assetsLoaded(windowObj) {
	IBISLibrary.baseApi = $(windowObj.frameElement).attr("data-api");
	IBISLibrary.rp = $(windowObj.frameElement).attr("data-rp");
}

function stageIsReady(windowObject) {
	windowObject.parent.$('body').trigger('ibisContentReady');
}




