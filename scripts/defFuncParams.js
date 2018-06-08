"use strict";
var anotherVar = function () { return 50; };
var newFunc = function (value, anotherMultiple) {
    if (value === void 0) { value = 10; }
    if (anotherMultiple === void 0) { anotherMultiple = anotherVar() * value; }
    return value + anotherMultiple;
};
console.log(newFunc());
console.log(newFunc(34));
