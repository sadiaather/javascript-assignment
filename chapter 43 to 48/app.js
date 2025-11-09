// question no.1

function greet(){
    alert(`hello user`)
}


// question no.2

function thanks(){
    alert(`thanks purchasing mobile for us`)
}

// question no .3

function remove(e){
e.parentNode.parentNode.remove()
    
}

// question no.4

// on html page

// question no.5

function increase(){
    let value = document.getElementById("counter").innerHTML;
     value = parseInt(value)
      console.log(value);
     value = value + 1
     document.getElementById("counter").innerHTML = value
 
}
function decrease(){
    let value = document.getElementById("counter").innerHTML;
       value = parseInt(value)
      console.log(value);
     value = value - 1
     document.getElementById("counter").innerHTML = value 
}