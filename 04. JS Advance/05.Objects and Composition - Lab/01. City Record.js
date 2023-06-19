const obj = {
    name: 'Alex',
    age: 25,
};

console.log(Object.entries(obj));

for (const objElement in obj) {
    console.log(objElement);
}