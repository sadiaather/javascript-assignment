// queation no.1

let charcter = prompt(`enter number to check  given input is number, upper case or lower case letter  `)
if (charcter >= 48 && charcter <= 60){
    alert("its a number")
}
else if (charcter >= 65 && charcter <= 90 ){
    alert("its upercase letter")
}
else if (charcter >= 95 && charcter <=150){
    alert("its lowercase letter" )
}
else{
    alert("not a number")
}

// question no.2
// sloved by ternary opareter
let num1 = +prompt(`enter your first number`)
let num2 = +prompt(`enter your second number`)
let output = (num1 > num2) ? "num1 is greater then num2"
            :(num1 < num2) ? "num1 is less then num2"
            :`both are equal`
    alert(output) 
    
// question no.3

    let nam = +prompt(`enter number you want to check is positive , negative or zero `)
    let result = (nam > 0) ? "number is positive"
               : (nam < 0) ? "number is negitive"
               :"number is zero"
               alert(result)

//  question no .4  

let word = prompt(`enter the character to check vowel or not`)
let show = (word==="a") ? "this is vowel"
           : (word==="e") ? "this is vowel"
           : (word==="i") ? "this is vowel"
           : (word==="o") ? "this is vowel"
           : (word==="u") ? "this is vowel"
           :"this is not vowel"
           alert(show)

// question no.5

let password = "sadia124";
let userPassword= prompt(`enter your password`)
// let FINAL  = (password===" ") ? "enter your password"
//             :(password===userPassword) ? "Correct! The password you entered matches the original password"
//             :"incorrect password"
//                       alert(FINAL)
if (userPassword=="  "){
    alert(`enter your password`)
}
else if (userPassword===password){
   alert ("Correct! The password you entered matches the original password")

}
else {
    alert(`incorrect password`)
}

// question no.6

let greeting 
let hour = +prompt(`what time is it`)
let message = (hour <18) ? "good day": "good evening"
alert(message)

// question no.7

let time = +prompt(`enter time in 24 hours
    clock formate 1900=7pm`)
 let clock = (time>=100 && time<=900 )? "good morning"
            :(time>=1000 && time<=1500 )? "good afternoon"
            :(time>=1600 && time<=2000 )? "good evening"
            : "good night"
            
            alert(clock)