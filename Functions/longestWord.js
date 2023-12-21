let string = 'Web Development Tutorial';
console.log(findLongestWord(string));

function findLongestWord(string){
    array = string.split(" ")
    let longest = "";
    array.forEach(element => {
        if(element.length > longest.length ) {
            longest = element;
        }
    });
    return longest;
}

