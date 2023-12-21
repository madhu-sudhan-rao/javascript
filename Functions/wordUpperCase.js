let string = 'the quick brown fox' ;
console.log(eachWordToUpperCase(string));

function eachWordToUpperCase(string) {
    array = string.split(" ")
    
    for (let index = 0; index < array.length; index++) {
        const element = array[index].charAt(0).toUpperCase();
        array[index]= element + array[index].slice(1)
        
    }
    
    return array.join(" ");
}