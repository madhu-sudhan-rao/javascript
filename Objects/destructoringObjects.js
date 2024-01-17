let person = ["Juan", "add", 18, "ofket@ge.ni"];
console.log('person: ', person);

let [name, word, age, email] = person;
console.log('name: ', name);
console.log('word: ', word);
console.log('age: ', age);
console.log('email: ', email);

let [firstname , ...more] = person
console.log('firstname: ', firstname);
console.log('more: ', more);

let [...duplicate] = person
console.log('duplicate: ', duplicate);
person[0] = "Madhu"
console.log('person: ', person);
console.log('duplicate: ', duplicate);

let [fn, ...{age1, }] = person
console.log('some: ', some);
