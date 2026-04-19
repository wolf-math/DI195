// For each of the questions, find 2 WAYS of accessing :

// 1. The div DOM node?

const div1 = document.body.children[0];
const div2 = document.body.firstElementChild;

console.log(div1);
console.log(div2);

// 2. The ul DOM node?

const ul1 = document.body.children[1];
const ul2 = div1.nextElementSibling;

console.log(ul1);
console.log(ul2);

// 3. The second li (with Pete)?

const pete1 = ul1.lastElementChild;
const pete2 = document.body.children[1].children[1];

console.log(pete1);
console.log(pete2);

// ==================

const greet = document.getElementById('greeting');

console.log(greet.innerHTML);
