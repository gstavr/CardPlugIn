"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var employee_1 = require("./employee");
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
    var emp = new employee_1.employee('George', 30);
    console.log(emp._name);
});
//# sourceMappingURL=app.js.map