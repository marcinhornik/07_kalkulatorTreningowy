let dataTable = [0];
let numberTable = [0];
let func = [0];
let NumberToCount= [0];




function pressNumber(number){

if (document.getElementById("viewToDoAction1").value === "")

{
dataTable[number] = number;
document.getElementById("viewToDoAction").value += dataTable[number] ;
document.getElementById("textBox1").value += dataTable[number] ;

numberTable[1] = Number(document.getElementById("viewToDoAction").value);
}

else {
dataTable[number] = number;
document.getElementById("viewToDoAction2").value += dataTable[number] ;

numberTable[2] = Number(document.getElementById("viewToDoAction2").value);
}


console.log(numberTable);
}

function action(action){


NumberToCount[NumberToCount.length]= numberTable[1];

let actionNo = [0,"+","-","*","/"];

numberTable[2] = actionNo[action];


document.getElementById("viewToDoAction1").value += actionNo[action]

}


function equal(){

if (document.getElementById("viewToDoAction1").value === "+") {document.getElementById("viewResult").value = numberTable[1]+numberTable[2];}


else if (document.getElementById("viewToDoAction1").value === "-") {document.getElementById("viewResult").value = numberTable[1]-numberTable[2];}
else if (document.getElementById("viewToDoAction1").value === "*") {document.getElementById("viewResult").value = numberTable[1]*numberTable[2];}
else if (document.getElementById("viewToDoAction1").value === "/") {document.getElementById("viewResult").value = numberTable[1]/numberTable[2];}
console.log(numberTable);
}

function clearr(){

location.reload();  //przeładowuje strone i resetuje dane w zmiennych
console.log("clear");
}

let zwieksz = 0;

function setWeight(){
// funkcja zmieniajaca style pola tekstowego uwzgledniajac wprowadzone dane

  for (let x = 0; x < 6; x++) {   //licznik zwiekszajacy wartośc zmiennej zwieksz o 8 // za kazdum wejsciem w funkcje dodaje 8 do zmiennej
    ++zwieksz;
  }

//warunek sprawdzajacy czy byl wprowadzony znak +-/*  jesli nie to wpisuje dane w pierwsze pole textowe viewToDoAction
  if (document.getElementById("viewToDoAction1").value === ""){

document.getElementById("viewToDoAction").style.width = 10+zwieksz+'px'; // przy kazdym wejscu w funkcje szerokosc pola viewToDoAction zwieksza sie o 10+zwiekszpixeli
document.getElementById("viewToDoAction1").style.left = 20+zwieksz+'px';  // przy kazdym wejscu w funkcje pozycja  pola viewToDoAction1 zwieksza sie o 30+zwiekszpixeli
document.getElementById("viewToDoAction2").style.left = 30+zwieksz+'px'; // przy kazdym wejscu w funkcje pozycja  pola viewToDoAction2 zwieksza sie o 70+zwiekszpixeli
// dodac jeszcz ekilka pol do wpisywania danych
  }


// warunej jesli wprowadzono znak +-/* to wprowadzane dane zapisuja sie w polu textowym viewToDoAction2
if (document.getElementById("viewToDoAction1").value > ""){
  document.getElementById("viewToDoAction2").style.width = document.getElementById("viewToDoAction2").scrollWidth+4+'px';
}
}
