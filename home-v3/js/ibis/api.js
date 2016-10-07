(function (window) {
    'use strict';
    function defineLibrary() {
        var Library = {};
        Library.compressedObjectUri = compressedObjectUri;
        Library.compressedObjectDataUri = compressedObjectDataUri;
        Library.settingsUri = settingsUri;

        return Library;
    }

    if (typeof (window.IBISApi) === 'undefined') {
        window.IBISApi = defineLibrary();
    } else {
        console.log("Library already defined.");
    }
})(window);


function compressedObjectUri() {
    return IBISLibrary.baseApi + '/api/CompressedObject';
}

function compressedObjectDataUri() {
    return IBISLibrary.baseApi + '/api/CompressedObjectData';
}

function settingsUri() {
    return IBISLibrary.baseApi + '/api/Settings';
}
