let word = 'webmaster';
console.log(orderingAlphabets(word)); // a, b, e, e, m, r, s, t, w

function orderingAlphabets(word) {
    let orderedAlphabets = word.split("").sort();
    return orderedAlphabets.join(", ");
}