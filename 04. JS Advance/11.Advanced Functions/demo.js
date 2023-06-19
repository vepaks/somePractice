const person = {
  name: "Alex",
};

function demo() {
  console.log(`${this.name} + says hi!`);
}

demo.call(person);
