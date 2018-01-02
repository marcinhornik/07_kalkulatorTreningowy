let dataTable = [0];
let numberTable = [0];
let func = [0];

function pressNumber(number){



dataTable[number] = number;
document.getElementById("viewToDoAction").innerHTML += dataTable[number] ;

numberTable[1] = document.getElementById("viewToDoAction").value;
console.log(numberTable[1]);


}

function plus(){
func[1] = document.getElementById("buttonPlus").value;
document.getElementById("viewToDoAction").innerHTML += func[1] ;
}

function equal(){
console.log(dataTable);

document.getElementById("viewResult").innerHTML = numberTable[1]+dataTable[2];

}
