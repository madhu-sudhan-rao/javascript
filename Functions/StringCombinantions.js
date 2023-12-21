let str = 'dog';
let result = [];
console.log(generateCombinations(str)); // d, do, dog, o, og, o, g


function generateCombinations(string){
    array = string.split("");
    for (let indexX = 0; indexX < string.length; indexX++) {
        for (let indexY = 0; indexY < array.length; indexY++) {
            const element = string.substring(indexX, indexY+1);
            if(element !== ""){
                result.push(element);
            }
        }
    }
    return result.join(", ");
}
