
(function (window) {
    'use strict';
    function defineLibrary() {
        var Library = {};
        Library.createPointHit = createPointHit;
        Library.updatePointHit = updatePointHit;
        Library.updateCache = updateCache;

        return Library;
    }

    if (typeof (window.IBISDataPointHit) === 'undefined') {
        window.IBISDataPointHit = defineLibrary();
    } else {
        console.log("Library already defined.");
    }
})(window);


function createPointHit(container, hitArea) {
    var bounds = hitArea.nominalBounds;
    // var hit = new createjs.Shape();
    hitArea.visible = false;

    //  hit.graphics.beginStroke("#FF9900").drawRoundRect(0, 0, bounds.width, bounds.height, 8, 8, 8, 8);
    //  hit.graphics.beginStroke("#FF9900").beginFill("blue").drawRoundRect(0, 0, bounds.width, bounds.height, 8, 8, 8, 8);


    // hit.graphics.beginStroke("#FF9900").drawRect(0, 0, bounds.width, bounds.height);
    container.hitArea = hitArea
    container.cursor = "pointer";
    // container.mouseChildren=false;
    // container.addEventListener("mouseover", onMouseOver.bind(this));
    // container.addEventListener("mouseout", onMouseOut.bind(this));


    /*
    *   CODE SAMPLE: container.addEventListener("mousedown", onMouseDown.bind(this));
    *   PURPOSE: 1) 'Add listener to generate context menu'
    */


    // hit.visible = false;

    // container.ibisHit = hit;
    // container.addChildAt(hit, 1);
    // stage.update();

    function onMouseOver() {
        hit.visible = true;
        stage.update();
    }
    function onMouseOut() {
        hit.visible = false;
        stage.update();
    }
    function onMouseDown(evt) {

        /*
        *   CODE SAMPLE: container.ibisDataPoint.getRp();
        *   PURPOSE: 1) 'Will provide acccess to the data point relation ship path when the right event
        *    is detected to load the context menu'
        *            2) 'Dynamically generate the HTML Context menu using the evt mouse position for placement.
        */

    }
}

function updatePointHit(container, hitArea, dp) {

    /*
    *   CODE SAMPLE: container.ibisHit.visible = true;
    *   PURPOSE: 1) 'Manipulate the ibisHit area or any other dynamic display objects realated to status 
    *             that get added to container.
    *            2) 'Get access to the dp class to retrieve dynamic point status changes.
    */

}

function updateCache(container, hitArea, dp) {

    // console.log('cache canvas: ' + container.cacheCanvas);

    // if (container.cacheCanvas === null) {
    //     container.cache(0, -4, container.nominalBounds.width, container.nominalBounds.height + 5);
    //     console.log('last raw value: ' + dp.lastRawValue);

    //     dp.lastRawValue = dp.pointData;


    // } else {

    //     if (dp.lastRawValue !== dp.pointData) {
    //         console.log('new value: ' + dp.pointData);
    //         container.updateCache();
    //         dp.lastRawValue = dp.pointData;
    //     }

    // }

    /*
    *   CODE SAMPLE: container.ibisHit.visible = true;
    *   PURPOSE: 1) 'Manipulate the ibisHit area or any other dynamic display objects realated to status 
    *             that get added to container.
    *            2) 'Get access to the dp class to retrieve dynamic point status changes.
    */

}

