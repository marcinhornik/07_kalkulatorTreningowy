let dataTable = [0];
let numberTable = [0];
let func = [0];
let NumberToCount= [0];

let viewToDoActionPossition;
let viewToDoAction1Possition;
let viewToDoAction2Possition;
let viewToDoAction3Possition;
let viewToDoAction4Possition;
let viewToDoAction5Possition;
let viewToDoAction6Possition;
let viewToDoAction7Possition;
let viewToDoAction8Possition;
let viewToDoAction9Possition;
let viewToDoAction10Possition;


let viewToDoActionWidth;
let viewToDoAction1Width;
let viewToDoAction2Width;
let viewToDoAction3Width;
let viewToDoAction4Width;
let viewToDoAction5Width;
let viewToDoAction6Width;
let viewToDoAction7Width;
let viewToDoAction8Width;
let viewToDoAction9Width;
let viewToDoAction10Width;


function positionAndWidth(){



  viewToDoActionPossition = document.getElementById('viewToDoAction').offsetLeft;
   viewToDoAction1Possition = document.getElementById('viewToDoAction1').offsetLeft;
   viewToDoAction2Possition = document.getElementById('viewToDoAction2').offsetLeft;  // zwraca pozycje od lewej w postaci liczbowej
   viewToDoAction3Possition = document.getElementById('viewToDoAction3').offsetLeft;
   viewToDoAction4Possition = document.getElementById('viewToDoAction4').offsetLeft;
   viewToDoAction5Possition = document.getElementById('viewToDoAction5').offsetLeft;
   viewToDoAction6Possition = Array.from(document.getElementById('viewToDoAction6').style.left);
   viewToDoAction7Possition = Array.from(document.getElementById('viewToDoAction7').style.left);
   viewToDoAction8Possition = Array.from(document.getElementById('viewToDoAction8').style.left);
   viewToDoAction9Possition = Array.from(document.getElementById('viewToDoAction9').style.left);
   viewToDoAction10Possition = Array.from(document.getElementById('viewToDoAction10').style.left);

  //wyznaczanie szerokości pola viewAcvtion
   viewToDoActionWidth = document.getElementById('viewToDoAction').offsetWidth;
   viewToDoAction1Width = document.getElementById('viewToDoAction1').offsetWidth;
   viewToDoAction2Width = document.getElementById('viewToDoAction2').offsetWidth;  // zwraca szerokosc elementu w postaci liczbowej
   viewToDoAction3Width = Array.from(document.getElementById('viewToDoAction3').style.width);
   viewToDoAction4Width = Array.from(document.getElementById('viewToDoAction4').style.width);
   viewToDoAction5Width = Array.from(document.getElementById('viewToDoAction5').style.width);
   viewToDoAction6Width = Array.from(document.getElementById('viewToDoAction6').style.width);
   viewToDoAction7Width = Array.from(document.getElementById('viewToDoAction7').style.width);
   viewToDoAction8Width = Array.from(document.getElementById('viewToDoAction8').style.width);
   viewToDoAction9Width = Array.from(document.getElementById('viewToDoAction9').style.width);
   viewToDoAction10Width = Array.from(document.getElementById('viewToDoAction10').style.width);

console.log(viewToDoActionPossition);
}



function pressNumber(number){

if (document.getElementById("viewToDoAction1").value === "")

{
  if (number == 10) {number=".";} //warunek który podstawia przecinek do liczby zmiennoprzecinkowej
dataTable[number] = number;
document.getElementById("viewToDoAction").value += dataTable[number] ;


numberTable[1] = Number(document.getElementById("viewToDoAction").value);
}


else {

    if (number == 10) {number=".";} //warunek który podstawia przecinek do liczby zmiennoprzecinkowej
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

if (document.getElementById("viewToDoAction").value >""){
document.getElementById("viewToDoAction1").value = actionNo[action];
}

if (document.getElementById("viewToDoAction2").value >""){
document.getElementById("viewToDoAction3").value = actionNo[action];
}
if (document.getElementById("viewToDoAction4").value >""){
document.getElementById("viewToDoAction5").value = actionNo[action];
}
if (document.getElementById("viewToDoAction6").value >""){
document.getElementById("viewToDoAction7").value = actionNo[action];
}
if (document.getElementById("viewToDoAction8").value >""){
document.getElementById("viewToDoAction9").value = actionNo[action];
}

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
let zwieksz1 = 0;
let zwieksz2 = 0;
let zwieksz3 = 0;
let zwieksz4 = 0;
let zwieksz5 = 0;
let zwieksz6 = 0;
let zwieksz7 = 0;
function setWeight(){


  // wyznaczanie pozycji każdego pola viewaction

// viewToDoActionPossition = Array.from(document.getElementById('viewToDoAction').style.left);
//  viewToDoAction1Possition = Array.from(document.getElementById('viewToDoAction1').style.left);
//  viewToDoAction2Possition = Array.from(document.getElementById('viewToDoAction2').style.left);  //Array.form("string") rozbija kazda lietre wyrazu do osobnej tabeli
//  viewToDoAction3Possition = Array.from(document.getElementById('viewToDoAction3').style.left);
//  viewToDoAction4Possition = Array.from(document.getElementById('viewToDoAction4').style.left);
//  viewToDoAction5Possition = Array.from(document.getElementById('viewToDoAction5').style.left);
//  viewToDoAction6Possition = Array.from(document.getElementById('viewToDoAction6').style.left);
//  viewToDoAction7Possition = Array.from(document.getElementById('viewToDoAction7').style.left);
//  viewToDoAction8Possition = Array.from(document.getElementById('viewToDoAction8').style.left);
//  viewToDoAction9Possition = Array.from(document.getElementById('viewToDoAction9').style.left);
//  viewToDoAction10Possition = Array.from(document.getElementById('viewToDoAction10').style.left);
//
// //wyznaczanie szerokości pola viewAcvtion
//  viewToDoActionWidth = Array.from(document.getElementById('viewToDoAction').style.width);
//  viewToDoAction1Width = Array.from(document.getElementById('viewToDoAction1').style.width);
//  viewToDoAction2Width = Array.from(document.getElementById('viewToDoAction2').style.width);  //Array.form("string") rozbija kazda lietre wyrazu do osobnej tabeli
//  viewToDoAction3Width = Array.from(document.getElementById('viewToDoAction3').style.width);
//  viewToDoAction4Width = Array.from(document.getElementById('viewToDoAction4').style.width);
//  viewToDoAction5Width = Array.from(document.getElementById('viewToDoAction5').style.width);
//  viewToDoAction6Width = Array.from(document.getElementById('viewToDoAction6').style.width);
//  viewToDoAction7Width = Array.from(document.getElementById('viewToDoAction7').style.width);
//  viewToDoAction8Width = Array.from(document.getElementById('viewToDoAction8').style.width);
//  viewToDoAction9Width = Array.from(document.getElementById('viewToDoAction9').style.width);
//  viewToDoAction10Width = Array.from(document.getElementById('viewToDoAction10').style.width);

  // for (let x = 0; x < 2; x++)  // pętla wykonana dwa razy
  // {
  // viewToDoActionPossition.pop();
  // viewToDoAction1Possition.pop();
  // viewToDoAction2Possition.pop();  //usuwa ostatnia pozycje tablicy
  // viewToDoAction3Possition.pop();
  // viewToDoAction4Possition.pop();
  // viewToDoAction5Possition.pop();
  // viewToDoAction6Possition.pop();
  // viewToDoAction7Possition.pop();
  // viewToDoAction8Possition.pop();
  // viewToDoAction9Possition.pop();
  // viewToDoAction10Possition.pop();
  //
  //
  // viewToDoActionWidth.pop();
  // viewToDoAction1Width.pop();
  // viewToDoAction2Width.pop();  //usuwa ostatnia pozycje tablicy
  // viewToDoAction3Width.pop();
  // viewToDoAction4Width.pop();
  // viewToDoAction5Width.pop();
  // viewToDoAction6Width.pop();
  // viewToDoAction7Width.pop();
  // viewToDoAction8Width.pop();
  // viewToDoAction9Width.pop();
  // viewToDoAction10Width.pop()
  //
  //
  // }
// let viewToDoActionPossitionToNumber =  Number(viewToDoActionPossition.join(""));
// let viewToDoAction1PossitionToNumber =  Number(viewToDoAction1Possition.join(""));
// let viewToDoAction2PossitionToNumber =  Number(viewToDoAction2Possition.join("")); // łaczy zawartośc tablicy w ciąg znaków oddzielonych "" // zamienie string na number
// let viewToDoAction3PossitionToNumber =  Number(viewToDoAction3Possition.join(""));
// let viewToDoAction4PossitionToNumber =  Number(viewToDoAction4Possition.join(""));
// let viewToDoAction5PossitionToNumber =  Number(viewToDoAction5Possition.join(""));
// let viewToDoAction6PossitionToNumber =  Number(viewToDoAction6Possition.join(""));
// let viewToDoAction7PossitionToNumber =  Number(viewToDoAction7Possition.join(""));
// let viewToDoAction8PossitionToNumber =  Number(viewToDoAction8Possition.join(""));
// let viewToDoAction9PossitionToNumber =  Number(viewToDoAction9Possition.join(""));
// let viewToDoAction10PossitionToNumber =  Number(viewToDoAction10Possition.join(""));
//
// let viewToDoActionWidthToNumber =  Number(viewToDoActionWidth.join(""));
// let viewToDoAction1WidthToNumber =  Number(viewToDoAction1Width.join(""));
// let viewToDoAction2WidthToNumber =  Number(viewToDoAction2Width.join("")); // łaczy zawartośc tablicy w ciąg znaków oddzielonych "" // zamienie string na number
// let viewToDoAction3WidthToNumber =  Number(viewToDoAction3Width.join(""));
// let viewToDoAction4WidthToNumber =  Number(viewToDoAction4Width.join(""));
// let viewToDoAction5WidthToNumber =  Number(viewToDoAction5Width.join(""));
// let viewToDoAction6WidthToNumber =  Number(viewToDoAction6Width.join(""));
// let viewToDoAction7WidthToNumber =  Number(viewToDoAction7Width.join(""));
// let viewToDoAction8WidthToNumber =  Number(viewToDoAction8Width.join(""));
// let viewToDoAction9WidthToNumber =  Number(viewToDoAction9Width.join(""));
// let viewToDoAction10WidthToNumber =  Number(viewToDoAction10Width.join(""));
//





//warunek sprawdzajacy czy byl wprowadzony znak +-/*  jesli nie to wpisuje dane w pierwsze pole textowe viewToDoAction
  if (document.getElementById("viewToDoAction1").value === ""){

    // funkcja zmieniajaca style pola tekstowego uwzgledniajac wprowadzone dane

      for (let x = 0; x < 7; x++) {   //licznik zwiekszajacy wartośc zmiennej zwieksz o 8 // za kazdum wejsciem w funkcje dodaje 8 do zmiennej
        ++zwieksz;
      }


document.getElementById("viewToDoAction").style.width = zwieksz+'px'; // przy kazdym wejscu w funkcje szerokosc pola viewToDoAction zwieksza sie o 10+zwiekszpixeli
viewToDoActionWidth =document.getElementById('viewToDoAction').offsetWidth;
document.getElementById("viewToDoAction1").style.left = viewToDoActionPossition+viewToDoActionWidth+'px';  // przy kazdym wejscu w funkcje pozycja  pola viewToDoAction1 zwieksza sie o 30+zwiekszpixeli
viewToDoAction1Width =document.getElementById('viewToDoAction1').offsetWidth;
viewToDoAction1Possition =document.getElementById('viewToDoAction1').offsetLeft;
document.getElementById("viewToDoAction2").style.left = viewToDoAction1Possition+viewToDoAction1Width+'px'; // przy kazdym wejscu w funkcje pozycja  pola viewToDoAction2 zwieksza sie o 70+zwiekszpixeli
viewToDoAction2Width =document.getElementById('viewToDoAction2').offsetWidth;
viewToDoAction2Possition =document.getElementById('viewToDoAction2').offsetLeft;
document.getElementById("viewToDoAction3").style.left = viewToDoAction2Possition+viewToDoAction2Width+'px';
viewToDoAction3Width =document.getElementById('viewToDoAction3').offsetWidth;
viewToDoAction3Possition =document.getElementById('viewToDoAction3').offsetLeft;
document.getElementById("viewToDoAction4").style.left = viewToDoAction3Possition+viewToDoAction3Width+'px';
viewToDoAction4Width =document.getElementById('viewToDoAction4').offsetWidth;
viewToDoAction4Possition =document.getElementById('viewToDoAction4').offsetLeft;
document.getElementById("viewToDoAction5").style.left = viewToDoAction4Possition+viewToDoAction4Width+'px';
viewToDoAction5Width =document.getElementById('viewToDoAction5').offsetWidth;
viewToDoAction5Possition =document.getElementById('viewToDoAction5').offsetLeft;
document.getElementById("viewToDoAction6").style.left = viewToDoAction5Possition+viewToDoAction5Width+'px';
viewToDoAction6Width =document.getElementById('viewToDoAction6').offsetWidth;
viewToDoAction6Possition =document.getElementById('viewToDoAction6').offsetLeft;
document.getElementById("viewToDoAction7").style.left = viewToDoAction6Possition+viewToDoAction6Width+'px';
viewToDoAction7Width =document.getElementById('viewToDoAction7').offsetWidth;
viewToDoAction7Possition =document.getElementById('viewToDoAction7').offsetLeft;
document.getElementById("viewToDoAction8").style.left = viewToDoAction7Possition+viewToDoAction7Width+'px';
viewToDoAction8Width =document.getElementById('viewToDoAction8').offsetWidth;
viewToDoAction8Possition =document.getElementById('viewToDoAction8').offsetLeft;
document.getElementById("viewToDoAction9").style.left = viewToDoAction8Possition+viewToDoAction8Width+'px';
viewToDoAction9Width =document.getElementById('viewToDoAction9').offsetWidth;
viewToDoAction9Possition =document.getElementById('viewToDoAction9').offsetLeft;
document.getElementById("viewToDoAction10").style.left = viewToDoAction9Possition+viewToDoAction9Width+'px';
// dodac jeszcz ekilka pol do wpisywania danych

  }


// warunej jesli wprowadzono znak +-/* to wprowadzane dane zapisuja sie w polu textowym viewToDoAction2
if (document.getElementById("viewToDoAction1").value > ""){
  // funkcja zmieniajaca style pola tekstowego uwzgledniajac wprowadzone dane

    for (let x = 0; x < 7; x++) {   //licznik zwiekszajacy wartośc zmiennej zwieksz o 8 // za kazdum wejsciem w funkcje dodaje 8 do zmiennej
      ++zwieksz1;
    }

  document.getElementById("viewToDoAction2").style.width = zwieksz1+'px';
  viewToDoAction2Width =document.getElementById('viewToDoAction2').offsetWidth;
  viewToDoAction2Possition =document.getElementById('viewToDoAction2').offsetLeft;

  document.getElementById("viewToDoAction3").style.left = viewToDoAction2Possition+viewToDoAction2Width+'px';
  viewToDoAction3Width =document.getElementById('viewToDoAction3').offsetWidth;
  viewToDoAction3Possition =document.getElementById('viewToDoAction3').offsetLeft;

  document.getElementById("viewToDoAction4").style.left = viewToDoAction3Possition+viewToDoAction3Width+'px';
  viewToDoAction4Width =document.getElementById('viewToDoAction4').offsetWidth;
  viewToDoAction4Possition =document.getElementById('viewToDoAction4').offsetLeft;

  document.getElementById("viewToDoAction5").style.left = viewToDoAction4Possition+viewToDoAction4Width+'px';
  viewToDoAction5Width =document.getElementById('viewToDoAction5').offsetWidth;
  viewToDoAction5Possition =document.getElementById('viewToDoAction5').offsetLeft;
  document.getElementById("viewToDoAction6").style.left = viewToDoAction5Possition+viewToDoAction5Width+'px';
  viewToDoAction6Width =document.getElementById('viewToDoAction6').offsetWidth;
  viewToDoAction6Possition =document.getElementById('viewToDoAction6').offsetLeft;
  document.getElementById("viewToDoAction7").style.left = viewToDoAction6Possition+viewToDoAction6Width+'px';
  viewToDoAction7Width =document.getElementById('viewToDoAction7').offsetWidth;
  viewToDoAction7Possition =document.getElementById('viewToDoAction7').offsetLeft;
  document.getElementById("viewToDoAction8").style.left = viewToDoAction7Possition+viewToDoAction7Width+'px';
  viewToDoAction8Width =document.getElementById('viewToDoAction8').offsetWidth;
  viewToDoAction8Possition =document.getElementById('viewToDoAction8').offsetLeft;
  document.getElementById("viewToDoAction9").style.left = viewToDoAction8Possition+viewToDoAction8Width+'px';
  viewToDoAction9Width =document.getElementById('viewToDoAction9').offsetWidth;
  viewToDoAction9Possition =document.getElementById('viewToDoAction9').offsetLeft;
  document.getElementById("viewToDoAction10").style.left = viewToDoAction9Possition+viewToDoAction9Width+'px';
}

if (document.getElementById("viewToDoAction3").value > ""){
  // funkcja zmieniajaca style pola tekstowego uwzgledniajac wprowadzone dane

    for (let x = 0; x < 7; x++) {   //licznik zwiekszajacy wartośc zmiennej zwieksz o 8 // za kazdum wejsciem w funkcje dodaje 8 do zmiennej
      ++zwieksz2;
    }


  document.getElementById("viewToDoAction4").style.width = zwieksz2+'px';;
  viewToDoAction4Width =document.getElementById('viewToDoAction4').offsetWidth;
  viewToDoAction4Possition =document.getElementById('viewToDoAction4').offsetLeft;

  document.getElementById("viewToDoAction5").style.left = viewToDoAction4Possition+viewToDoAction4Width+'px';
  viewToDoAction5Width =document.getElementById('viewToDoAction5').offsetWidth;
  viewToDoAction5Possition =document.getElementById('viewToDoAction5').offsetLeft;
  document.getElementById("viewToDoAction6").style.left = viewToDoAction5Possition+viewToDoAction5Width+'px';
  viewToDoAction6Width =document.getElementById('viewToDoAction6').offsetWidth;
  viewToDoAction6Possition =document.getElementById('viewToDoAction6').offsetLeft;
  document.getElementById("viewToDoAction7").style.left = viewToDoAction6Possition+viewToDoAction6Width+'px';
  viewToDoAction7Width =document.getElementById('viewToDoAction7').offsetWidth;
  viewToDoAction7Possition =document.getElementById('viewToDoAction7').offsetLeft;
  document.getElementById("viewToDoAction8").style.left = viewToDoAction7Possition+viewToDoAction7Width+'px';
  viewToDoAction8Width =document.getElementById('viewToDoAction8').offsetWidth;
  viewToDoAction8Possition =document.getElementById('viewToDoAction8').offsetLeft;
  document.getElementById("viewToDoAction9").style.left = viewToDoAction8Possition+viewToDoAction8Width+'px';
  viewToDoAction9Width =document.getElementById('viewToDoAction9').offsetWidth;
  viewToDoAction9Possition =document.getElementById('viewToDoAction9').offsetLeft;
  document.getElementById("viewToDoAction10").style.left = viewToDoAction9Possition+viewToDoAction9Width+'px';
}

// if (document.getElementById("viewToDoAction2").value > ""){
//   document.getElementById("viewToDoAction3").style.width = document.getElementById("viewToDoAction3").scrollWidth+4+'px';
// }
//
// if (document.getElementById("viewToDoAction3").value > ""){
//   document.getElementById("viewToDoAction4").style.width = document.getElementById("viewToDoAction4").scrollWidth+4+'px';
// }

}
