var arr = ['to', 'be', 'or', 'not', 'to', 'be'];
let isDup = false;
arr.map(x => (arr.indexOf(x) !== arr.lastIndexOf(x)) ? isDup = true : isDup)
console.log(isDup)