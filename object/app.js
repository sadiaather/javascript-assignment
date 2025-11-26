
// question no.1

const itemsArray = [
{name:"juice",
   price:"50",
    quantity:"3"},
{name:"cookie",
   price:"30", 
   quantity:"9"},
{name:"shirt",
    price:"880",
    quantity:"1"},
{name:"pen",
    price:"100",
     quantity:"2"}
];
console.log(itemsArray);


itemsArray.forEach(item =>{
   item.total = item.price*item.quantity
    console.table(`items      price     quntity            total   
${item.name}       ${item.price}         ${item.quantity}                 ${item.total}  `);
    
})
const grantTotal = itemsArray.reduce((sum , item) => sum + item.total,0)
console.log(`total of all item is   ${grantTotal}`);


// question no.2

const student = [
   { firstName : "sadia",
     email : "abc @gmail.com",
     pasward : "1234",
     age : "27",
     gender : "female",
     city : "karachi",
     country : "pakistan"
   } 
]

if ("country" , "age" in student[0]){
    console.log(`country or age ki property mojood h`)
}
else{
    console.log(`mojood ni`)
}
if("firstName" in student[0]){
    console.log(`firstName ki ki porperty mojood h`)
}
else{
    console.log(`mojood ni `);
    
}
if("lasttName" in student[0]){
    console.log(`lastName ki ki property mojood h`)
}
else{
    console.log(`lastname ki ki property mojood ni `);
    
}

// question no.3

function  costumer  (name,city,course){
    this.costName= name;
    this. costCity = city
   this .costCourse = course    
}
const can = new costumer("sadia","karachi","web");
console.log(can);

// question no.4


//   Constructor Function
function Population(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

// Load existing records from localStorage
let records = JSON.parse(localStorage.getItem("populationRecords")) || [];

// Display existing records on page load
window.onload = function() {
    displayRecords();
};

// Handle form submission
document.getElementById("recordForm").onsubmit = function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let address = document.getElementById("address").value;
    let education = document.getElementById("education").value;
    let profession = document.getElementById("profession").value;

    // Create new record object
    let newRecord = new Population(name, gender, address, education, profession);

    // Save to array
    records.push(newRecord);

    // Save to localStorage
    localStorage.setItem("populationRecords", JSON.stringify(records));

    // Update UI
    displayRecords();

    // Reset form
    document.getElementById("recordForm").reset();
};

// Display records in table
function displayRecords() {
    let table = document.getElementById("recordTable");

    // Clear old rows (keep header)
    table.innerHTML = `
        <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Education</th>
            <th>Profession</th>
        </tr>
    `;

    // Add rows
    records.forEach(record => {
        let row = `<tr>
            <td>${record.name}</td>
            <td>${record.gender}</td>
            <td>${record.address}</td>
            <td>${record.education}</td>
            <td>${record.profession}</td>
        </tr>`;
        table.innerHTML += row;
    });
}
