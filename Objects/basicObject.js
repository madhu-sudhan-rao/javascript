let user = {
    name: 'Isabella',
    age: 18,
    ['gender']: 'F'
};
user.isAdmin = true; // Add property 

delete user.isAdmin; // Delete property 

console.log('user: ', user); // Display object
console.log('Age (way-1)',user[`age`]); // Display value of a particular property (way-1)
console.log('Age (way-2)',user.age); // Display value of a particular property (way-2)

