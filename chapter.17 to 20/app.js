// // question no.1

const number = [ [ [] ] ];

// // question no.2

const nums = [[0,1,2,3],
             [1,0,1,2] ,
             [2,1,0,1]];
for(let i=0; i<3; i++){    
       for(let j=0 ; j<4; j++){
document.write(nums[i][j] + " ")
       }
    document.write("<br/>")
        }


      

// // question no.3

for(let i=1; i<=10 ; i++){
    document.write(`${i} <br/>`)
}

// question no.4

let table = prompt(`enter a number to show its multipicatin table`);
let length = prompt(`enter a length multipicatin table`);
for (let i=1; i<=length; i++){
    document.write(`${table}x${i}=${table*i} <br/>`)
}

// // question no.5

const fruits = ["apple" , "banana" , "mango" ,"orange","starwberry"];
for(let i=0; i<fruits.length; i++ ){
    document.write(`${fruits[i]} <br/>`) 
}

for(let i=0; i<fruits.length; i++ ){
    document.write(`element at index no ${i} ${fruits[i]} <br/>`) 
}

// question no.6
// a
document.write(`<h1>Counting:</h1> <br/>` )
for (let i=1; i<=15; i++){
    document.write(` ${i}  ,   `)
}
// b
document.write(`<h1>Reverse Counting:</h1> <br/>` )
for (let i=10; i>=1; i--){
document.write(` ${i}  ,    ` )
}
// c
document.write(`<h1>Even:</h1> <br/>` )
for(let i=0; i<=20 ; i++){
    if(i%2===0){
        document.write(` ${i}  ,   ` )
    }
}
// d
document.write(`<h1>Odd:</h1> <br/>` )
for(let i=0; i<=20; i++){
    if(i%2!==0){
        document.write(`${i}  ,      ` )
    }
}
// e
document.write(`<h1>Series:</h1> <br/>` )
for (let i=2; i<=20; i++){
    if(i%2===0){
        document.write(`${i} k   ,     ` )
    }
}
document.write(`<br/>`)

// quetion no.7

const A = ["cake" , "apple pie" , "cookies" , "chips" , "patties"]
let item = prompt(`wellcome to my bakery what do you want?`)
let flag= false
for(let i=0; i<A.length; i++){
    if(A[i]===item){
        document.write(`ohh! yes ${item} avaiable at index no.  ${i}`)
         flag=true
    }
}
if(flag===false){
    document.write(`ohh! sorry ${item} not avaiable in our bakery`)
}
document.write(`<br/>`)

// question no.8

const num = [24,53,78,91 ,12]
document.write(`array items :${num} <br/>`)
let largernum = num[0]
for(let i=0; i<num.length; i++){
    if(largernum<num[i]){
        largernum=num[i]}
    
}
 document.write(`larger number is  ${largernum}`)
document.write(`<br/>`)

// question no.9

const arr = [24,53,78,91 ,12]
document.write(`array items :${arr} <br/>`)
let smaller=arr[0]
for (let i=0; i<arr.length;i++){
    if(smaller>arr[i]){
        smaller=arr[i]
    }
}
document.write(`smaller number is  ${smaller}`)
document.write(`<br/>`)

// question no.10

for(let i=5; i<=100; i++){
    if(i%5===0){
        document.write(`${i}  ,   `)
    }
}


    









