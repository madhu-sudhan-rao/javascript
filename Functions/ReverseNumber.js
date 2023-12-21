var num = 32243;
console.log("Entered:", num);
console.log("Reversed:",reverseNum(32243))

function reverseNum(num){
    let reverse = String(num).split("").reverse().join("");
    return reverse;
}