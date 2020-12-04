let number = prompt("type your value: ");
if (isNaN(+number) || number === null) {
    console.log("OOops, it seems you were wrong");
} else if (number % 2 === 0) {
    console.log("this is an even number");
} else if (number % 2 !== 0) {
    console.log("this is an odd number");
}