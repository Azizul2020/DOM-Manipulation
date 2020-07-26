let container = document.querySelector('.container');
let row = document.querySelector('.row');
let output = document.querySelector('.output');
let h1 = document.querySelector('h1');
let p = document.querySelector('p');

// creation line Break

//parentNode;

console.log(row.parentNode);
output.innerHTML = `Row's parent class is ${row.parentNode.className} `;
// parentElement;

//This is same as parentNode;
console.log(row.parentElement);
output.append(`Row's parent class is ${row.parentElement.className}`);

// childNodes;

console.log(row.childNodes); // It also count the white space like line break so it is not so good;

//children

console.log(row.children); // It work like childNode but it don't count the white space it only count the element.

//nextElementSibling;

console.log(h1.nextElementSibling);


//previousElementSibling

console.log(p.previousElementSibling);


//createTextNode

let text = document.createTextNode('This is modifying text Using createTextNode()');
h1.appendChild(text)