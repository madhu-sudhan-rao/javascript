let random = ["hat", "your", "replied", "flame", "fuel"];
console.log('random: ', random);

// adds items to the end
random.push('city');
console.log(random);

// extracts an item from the end
random.pop("city");
// let popped = random.pop("city"); also can store
// console.log(popped);
console.log(random)

// extracts an item from the beginning
let shifted = random.shift();
// let shifted = random.shift(); also can store
// console.log(shifted);
console.log(random)

// adds an item from the beginning
random.unshift("attached");
console.log(random);

// arr.splice method. It can do everything: insert, remove and replace elements
random.splice