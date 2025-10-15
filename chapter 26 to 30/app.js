// question no.1

let num = prompt(`enter your number`);
let round = Math.round(num);
let floor = Math.floor(num);
let ceil = Math.ceil(num);
document.write(`number ${num} <br/>`)
document.write(`round of value ${round} <br/>`)
document.write(`floor value ${floor} <br/>`)
document.write(`ceil value ${ceil} <br/>`)

// question no.2

let num2 = prompt(`enter your nagative number`);
let round2 = Math.round(num2);
let floor2 = Math.floor(num2);
let ceil2 = Math.ceil(num2);
document.write(`number ${num2} <br/>`)
document.write(`round of value ${round2} <br/>`)
document.write(`floor value ${floor2} <br/>`)
document.write(`ceil value ${ceil2} <br/>`)

// question no.3

let value = prompt(`enter number for absoult`)
let absolut = Math.abs(value)
document.write(`absolut vaue of ${value} is ${absolut} <br/>`)


// question no.4

let random = Math.random()*6;
let floor1 = Math.floor(random);
document.write(`random dice  :  ${floor1} <br/>`)

// question no.5

let dice = Math.random()*3;
let coin = Math.floor(dice); 
if(dice<=2){
    document.write (`${coin} random coin value : tail <br/>`)} 
    else {
        document.write (`${coin} random coin value : head <br/>`) }

// qeustion no.6

let number = Math.random()*100;
let ceil1 = Math.ceil(number);
document.write(`random number between 1 to 1000 : ${ceil1} <br/>`)

// question no.7

let we8 = prompt(`enter your weigth in kilogram`);
let weigth = parseFloat(we8)
document.write (`the weigth of user is ${weigth.toFixed(1)} kilogram <br/>`)

// question no.8

let secert = Math.ceil((Math.random()*10));
document.write (`${secert} <br/>`)
let user = prompt(`enter your number between 1 to 10`);
if(user===secert){
    document.write(`congraulation your get secert number <br/>`)
}
else{
    document.write (`try again `)
}
