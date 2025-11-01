// // question no .1

let date = new Date();
document.write(date)
document.write("<br/>")

// // question no .2

function  greet (firstname,lastname){
  document.write(`hello ${firstname} ${lastname} <br/>`)  
}
greet("sadia", "ather")

// question no .3

function sum (no1 ,  no2){
    let sum = no1 + no2
    document.write(`the sum of ${no1} or  ${no2} is ${sum} <br/>`)
}
sum(20, 40) 

// // question no.4

function calculator (num1,num2,operator ){
    if(operator==="+"){
      let result = num1 + num2 
      document.write(result)       
    }
     if(operator==="-"){
      let result = num1 - num2 
        document.write(result)        
    }
     if(operator==="/"){
      let result = num1 / num2 
        document.write(result)        
    }
     if(operator==="*"){
      let result = num1 * num2
        document.write(result)         
    }
  
    }
    first= Number(prompt(`enter first number`));
     operators = prompt(`want operation you want`);
    second = Number(prompt(`enter second number`));   

calculator(first, second, operators)
 document.write("<br/>")

// // quetion no .5

function square(num){
    let square =num*num
    document.write(square);
}
 let numbers = Number(prompt(`enter number for square`));
square(numbers)
document.write("<br/>")

// question no .6

function factorial(){
let n = Number(prompt('enter number check factorial or not'))
let fact = 1;
if (n === 1 || n === 0) {
}
else {
    for (var i = n; i >= 1; i--) {
        fact = fact * i
    }
}
document.write(fact)
}
factorial()
document.write("<br/>")

// question no .7

function count(start,end){
    for(i=start; i<=end; i++)
    {document.write(`${i} <br/>`)
    }
}
let start = Number(prompt(`enter your start number`));
let end = Number(prompt(`enter your end number`));
count(start,end)

// question no.8

function calculateHypo (base,perpendicular){
    function calculatesquare(num){
        num = num*num;
        return num;
    }
    base = calculatesquare(base);
    perpendicular = calculatesquare(perpendicular);
    let hypo = base + perpendicular;
    return hypo;
}
let base = Number(prompt(`enter base of right angle triangle`));
let perpendicular = Number(prompt(`enter perpendicular of right angle triangle`));
let hypo = calculateHypo(base,perpendicular);
document.write(`the hypogenous of right angle triangle is ${hypo} <br/>`)

// question no.9

function area (width,height){
    let A = width*height;
    return A;
}
let width = Number(prompt(`enter width of rectangle`));
let height = Number(prompt(`enter height of rectangle`));
let result = area(width,height);
document.write(`Area of rectangle is ${result} <br/>`)

// question no.10

function palindrome (string){
    let check = "";
    for(let i=string.length-1; i>=0; i--){
        check += string[i];
    }
    if(string===check){
        document.write(`${string} is palindrome word`) 
    }
    else{
       document.write(`${string} is not  palindrome word`)  
    }
}
let str = prompt(`enter some thing to check palindrome word `);
palindrome(str); 
document.write(`<br/>`)

// question no.11

function toUperCase (strings){
let arr= strings.split(" ");
let newarr = [];
for (let i =0; i<arr.length; i++){
   newarr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice (1)) 
}
return newarr.join(" ")
}
let strings = "the quike brown fox";
let results = toUperCase(strings);
 document.write(`EXAMPLE STRING :  ${strings}<br/>`)
  document.write(`EXPECTED OUTPUT :  ${results}<br/>`)

//  quesrion no.12

function longest (sent){
   let split = sent.split(" ") 
   let word = split[0].length;
 for(let i=0; i < split.length; i++){
if( word < split[i].length){
    word = split[i];
}
}
 return word;
}
let sent = "web devolopment tutorial";
let final = longest(sent);
 document.write(`EXAMPLE STRING :  ${sent}<br/>`)
 document.write(`EXPECTED STRING :  ${final}<br/>`)

//  question no.13

function count (string,letter){
    let find = 0;
    for(let i=0; i<string.length; i++){
        if(string[i]=== letter){
            find +=1;
        }
    }
     return find
}
let string = "JSResourceS.com";
let letter = "o";
let finals = count(string,letter);
document.write(`The occurence of o in this string is ${finals} <br/>`)

// question no.14

let radius = 3.141;

function calcCircumference(value){
      let circumference = 2*3.141*value;
      return circumference;
}
function calcArea(value){
      let area = 3.141*(value*value);
      return area;
}
let value = Number(prompt(`enter radius of circle`));
let circumference = calcCircumference(value);
let Area = calcArea(value);
document.write(`the circumference of circle is :  ${circumference} <br/>`)
document.write(`the area of circle is : ${Area} <br/>`)

