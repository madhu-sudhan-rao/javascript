let length = 4;

// Create an Array of Given Size in JavaScript
let arr = new Array(length);
console.log(arr.length);
console.log(arr);

let arr2 = Array.apply(null, Array(length))
    .map((y, i)=>{ return i; });
console.log(arr2)

// Initialize an Array in JavaScript
let arr3 = new Array('This', 'array', 'is', 'initialized', 'in', 'the', 'constructor', '.');

console.log("-----")

// Iterating Over an Array in JavaScript
console.log("For loop:")
for (let index = 0; index < arr3.length; index++) {
    console.log(arr3[index]);    
}

console.log("-----")
console.log("ForEach loop:");
arr3.forEach(element => {
    console.log(element);
});

// Create a Zero Filled Array in JavaScript
let zeroArray = new Array(length).fill(0)
console.log('zeroArray: ', zeroArray);

let zero2dArray = new Array(length).fill().map(() => new Array(length).fill(0));
console.log('zero2dArray: ', zero2dArray);

// Create an Array with a Specific Length and Pre-filled Values
let value = 4;
let newArray = new Array(length).fill(value);
console.log('newArray: ', newArray);

// Check if an Array includes a Value in JavaScript
let string = [96, 7, 100, 88, 35];
let search = 8;
console.log(string.includes(search));