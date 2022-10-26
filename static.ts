class stud {
    studentName: string;
    studentAge: number;
    // sudentTeacher: string;
    static studentTeacher: string; // we can add static keyword in front of property name

    displayFn(): void {
        console.log('Student name is ', this.studentName);
        console.log('Student age is ', this.studentAge);
        // console.log('Student teacher is ', this.studentTeacher);
        console.log('Student teacher is ', stud.studentTeacher);
    }
}
//  .*. consider
// studentTeacher is same for all student
const s1 = new stud();
s1.studentName = 'santhoshkumar';
s1.studentAge = 24;
// s1.studentTeacher = 'Mario'; // if i change the studentTeacher to the s1, we get changed only s1 not in s2
// s1.studentTeacher = 'Sandy'; // now s1 has student name sandy but in the s2 we have mario, so they are same class but have different teacher


const s2 = new stud();
s2.studentName = 'kumar';
s2.studentAge = 23;
// s2.studentTeacher = 'Mario';


// so that we can implements Static method and static property for all s1 have same teacher 
/*
    we can implement by using two methods
        1) using class.property;
        2) and object.property;
*/
// s1.studentTeacher = 'Mario'; // not suitable in ts, but same in java
stud.studentTeacher = 'Mario'; //using class.staticproperty we can give values
/*
ass$ node static.js
Student name is  santhoshkumar
Student age is  24
Student teacher is  Mario
undefined
Student name is  kumar
Student age is  23
Student teacher is  Mario
undefined
*/
stud.studentTeacher = 'despacito';
/*
ass$ node static.js
Student name is  santhoshkumar
Student age is  24
Student teacher is  despacito
undefined
Student name is  kumar
Student age is  23
Student teacher is  despacito
undefined
*/
console.log(s1.displayFn());
console.log(s2.displayFn());

//https://www.youtube.com/watch?v=OH3wSkKy4YE
//https://www.youtube.com/watch?v=dqpwgss-Q14
//https://www.youtube.com/watch?v=srRu2MvdcSI
// https://medium.com/@sudarshanadayananda/how-to-live-reload-typescript-node-server-bc40171fdb7