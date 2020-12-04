let myMap = new Map();
myMap.set('hello', 'string');
myMap.set(14, 'number');
myMap.set(true, 'boolean');
for (let elem of myMap) {
    console.log(elem);
}