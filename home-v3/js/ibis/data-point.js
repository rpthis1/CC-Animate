
(function (window) {
    'use strict';
    function defineLibrary() {
        var Library = {};
        Library.instance = createClass();
        return Library;
    }
    if (typeof (window.IBISDataPoint) === 'undefined') {
        window.IBISDataPoint = defineLibrary();
    } else {
        console.log("Library already defined.");
    }
})(window);



function createClass() {

    var Create = function (pointObject) {
        this.pointObject = pointObject;
        this.lastRenderData = null;
        this.lasPrecision = null;
        this.lastUnits = null;
        this.pointData = 'n/a';
        this.pointStatus = {};
        this.pointProperties = pointObject.properties;
        this.lastRawValue = "";
    }

    var pointPrototype = {

        getRp: function () {
            return this.pointObject.rp;
        },

        rawValue: function () {
            return this.pointData;
        },


        setPointData: function (data) {
            this.pointData = data;
        },


        setPointStatusObject: function (data) {
            this.pointStatus = data;
        },

        getPointStatusObject: function (data) {
            return this.pointStatus;
        },

        getPointStatusLabel: function (data) {
            return this.pointStatus.label;
        },

        getCurrentValueFormatted: function () {
            var precision = null, fullNumber;
            if (!isNaN(this.pointData)) {

                if (this.lasPrecision === null) {
                    precision = this.getRenderDataProperty('@precision');
                    if (this.isValidObject(precision)) {
                        this.lasPrecision = precision;
                    }else{
                        this.lasPrecision  = 5;
                    }
                }


                return accounting.formatNumber(this.pointData, {
                    precision: this.lasPrecision,
                    thousand: ","
                });



            }
            return this.pointData;
        },

        getUnits: function () {
            var data, units;
            if (this.lastUnits !== null) {
                return this.lastUnits;
            }
            units = this.getRenderDataProperty('@units');
            if (this.isValidObject(units)) {
                this.lastUnits = units;
                return this.lastUnits;
            }
            return '';

        },


        getRenderData: function () {
            if (this.lastRenderData !== null) {
                return this.lastRenderData;
            }
            if (this.pointProperties !== undefined && this.pointProperties !== null) {
                data = Object.keys(this.pointProperties);
                data = data[0];
                data = this.pointProperties[data];
                if (data.hasOwnProperty('RenderData')) {
                    this.lastRenderData = data.RenderData;
                    return this.lastRenderData
                }
            }
            return null;
        },


        getRenderDataProperty: function (property) {
            var renderData = this.getRenderData();
            var propertyCheck = null;
            if (renderData !== null) {
                propertyCheck = renderData[property];
                if (propertyCheck !== null && propertyCheck !== undefined) {
                    return propertyCheck;
                }
            }
            return null;
        },

        isValidObject: function (obj) {
            if (obj !== undefined && obj !== null) {
                return true;
            }
            return false;
        }
    }


    Create.prototype = pointPrototype;
    return Create;


}