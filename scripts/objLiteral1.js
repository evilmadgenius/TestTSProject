"use strict";
var firstName = "ross";
var lastname = "geller";
var middlename = "matthew";
var person = {
    firstName: firstName,
    lastname: lastname,
    middlename: middlename
};
console.log(person);
var newp = function (firstName, lastname, age) {
    return {
        firstName: firstName,
        lastname: lastname,
        fullName: firstName + ' ' + lastname,
        isSenior: function () {
            return age > 65;
        }
    };
};
var anotherP = newp('chandler', 'bing', 65);
console.log(anotherP);
