import { emp1, emp2 } from "./interface";

abstract class employee {
   abstract display(); //only declaration have, not have definition
   showAbstractMethod() {
    console.log('from the Abstract method');
   }
}
abstract class student {
    abstract student1name(); //only declaration have, not have definition
 }
// we cant create object from the abstract class
// instead we use a abstract class in the derived class so that we can implement the defination of the abstract method
// we can now create object using from derived class, which as a method of abstract class
/*
    Abstraction (abstract - keyword)
    abstraction means data hiding show only essential things
    -> Abstract method only have declaration
    -> Definition will be written in the derived class
    -> Abstract class have atleast one abstract method
    -> concrete class doesn't have any abstract method
    -> we can't create a object from the abstract class
*/
class AppComponent extends employee implements emp1, emp2 { // classed only extends only ony class but if use implements we use multipe interface
    display() {
        console.log('Abstract method in derived class')
    }
    disname() {
        console.log('method have display name from the emp1 interface class')
    }
    disId() {
        console.log('method have display id from the emp2 interface class')
    }
}
const obj = new AppComponent();
obj.display();
obj.showAbstractMethod();