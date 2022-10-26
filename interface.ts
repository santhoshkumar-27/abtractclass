export declare interface emp1 {
    // initialName: 'santhoshk'; //static variable
    disname(): void; // method declaration without definition
}
//As a interface we can achieve the full abstract class that only have method declaration
export declare  interface emp2 {
    disId(): void;
}
class displayName1 implements emp1, emp2 {
    disname() {
        console.log('method have display name from the emp1 interface class')
    }
    disId() {
        console.log('method have display id from the emp2 interface class')
    }
}

const obj1 = new displayName1()
console.log(obj1.disname())
console.log(obj1.disId())