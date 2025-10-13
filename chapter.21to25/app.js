// question no.1

let firstname = prompt(`what is you first name?`);
let lastname = prompt(`what is you last name?`);
let fulname = firstname + lastname;
document.write(`hello! ${fulname} wellcome to javascript <br/>`)

// qiestion no.2

let userphone = prompt(`what is your favorite mobile model?`);
let length = userphone.length;
document.write(`my favorite phone is : ${userphone} <br/>`)
document.write(`length of string is : ${length} <br/>`)

// question no.3

let word = "pakistani";
for(let i=0; i<word.length; i++){
        if (word[i]==="n"){
    document.write(`string : ${word} <br/> `);
     document.write(`index  of "n" : ${i} <br/> `);
        }
    }
// question no.4

let letter = "hello world";
let newl = letter.lastIndexOf("l");
document.write(`string : ${letter} <br/>`)
document.write(`last index of 'l' : ${newl} <br/>`)

// question no.5

let word2 = "pakistani";
let newword = word2.charAt(3);
document.write(`string : ${word2} <br/>`)
document.write(`character at index 3 : ${newword} <br/>`)

// question no.6


let fname = prompt(`what is you first name?`);
let lname = prompt(`what is you last name?`);
let fullname = fname + lname;
document.write("hello!" +fullname+ "wellcome to javascript" +"<br/>")

// question no.7

let city = "Hyderabad";
let newCity = city.replace("Hyderabad" , "Islamabad");
document.write(`city : ${city} <br/>`)
document.write(`after replacement : ${newCity} <br/>`)

// question no.8

let message = "Ali and Sami are good friends.They play circket and football together";
let newmessage = message.replace(/and/g , "&") ;
document.write(`before : ${message} <br/>`)
document.write(`after: ${newmessage} <br/>`)

// qustion no.9

let number = "742";
document.write(`value : ${number} <br/>`)
document.write(typeof(` ${number} <br/> `))
document.write(`<br/>`)
let value = 742;
document.write(`value : ${value} <br/>`)
document.write(typeof(value) )
document.write(`<br/>`)

// question no.10

let userInput = prompt(`write some thing`);
let newInput = userInput.toUpperCase();
document.write(`user input : ${userInput} <br/>`)
document.write(`upper case : ${newInput} <br/>`)

// question no.11

let input = "javascript";
input= input.split()
let result = [];
for(let i=0; i<input.length; i++){
result = input[i][0].toUpperCase() + input[i].slice(1).toLowerCase()
document.write(`user input : ${input} <br/>`)
document.write(`title case : ${result} <br/>`)} 

// question no.12

let num = 35.36;
let string = num.toString();
let index = string.indexOf(".");
let final = string.slice(0,index) + string.slice(index+1); 
document.write(`number : ${num} <br/>`)
document.write(`result: ${final} <br/>`)


// question no.13

let username = prompt(`enter your name`);
let char ;
for (let i=0; i<username.length; i++){
    char = username.charCodeAt(i)
    if(char===33|| char===44|| char===46|| char===64) {
        alert(`please enter valid password`)
    }
}

    // quetion no.14

    const items = ["cake", "apple pie", "cookie", "chips", "patties"];
    let wants = prompt(`what do you want to order?`);
    wants = wants.toLowerCase();
    let check = false;
    for (let i=0; i<items.length; i++){
        if (wants===items[i]){
            document.write(`${items[i]} is avaible at ${i} index number in our bakery <br/>`)
            check = true;}

        }if(check===false){
            document.write(`we are sorry ${wants} is not avaible in bakery <br/>`)
        }

    
// quetion no.15

// let passward = prompt(`enter your passward`);
// let flag = false
// if(passward==="a-z,A-Z,0-9"){
// flag = true;
// }

// if(flag===false){
// document.write(`enter valid passward` <br/>)}


// question no.16

let uni = "university of karachi";
let univer = uni.split("");
for (let i=0; i<uni.length; i++){
    document.write(`${univer[i]} <br/>`)
        }

// question no.17

let user = "pakistan"
let pro = user.charAt(user.length-1) 
document.write(`user input : ${user} <br/>`)
document.write(`last charcter of pakistan is : ${pro} <br/>`)

// question no.18

let text = "The quick brown fox jumps over the lazy dog";
text = text.toLowerCase()
let ftext = text.match(/the/g);
let count = ftext.length
document.write(`there are ${count} is occurrences(s) of word  "the" `)