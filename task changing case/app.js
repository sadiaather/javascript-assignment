function toLowerCase (){
    let userText = document.getElementById("userText").value.toLowerCase(); 
    let result = document.getElementById("output");
    result.innerHTML = `${userText}` 
}  

function toUpperCase (){
    let userText = document.getElementById("userText").value.toUpperCase() 
    let result = document.getElementById("output")
    result.innerHTML = `${userText}` 
} 

function capitalize (){
    let userText = document.getElementById("userText").value
    let word = userText.split(" ")
    let result = [] 
    for(let i=0; i<word.length;i++){
    result. push (word[i][0].toUpperCase()+ word[i].slice(1).toLowerCase())
    }
      let arr = result.join(" ")
      

     let final = document.getElementById("output") 
output.innerHTML = `${arr}`
} 

function bold  (){
    let userText = document.getElementById("userText").value.bold() 
    let result = document.getElementById("output")
    result.innerHTML = `<strong>${userText}<strong/>` 
} 

function italic (){
    let userText = document.getElementById("userText").value 
    let result = document.getElementById("output")
    result.innerHTML = `<em>${userText}<em/>` 
} 

function greet (){
let user1 = document.getElementById("user1").value.toUpperCase()
let result = document.getElementById("output")
result.innerHTML= `${user1}`
}
