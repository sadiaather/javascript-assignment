// question no.1
let a = 10

document.write(`Result <br/>`)
document.write(`the value of a is: ${a} <br/>`)
document.write(`----------------------<br/>`)
// pre increment
a = ++a
document.write(`the value of ++a is : ${a} <br/>` )
document.write(`now the value of a is : ${a}<br/> <br/> `)

document.write(`the value of ++a is : ${a} <br/>`)
a = ++a 
document.write(`now the value of a is : ${a}<br/><br/> `)
// pre decrement
a = --a
document.write(`the value of --a is : ${a} <br/>`) 
document.write(`now the value of a is : ${a}<br/><br/> `)

document.write(`the value of --a is : ${a} <br/>`)
a = --a 
document.write(`now the value of a is : ${a}<br/><br/> `)

// question no.2
let A = 2
let B = 1
document.write(`the value of a is : ${A} <br/>`)
document.write(`the value of b is : ${B}<br/><br/> `)
let result = --A - --B + ++B + B--;
document.write(`the result is ${result} <br/>`)
// --a - --b + ++b + b--
// --2 - --1 + ++1 +1--
// solve
// 1 - 0 + 1 + 1
// 3

// // question no.3
let user = prompt("enter your name")
alert(`hello ${user} ` )
document.write(`hello ${user} <br/>` )

// // question no.4
let  table = +prompt(`enter a number`)
let i = 1

if(table == 0){
    document.write(`5 x ${i} = ${i*5}`)
}
else{
    document.write(`${table} x ${i} = ${i*table}`)
}


// question no.5
// a
let sub1 = prompt(`enter your first subject`)
let sub2 = prompt(`enter your second subject`)
let sub3 = prompt(`enter your third subject`)
// b
let totalMarks = 100
// c
let obtaiendSub1 = +prompt(`enter your first subject marks  `)
// d
 let obtaiendSub2 = +prompt(`enter your second subject marks  `)
 let obtaiendSub3 = +prompt(`enter your third subject marks  `)
//  e

let percentage1 = (obtaiendSub1/100)*100;
let percentage2 = (obtaiendSub2/100)*100;
let percentage3 = (obtaiendSub3/100)*100;
let obtainedMarks = obtaiendSub1 + obtaiendSub2 + obtaiendSub3;
let percentage = (totalMarks/obtainedMarks)*100;

document.write(`<table>
    <tr>
    <th>Subject<th/>
    <th>Total marks<th/>
    <th>Obtained marks<th/>
    <th>Percentage<th/>
    <tr/>

    <tr>
    <td> ${sub1}<td/>
     <td> ${totalMarks}<td/>
     <td> ${obtaiendSub1}<td/>
      <td> ${percentage1}%<td/>
     <tr/>

      <tr>
    <td> ${sub2}<td/>
     <td> ${totalMarks}<td/>
     <td> ${obtaiendSub2}<td/>
      <td> ${percentage2}%<td/>
     <tr/>

      <tr>
    <td> ${sub3}<td/>
     <td> ${totalMarks}<td/>
     <td> ${obtaiendSub3}<td/>
      <td> ${percentage3}%<td/>
     <tr/>

       <tr>
    <td> <td/>
     <th> ${totalMarks*3}<th/>
     <th> ${obtainedMarks}<th/>
      <th> ${percentage}%<th/>
     <tr/>
     <table/>`)
     