abstract class employee {
   abstract display(); //only declaration have, not have definition
   showAbstractMethod() {
    console.log('from the Abstract method');
   }
}
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
class AppComponent extends employee {
    display() {
        console.log('Abstract method in derived class')
    }
}
const obj = new AppComponent();
obj.display();
obj.showAbstractMethod();