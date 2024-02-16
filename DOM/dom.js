
// // Get element by ID()
const title = document.getElementById('main-heading');
// console.log('title element: ', title);


// // Get ELements by class name
// const listItem = document.getElementsByClassName('list-items')
// console.log('listItem: ', listItem);


// // Get ELements by tag name
// const listItems = document.getElementsByTagName('li')
// console.log('listItem: ', listItems);


// // query selector()
// const container = document.querySelector('div')
// console.log('container: ', container);

// // query selectorALL()
const li = document.querySelectorAll('li')
// console.log('li: ', li);

// Styling elements
let titleStyle = document.querySelector('#main-heading')
titleStyle.style.color = 'blue'
console.log('titleStyle: ', titleStyle);

let listItemsStyle = document.querySelectorAll('.list-items');
for( item of listItemsStyle ) {
    item.style.backgroundColor = 'yellow'
}

// Creating elements

let ul = document.querySelector('ul')
let addLI = document.createElement('li');

// Adding element
ul.append(addLI)
addLI.innerText = "Julayi"

// Modifying the text
const firstLi = document.querySelector('li')
console.log(firstLi.textContent);
console.log(firstLi.innerHTML);
console.log(firstLi.innerText);

// Modifying attributes
addLI.setAttribute('id', 'last');
// addLI.removeAttribute('id')
console.log(title.getAttribute('id'))

addLI.classList.add('list-items')

// Remove elements
addLI.remove()