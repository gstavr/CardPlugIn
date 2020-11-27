"use strict";
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    var returnedValue = cb(result);
    console.log(returnedValue);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
    return 20;
});
function addCallback(callback) {
    var txt = 'This is the text';
    callback(txt);
}
;
addCallback(function (test) {
    console.log(test);
});
