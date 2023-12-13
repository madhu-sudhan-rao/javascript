// Create a function multiply that takes two numbers and a callback as arguments. 
// The function should multiply the two numbers and then execute the callback function with the result.
function multiply( num1, num2, callback) {
    if( typeof callback === 'function' ) {
        const result = num1 * num2;
        callback(result);
    }
}

function displayResult(result){
    console.log("Result is:", result)
}

multiply(2, 3, displayResult);

// Write a function processArray that takes an array and a callback. 
// Iterate through the array and call the callback function for each element in the array.
function processArray(array, callback) {
    array.forEach(element => {
        callback(element);
    });
}

function displayElement(element) {
    console.log("Element is:", element)
}

let array = ["Leo Ramos", "Hester Graham", "Rodney Hernandez", "Dean Morris", 'Roxie Hall'];

processArray(array, displayElement);

// Create three functions: first, second, and third. 
// Each function takes a callback as an argument. 
// Call these functions in such a way that 
    // second is called after first finishes, and 
    // third is called after second finishes.
function first(callback) {
    console.log('I am first');
    callback();
}

function second(callback) {
    console.log("I am second");
    callback()
}

function third() {
    console.log("I am third");
}

first(function() {
    second(function(){
        third()
    })
})

// Simulate two asynchronous operations using setTimeout. 
// Create a function performOperations that performs both operations in sequence, calling a callback once both operations are completed.
function performsOperations(callback) {
    setTimeout(() => {
        console.log('Operation 1 is done');

        setTimeout(() => {
            console.log('Operation 2 is done')
            callback();
        }, 3000);
    }, 2000);
}

function operationsCompleted(){
    console.log("Operations completed!");
}

performsOperations(operationsCompleted);

// Simulate a scenario involving multiple asynchronous tasks (e.g., file reading, API requests). Chain these operations so that each subsequent operation depends on the result of the previous one, without falling into callback hell.
function readFile() {
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            console.log('File read successfully');
            resolve('fileContent')
        }, 1000)
    });
}

function callAPI(data) {
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            console.log(`API called with data: ${data} `);
            resolve('API Response')
        }, 1500)
    });
}

function processData(response){
    return new Promise(function(resolve, reject){
        setTimeout(function () {
            console.log(`Processing API response: ${response}`);
            resolve("Processed Data");
        }, 2000);
    });
}
