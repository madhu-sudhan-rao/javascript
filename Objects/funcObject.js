// Create object using a function
function makeUser(name,age){
    return {
        name,
        age
    }
}

let user = makeUser("Madhu",18);
console.log('user: ', user);
console.log('user: ', user);
console.log('name' in user)
console.log(user.gender)
let u2 = user;
console.log('u2: ', u2);

user.name = 'Ricky';
console.log(u2)

for(key in user) {
    console.log(key);
    console.log(user[key]);
}

console.log('-----------')

let u3= {};
Object.assign(u3,user)
console.log('u3: ', u3);

let u4 = Object.assign({}, user)
console.log('u4: ', u4);