// question no .1

function info(){
   let name = document.getElementById("name").value ;
   let fathername = document.getElementById("fathername").value ;
   let email = document.getElementById("email").value ;
   let number = document.getElementById("number").value ;
   document.write(`Name ${name} <br/>
                   FatherName ${fathername} <br/>
                   Email ${email} <br/>
                   Number ${number}  `)
}

// question no.2

function readmore(){
   let text = " consequatur similique nihil iure ratione officia deleniti reiciendis et facilis? Error, qui.";
   let para = document.getElementById("para");
   para.innerHTML += text
   
}

// question no.3

let table = document.getElementById("recordTable");

function addRecord(){
    let stdName =  document.getElementById("stdName");    
    let stdClass = document.getElementById("stdClass");
    let row = document.createElement("tr");
    let nametd = document.createElement("td");
    let classtd = document.createElement("td");
    let edittd = document.createElement("td");
    let deletetd = document.createElement("td");
    let nameText = document.createTextNode(stdName.value);
    let classText = document.createTextNode(stdClass.value);
    let editBtn = document.createElement("button");
    let editText = document.createTextNode("Edit");
    editBtn.setAttribute("onclick","editRecord(this)")
    editBtn.appendChild(editText)
    let delBtn = document.createElement("button");
    let delText = document.createTextNode("Delete");
    delBtn.setAttribute("onclick","deleteRecord(this)")
    delBtn.appendChild(delText)


    
    nametd.appendChild(nameText)
    classtd.appendChild(classText)
    edittd.appendChild(editBtn)
    deletetd.appendChild(delBtn)
    row.appendChild(nametd)
    row.appendChild(classtd)
    row.appendChild(edittd)
    row.appendChild(deletetd)
    table.appendChild(row)

    stdName.value = ""
    stdClass.value = ""
}

function editRecord(e){
    let value = e.parentNode.parentNode.firstChild.innerHTML
    let newValue = prompt(`enter you record` ,value) ;
    let classval = e.parentNode.parentNode.firstChild.nextSibling.innerHTML
    let newClass = prompt(`etnter your class`,classval);
    e.parentNode.parentNode.firstChild.innerHTML = newValue
     e.parentNode.parentNode.firstChild.nextSibling.innerHTML = newClass
}
function deleteRecord(e){
    e.parentNode.parentNode.remove()
}

