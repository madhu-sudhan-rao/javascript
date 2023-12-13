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

for(key in user) {
    console.log(key);
    console.log(user[key]);
}