"use strict";
var colors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    for (var i in colors) {
        console.log(colors[i]);
    }
};
var arr = ['ek', 'do', 'teeen', 'caar'];
colors.apply(void 0, ['hello'].concat(arr));
