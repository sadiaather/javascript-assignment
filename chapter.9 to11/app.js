// question no.1

let city = prompt("what is your city?")
if(city==="karachi"){
alert(`wellcome to the city of light`)
}

// question no.2

let gender = prompt("what is your gender?")
if(gender==="male"){
    alert(`good maorning sir`)
}
else if(gender==="female"){
    alert(`good morning madam`)
}

// question no.3

let trafficLight = prompt("what light is show?")
if (trafficLight==="red"){
    alert(`must stop`)
}
else if(trafficLight==="yellow"){
    alert(`ready to move`)
}
else if(trafficLight==="green"){
    alert(`move now`)
}

// question no.4

let fuel = +prompt("what is your remaing fuel?")
if (fuel < 0.25){
    alert(`please refill the fuel in your car`)
}

// question no.5

// a
let a = 4;
if(++a===5){
    alert(`given condition for variable a is ture`)
}
// answer : yes this is ture

// b
let b = 82;
if(b++===83){
     alert(`given condition for variable a is ture`)
}
// answer : its not ture because post increment show after reassginment

// c
let c = 12;
if(c++===13){
    alert(`condition 1 is ture`)
}
// answer : not
if(c===13){
    alert(`condition 2 is ture`)
}
// answer : yes
if(++c<14){
    alert(`condition 3 is ture`)
}
// answer :not
if(c===14){
    alert(`condition 4 is ture`)
}
// answer :yes

// d
let matetrialCost = 20000;
let laborCost = 2000;
let totalCost = matetrialCost + laborCost
if(totalCost=== matetrialCost + laborCost){
    alert(`the cost equal`)
}
// answer : yes its true

// e
if(true){
    alert(`true`)
}
// answer :yes
if(false){
    alert(`false`)
}
// answer :yes 

// f
if("car" < "cat"){
    alert(`car is smaller then cat`)
}
// // answer : yes this is right

// question no.6

let markObtained = +prompt(`enter your three subject marks obtained`)
let totalMark = +prompt(`enter  total marks`)
let percentage = (markObtained/totalMark)*100
document.write(`<h1>Mark Sheet</h1>`)
if (percentage>=80){
    document.writeln(`Grade: A-one
        Remarks : Excellent </br>`)
}
else if(percentage>=70){
   document.writeln(`Grade: A </br>
        Remarks : Good </br>`) 
}
else if(percentage>=60){
   document.writeln(`Grade: B </br>
        Remarks : you need improvment </br>`) 
}
else if(percentage<60){
   document.writeln(`Fail </br>
        Remarks :Sorry </br/> `) 
}

document.write(`Total mark : ${totalMark} </br>`)
document.write(`Mark obtained : ${markObtained} </br> `)
document.write(`Percentage : ${percentage} </br>`)

// question no.7

let secretNumber = +prompt(`guess is the secret number `)
let guess = 5
if(secretNumber===guess){
    alert(`bingo! correct answer`)
}
 else if(++secretNumber!=guess){
    alert(`close enough to the correct answer`)
 }

//  question no.8

let num = +prompt(`enter the number to check its divisible`)
if(num%3===0){
    alert(`${num} is divisble by 3`)
}
else{
    alert(`not diisble by 3`)
}

// question no.9

let Num = +prompt(`enter the number check number is even oe odd`)
if(Num%2===0){
    alert(`the number ${Num} is even`)
}
else {
   alert( `the number ${Num} is odd`)
}

// question no.10

let temperture = +prompt(`what about today weather?`)
if(temperture > 40){
    alert(`it is too hot outside`)
}
else if(temperture > 30){
    alert(`today's weather is normal`)
}
else if(temperture > 20){
    alert(`today's weather is cool`)
}
else if(temperture > 10){
    alert(`OMG! today's weather is so cool`)
}
else{
    alert(`stay home its tooo cold weather`)
}

// question no.11
let firstNum = +prompt(`enter your first number`)
let secondNum = +prompt(`enter your second number`)
let operate = prompt(`what is your operation?`)
if(operate==="+"){
    alert(firstNum + secondNum)
}
else if (operate==="-"){
    alert(firstNum - secondNum)
}
else if (operate==="*"){
    alert(firstNum * secondNum)
}
else if (operate==="/"){
    alert(firstNum / secondNum)
}
else{
    alert(firstNum % secondNum)
}