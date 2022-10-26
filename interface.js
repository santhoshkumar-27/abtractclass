var displayName1 = /** @class */ (function () {
    function displayName1() {
    }
    displayName1.prototype.disname = function () {
        console.log('method have display name from the emp1 interface class');
    };
    displayName1.prototype.disId = function () {
        console.log('method have display id from the emp2 interface class');
    };
    return displayName1;
}());
var obj1 = new displayName1();
console.log(obj1.disname());
console.log(obj1.disId());
