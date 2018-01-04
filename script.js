let dataTable = [0];
let numberTable = [0];
let func = [0];
let NumberToCount= [0];




function pressNumber(number){

if (document.getElementById("viewToDoAction1").value === "")

{
dataTable[number] = number;
document.getElementById("viewToDoAction").innerHTML += dataTable[number] ;
document.getElementById("textBox1").innerHTML += dataTable[number] ;

numberTable[1] = Number(document.getElementById("viewToDoAction").value);
}

else {
dataTable[number] = number;
document.getElementById("viewToDoAction2").innerHTML += dataTable[number] ;

numberTable[2] = Number(document.getElementById("viewToDoAction2").value);
}


console.log(numberTable);
}

function action(action){


NumberToCount[NumberToCount.length]= numberTable[1];

let actionNo = [0,"+","-","*","/"];

numberTable[2] = actionNo[action];


document.getElementById("viewToDoAction1").innerHTML += actionNo[action]

}


function equal(){

if (document.getElementById("viewToDoAction1").value === "+") {document.getElementById("viewResult").innerHTML = numberTable[1]+numberTable[2];}


else if (document.getElementById("viewToDoAction1").value === "-") {document.getElementById("viewResult").innerHTML = numberTable[1]-numberTable[2];}
else if (document.getElementById("viewToDoAction1").value === "*") {document.getElementById("viewResult").innerHTML = numberTable[1]*numberTable[2];}
else if (document.getElementById("viewToDoAction1").value === "/") {document.getElementById("viewResult").innerHTML = numberTable[1]/numberTable[2];}
console.log(numberTable);
}

function clearr(){

location.reload();  //przeładowuje strone i resetuje dane w zmiennych
console.log("clear");
}
