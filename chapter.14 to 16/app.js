// question no.1

const students = [];

// question no.2

const student = new Array();

//  question no.3

const colors = [ "red" , "green" , "blue" , "yellow"]
document.write(colors)
document.write(`</br>`)

// question no.4

const numbers = [ 22 ,23  ,24 ,25 ]
document.write(numbers)
document.write(`</br>`)

// question no.5

const booleans = [ true , false ]
document.write(booleans)
document.write(`</br>`)

// question no.6

const mixtures = [ "red" , "green" , 22 , 45 , true]
document.write(mixtures)
document.write(`</br>`)

// question no.7

const qualifications = [ `<h1>QUALIFICATIONS:</h1>
                           <h2>1) SSC</h2>
                           <h2>2) HSC</h2>
                           <h2>3) BSC</h2>
                           <h2>4) BS</h2>
                           <h2>5) BCOM</h2>
                           <h2>6) MS</h2>
                           <h2>7) M.PHIL</h2>
                           <h2>8) PHD</h2>`]
document.write(qualifications)
document.write(`</br>`)

// qustion no.8

const studentNames = ["sadia" , "ishmal " , "shazmeen"];
const studentNumbers = [480 , 320 , 230];
let totalmarks = 500;
let percentage1 = studentNumbers[0]/totalmarks*100 
let percentage2 = studentNumbers[1]/totalmarks*100  
let percentage3 = studentNumbers[2]/totalmarks*100 

document.write(`score of  ${studentNames[0]} is  ${studentNumbers[0]}. pecentage  ${percentage1} % <br/>` )

document.write(`score of  ${studentNames[1]} is  ${studentNumbers[1]}. pecentage  ${percentage2} % <br/>` )

document.write(`score of  ${studentNames[2]} is  ${studentNumbers[2]}. pecentage  ${percentage3} %  <br/> <br/>` )

// qustion no.9

const colrs = ["red" , "green" , "blue" , "orange"]
document.write(colrs)
document.write("<br/>")

// a
let userColr = prompt(`what colr you want to add in start?`)
colrs.unshift(userColr)
document.write(colrs)
document.write("<br/>")
// b
let useradd = prompt(`what colr you want to add in last?`)
colors.push(useradd)
document.write(colors)
document.write("<br/>")
// c
 colrs.unshift("black","yellow")
document.write(colrs)
document.write("<br/>")
// d
colrs.shift()
document.write(colrs)
document.write("<br/>")
// e
colrs.pop()
document.write(colrs)
document.write("<br/>")
// f
let add = prompt(`which colr you want to add?`)
let Index = +prompt(`in which index number want to show?`)
 colrs.splice(Index,0,add)
document.write(colrs)
document.write("<br/>")
// g
let delet = +prompt(`how many colrs you want to delete?`)
let d_index = +prompt(`which index number want to delete you?`)
colrs.splice(d_index,delet)
document.write(colrs)
document.write("<br/>")

// question no.10

const studentnumbers = [320 ,  230 , 480 , 120];
document.write(`score of student  ${studentnumbers} <br/>`)
document.write(`ordered score of student  ${studentnumbers.sort()} `)
 document.write("<br/>")

//  question no.11

const cities = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"];
 document.write(`cities lists: ${cities}`)
  document.write("<br/>")
 NEW = cities.slice(2,4)
  document.write(`selected cities lists : ${NEW}`)
   document.write("<br/>")

//    question no.12

const  sent = ["This" , "is" , "my" , "cat"];
 document.write(`array : <br/> ${sent}`)
  document.write("<br/>")
 let  string = sent.join(`   `);
   document.write(`string : <br/> ${string}`)
    document.write("<br/>")

    // question no.13

    const device = ["keybord" ,  "mouse"  , "printer"  , "monitor"]
     document.write(device)
      document.write("<br/>")
     let out = device.shift()  
      document.write(`out : <br/> ${out} <br/>`)
      let out1 = device.shift()
      document.write(`out : <br/> ${out1} <br/>`) 
        let out2 = device.shift()
      document.write(`out : <br/> ${out2} <br/>`)
        let out3 = device.shift()
      document.write(`out : <br/> ${out3} <br/>`)

    //  question no.14

    
    const Device = ["keybord" ,  "mouse"  , "printer"  , "monitor"]
     document.write(device)
      document.write("<br/>")
     let Out = Device.pop()  
      document.write(`out : <br/> ${Out} <br/>`)
      let Out1 = Device.pop()
      document.write(`out : <br/> ${Out1} <br/>`) 
        let Out2 = Device.pop()
      document.write(`out : <br/> ${Out2} <br/>`)
        let Out3 = Device.pop()
      document.write(`out : <br/> ${Out3} <br/>`)

    //   question no.15

    const phones = ["Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier"]
    let index = 0
    document.write(`<select>`)
    document.write(`<option>  ${phones[index++]} </option>`)
     document.write(`<option>  ${phones[index++]} </option>`)
     document.write(`<option>  ${phones[index++]} </option>`)
     document.write(`<option>  ${phones[index++]} </option>`)
     document.write(`<option>  ${phones[index++]} </option>`)
     document.write(`<option>  ${phones[index++]} </option>`)
     document.write(`<select>`)

    //    ==========8*******&======