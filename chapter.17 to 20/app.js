// // question no.1

// const num = []

// // question no.2

// const nums = [[0,1,2,3][1,0,1,2][2,1,0,1]];

// // question no.3

// for(let i=1; i<=10 ; i++){
//     document.write(`${i} <br/>`)
// }

// // question no.4

// let table = prompt(`enter a number to show its multipicatin table`)
// let length = prompt(`enter a length multipicatin table`)
// for (let i=1; i<=length; i++){
//     document.write(`${table}x${i}=${table*i} <br/>`)
// }

// // question no.5

const fruits = ["apple" , "banana" , "mango" ,"orange","starwberry"]
// for(let i=0; i<=fruits.length; i++ ){
//     document.write(`${fruits[i]} <br/>`) 
// }

for(let i=0; i<fruits.length; i++ ){
    document.write(`index no ${i} ${fruits[i]} <br/>`) 
}

// question 
//    const numbers = [24 ,53, 178,91,12]
//    let largestnum = numbers[0] //24
//    for(let i=0; i<numbers.length;i++){
//     if(numbers[i]>largestnum){
//         largestnum = numbers[i]
//     }
    
//    }
// console.log(largestnum);
const numbers =[22,58,99,100,200,1]
let bara = numbers[0] 
for (let i=0;i<numbers.length;i++)
    if(numbers[i]>bara){
        bara=numbers[i]
    }
    console.log(bara)


    let min= numbers[0]
    for (let i=0;i<numbers.length;i++)
    if(numbers[i]<min){
        min=numbers[i]
    }
    console.log(min)
