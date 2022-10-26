var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var employee = /** @class */ (function () {
    function employee() {
    }
    employee.prototype.showAbstractMethod = function () {
        console.log('from the Abstract method');
    };
    return employee;
}());
// we cant create object from the abstract class
// instead we use a abstract class in the derived class so that we can implement the defination of the abstract method
// we can now create object using from derived class, which as a method of abstract class
/*
    Abstraction (abstract - keyword)
    -> Abstract method only have declaration
    -> Definition will be written in the derived class
    -> Abstract class have atleast one abstract method
    -> concrete class doesn't have any abstract method
    -> we can't create a object from the abstract class
*/
var AppComponent = /** @class */ (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppComponent.prototype.display = function () {
        console.log('Abstract method in derived class');
    };
    return AppComponent;
}(employee));
var obj = new AppComponent();
obj.display();
obj.showAbstractMethod();
