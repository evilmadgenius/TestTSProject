"use strict";
var display = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    for (var i in arguments) {
        console.log(arguments[i]);
    }
};
display('sdfds');
display('sdfsdf', 'asdad');
display('asdasd', 1, 2, 3, 4, 5, 'test');
