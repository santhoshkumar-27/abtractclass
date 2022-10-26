var stud = /** @class */ (function () {
    function stud() {
    }
    stud.prototype.displayFn = function () {
        console.log('Student name is ', this.studentName);
        console.log('Student age is ', this.studentAge);
        console.log('Student teacher is ', this.sudentTeacher);
    };
    return stud;
}());
var s1 = new stud();
s1.studentName = 'santhoshkumar';
s1.studentAge = 24;
s1.sudentTeacher = 'Mario';
console.log(s1.displayFn());
var s2 = new stud();
s2.studentName = 'kumar';
s2.studentAge = 23;
s2.sudentTeacher = 'Mario';
console.log(s2.displayFn());
