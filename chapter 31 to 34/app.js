// question no.1

let today = new Date();
document.write(today)
document.write("<br/>")

// question no.2

let date = new Date()
const monthNames = ["January", "February", "March", "April", "May", "June", 
                  "July", "August", "September", "October", "November", "December"];
 let monthName =   monthNames[date.getMonth()];
    document.write(`cruuent month : ${monthName}`)
    document.write("<br/>")            

    // question no.3
     
    const  days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let day = today.getDay()
    let value = days[day];
     newvalue = value.slice(0,3);
      document.write(newvalue)
       document.write("<br/>") 

    // // question no.4

     const  dAys = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let fun = today.getDay();
    fun = prompt("enter a day")
    if(fun==="saturday"|| fun==="sunday"){
        document.write("it's  fun day")
    } 
    else{
document.write("working day")}
 document.write("<br/>") 

    // question no.5

let month = 15
    if(month===15){
        document.write("first fifteen days of month")
    }else{
       document.write("last fifteen days of month    ") 
    }
     document.write("<br/>") 

    //  question no.6

    let currentDate = new Date();
 document.write(`currentDate : ${currentDate} <br/>`)  
 let newDate = new Date("jan 1 1970");
 let Milliseconds = currentDate.getTime(); 
let mint = Milliseconds/(1000*60); 
document.write(`elapsed miliseconds since january, 1 , 1970 :  ${Milliseconds} <br/>`) 
document.write(`elapsed minute since january, 1 , 1970 : ${mint} <br/>`) 

// question no.7

  let CurrentDate = new Date();
let hours = CurrentDate.getHours();
if(hours>12){
    
     document.write("ITS AM")
}
else{
    
     document.write("ITS PM ")
}
 document.write("<br/>") 

// question no .8

let now = new Date();
let past = new Date("31 dec 2024");
 document.write(`leter date :${past} <br/>`) 

// quetion no.9

let dateToday = new Date();
let miliseconds = dateToday.getTime();
let ramzan = new Date("18 june 2015");
let ramzanmili = ramzan.getTime();
let passday = miliseconds - ramzanmili;
let leftdays = Math.floor(passday/(1000*60*60*24))
 document.write(`${leftdays} days have passed since 1st ramzan 2015 <br/>`) 

//  question no .10
let aj = new Date();
let mili = aj.getTime();
let year = new Date("5 dec 2015");
document.write(` on refernce date  ${year} <br/>`)
let newd = year.getTime();
let diff = mili - newd;
let secound = Math.round(diff/1000)
document.write(`${secound} secound has passed since begenning of 2015 <br/>`)

// question no.11

let d = new Date();
let hour = d.getHours();
hour= hour-1;
document.write(`current date ${d} <br/>`) 
 d.setHours(hour);
document.write(`one hour ago it was ${d} <br/>`) 

// question no.12

let da = new Date(); 
let Hour = da.getFullYear();
hour = hour-100;
document.write(`current date ${da} <br/>`)
 da.setFullYear(hour);
document.write(`100 years back , its was   ${da} <br/>`)

// question no.13

let userbirth = Number(prompt(`enter your age`));
let yet = new Date();
let newyet  = yet.getFullYear();
let age = newyet - userbirth;
document.write(`your age is ${age} <br/>`) 
document.write(`your birth year is ${userbirth} <br/>`)

// question no.14

let username = "Ather";
let bilmonth = "Octuber";
let units = 410
let perunit = 16
let latecharges = 350
let netamount = units*perunit
let grossamount = netamount + latecharges
document.write(`<h1> K-ELECTRIC BILL</h1>
                Customer name : ${username} <br/> 
                Month of bill : ${bilmonth}  <br/> 
                Number of unit : ${units} <br/> 
                Charges per unit : ${perunit} <br/> 
                
                Net amount payable (within due date) : ${netamount} <br/> 
                Late payment surcharge : ${latecharges}  <br/> 
                Gross amount payable (after due date) : ${grossamount}  <br/> `)


