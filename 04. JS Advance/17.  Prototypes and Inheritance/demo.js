class Animal {
  constructor(type, name, age, food) {
    this.type = type;
    this.name = name;
    this.age = age;
    this.food = food;
  }
  eat() {
    console.log(
      `This ${this.age} years old ${this.type}, named ${this.name}, eats ${this.food}.`
    );
  }
}

class Cat extends Animal {
  constructor(name, age, food) {
    super("Cat", name, age, food);
  }
  meow() {
    console.log("Meow");
  }
}

const misha = new Cat("Misha", 5, "fish");

class Dog extends Animal {
  constructor(name, age, food) {
    super("Dog", name, age, food);
  }
  bark() {
    console.log("Bark");
  }
}

const sharo = new Dog("Sharo", 3, "meat");

misha.eat();
misha.meow();
sharo.eat();
sharo.bark();
