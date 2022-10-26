class stud {
    studentName: string;
    studentAge: number;
    sudentTeacher: string;

    displayFn(): void {
        console.log('Student name is ', this.studentName);
        console.log('Student age is ', this.studentAge);
        console.log('Student teacher is ', this.sudentTeacher);
    }
}
//  .*. consider
// studentTeacher is same for all student
const s1 = new stud();
s1.studentName = 'santhoshkumar';
s1.studentAge = 24;
s1.sudentTeacher = 'Mario'; // if i change the studentTeacher to the s1, we get changed only s1 not in s2
s1.sudentTeacher = 'Sandy';
console.log(s1.displayFn());

const s2 = new stud();
s2.studentName = 'kumar';
s2.studentAge = 23;
s2.sudentTeacher = 'Mario';
console.log(s2.displayFn());