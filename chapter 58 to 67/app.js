// question no.1

// 1
let main = document.getElementById("main-content");
console.log(main );

// 2
let child = main.children;
console.log(child);

// 3

let cont = document.getElementsByClassName("render")
for (let i=0; i<cont.length; i++){
console.log(cont[i].innerHTML);
}


// 4 0r 5

let fName = document.getElementById("first-name") ;
let lName = document.getElementById("last-name");
let email = document.getElementById("email");

fName .value = "sadia"

lName . value = "ather"

email.value =  "sadiather@gmail.com"

// question no.2

// 1
let form = document.getElementById("form-content")
console.log(form.nodeType);
document.write(`form content ki typenode 1 he ye element node he <br/>`)

// 2
let lastNameNode = document.getElementById("lastName")
console.log(lastNameNode.nodeType);
document.write(`lastname ki typenode 1 he ye element node he <br/>`)

console.log(lastNameNode.firstChild. nodeType);
document.write(`lastname k childnode ki typenode 3 he ye text node he <br/>`)

// 3

lastNameNode.innerText = "ather"
console.log(lastNameNode);

// 4

let first = main.firstElementChild
console.log(first);
let last = main.lastElementChild
console.log(last);

// 5
// next sibling
console.log(lastNameNode.nextElementSibling);
// perivous sibling
console.log(lastNameNode.previousElementSibling);

// 6


console.log(email.parentNode);
console.log(email.parentNode.nodeType);
document.write(`email  ki typenode 1 he ye element node he <br/>`)






