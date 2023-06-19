// "use strict";
// class Person {
//   constructor(firstName, lastName, age, email) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.email = email;
//   }
//   toString() {
//     return `${this.firstName} ${this.lastName} ( age: ${this.age}, email: ${this.email} )`;
//   }
// }
//
// const p4 = {
//   name: "Alex",
//   age: 25,
// };
//
// Object.defineProperty(p4, "age", { enumerable: false });
// let p4Property = Object.getOwnPropertyDescriptor(p4, "age");
//
// Object.freeze(p4);
//
// console.log(p4.name);
//
// console.log(Object.getOwnPropertyDescriptors(p4));
//
//

let cat = {
  name: "Sara",
  makeSound() {
    console.log(`${this.name} - meow...`);
  },
};

const sara = Object.create(cat);

sara.makeSound();

for (const catKey in cat)
  cat.hasOwnProperty(catKey)
    ? console.log(catKey)
    : console.log(`Inherited: ${catKey}`);
