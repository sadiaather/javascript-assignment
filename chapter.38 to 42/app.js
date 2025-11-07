// question no.1

function  power(num,power){
  let powerS = num**power;
  return powerS;
}
let a = Number(prompt(`enter the number`));
let b = Number(prompt(`enter the power`));
let Power = power(a,b);
document.write(`${a} <sup>${b}</sup>  is    ${Power} <br/>`)

// question no.2

let year = prompt(`enter the year`)
switch (year){
    case "2012":
        document.write(`leap year`)
        break;
     case "2016":
         document.write(`leap year`)   
        break;
     case "2020" :
         document.write(`leap year`)
         break;
         default:
             document.write(`not a leap year`)   
}
 document.write(`<br/>`)

//  question no.3

function area(s1,s2,s3){
    let S = findS(s1,s2,s3);
    let area =S*(S-a)*(S-b)*(S-C);
    return area;
}
function findS(a,b,c){
    let find = (a+b+c)/2;
    return find;
}
let A = Number(prompt(`length a`));
let B = Number(prompt(`length b`));
let C = Number(prompt(`length c`));
let result = area(A,B,C);
 document.write(`The area of triangle is ${result} <br/>`)

// question no. 4

function mainFunction (){
    let sub1 = Number(prompt(`enter first subject marks`));
    let sub2 = Number(prompt(`enter second subject marks`));
    let sub3 = Number(prompt(`enter third subject marks`));
    let total = Number(prompt(`enter total marks`));
    let average = ave(sub1,sub2,sub3);
    let per = percen(sub1,sub2,sub3,total);
    document.write(`<h1> Average </h1> is ${average} <br/>`)
     document.write(`<h1> Percentage </h1> is ${per} % <br/>`)
}
function ave(a,b,c){
  let ave = (a+b+c) /3;
  ave = ave.toFixed(2);
  return ave;
}
function percen(a,b,c,total){
    let perc = (a+b+c)/total*100;
    perc = perc.toFixed(2);
    return perc;
}

mainFunction()

// question no.5

function index(str,char){
    let no ;
    for(let i=0; i<str.length; i++ ){
        if(str[i]===char){
            no = i;
            break;
        }
    }
    return no;
}
let strr = "hello world";
let indexOf = prompt(`enter the charcter to find`);
let results = index(strr,indexOf);
 document.write(` ${strr} <br/>`)
 document.write(`the indexof ${indexOf} is ${results} <br/>`)

//  question no.6

let string = prompt(`enter sentenc to delete vowels`)
function vowel(sentence){
    let remove = "" 
for(let i=0; i<sentence.length; i++){
    if(sentence[i]==="A" || sentence[i]==="a" || sentence[i]==="E" || sentence[i]==="e"
     || sentence[i]==="I" || sentence[i]==="i" || sentence[i]==="O" || sentence[i]==="o"
     || sentence[i]==="U" || sentence[i]==="u" ){
        continue
    }
    else{
      remove +=sentence[i]
    }
}
         return remove;
}
let show = vowel(string);
 document.write(`before :  ${string} <br/>`)
  document.write(`after :  ${show} <br/>`)

// //   question no.7

let  str = 'Please read this application and give me gratuity';
let occurence = [];
let count = 0;
function findOccurence() {
    let chars = str.toLowerCase().split('');
    for (let i = 0; i < chars.length; i++) {
        let char = chars[i];
        let next = chars[i + 1];
        if (isCorrectCharc(char) && isCorrectCharc(next)) {
            count++;
            let twoChar = char + next;
            occurence.push(twoChar)
        }
    } return count
}
function isCorrectCharc(char) {
    switch (char) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true;
        default:
            return false
    }

}
let counts = findOccurence();
document.write(`String : ${str }<br>`);
document.write(`Count : ${counts } <br>`);
document.write(`Occurence : ${occurence}  <br>`);

// question no. 8

let distance = Number(prompt(`Enter diatances city A to city B in km`));
meter(distance)
feet(distance)
inches(distance)
centimeter(distance)

function meter(dis){
    let meterdis = dis * 1000;
    document.write(`Meter distances between city A to city B ${meterdis} meters . <br/> `)
}
function feet(dis){
    let feetdis = dis * 3281;
    document.write(`Feet distances between city A to city B ${feetdis} feed . <br/> `)
}
function inches(dis){
    let inchesdis = dis * 39370;
    document.write(`Inches distances between city A to city B ${inchesdis} inches . <br/> `)
}
function centimeter(dis){
    let centimeterdis = dis * 100000;
    document.write(`Centimeter distances between city A to city B ${centimeterdis} centimeter . <br/> `)
}

// question no.9

let workingHour = Number(prompt(`Enter your working hours`))
let overTime , overTimePay;
let overTimePayHours = 12;

if(workingHour > 40){
    overTime = workingHour - 40;
    overTimePay = overTime * overTimePayHours;
    document.write(`your overtime cost pay ${overTimePay} rupees <br/>`)
}
else{
    document.write(`you need to work more to get overtime <br/> `)
}

// question no.10

let  amount = Number(prompt(`enter amount to withdraw`));
let hundred = parseInt(amount / 100);
let fifty = parseInt((amount % 100)/50);
let ten = parseInt(((amount % 100)% 50)/10);

document.write(`enter amount ${amount} <br/>`)
document.write(`you will have ${hundred} hundred note ${fifty} fifty note ${ten} ten note <br/>`)