var celdas = "";
var myInput;
var transito = "";

function Run(){
	StartOver();
	//document.getElementById("divMostrar").innerHTML = document.getElementById("numeroDigitado").value;
	myInput = document.getElementById("numeroDigitado").value;
	transito = myInput;
	comprobar(transito);
};

function comprobar(transito) {
  if (transito == 1) {
    Finalizar();
  } else {
    AplicarFormula(transito);
  }
}

function AplicarFormula(transito) {
  if (myInput % transito == 0) {
    celdas = celdas + "<br>"+ transito;
    transito--;
    comprobar(transito);
  } else {
    transito--;
    comprobar(transito);
  }
}

function Finalizar() {
	celdas = celdas + "<br>1";
	document.getElementById("divMostrar").innerHTML = celdas;
}

function StartOver() {
	celdas = "";
	document.getElementById("divMostrar").innerHTML = "";
}
//--------------------------------------------------------------------
const HTMLdeHeader = () => {
	return `Encontrar el Divisor`;
};
const HTMLdeMain = () => {
	return `
	<input type="number" id="numeroDigitado" autofocus>
	<button onClick="Run();">Encontrar</button>
	<div id="divMostrar" class="divMostrar"></div>
`;
};
const HTMLdeFooter = () => {
	return `Written By Deaf-Web-Admin`;
};
//--------------------------------------------------------------------
const Header = () => {
	document.querySelector("Header").innerHTML = HTMLdeHeader();
};
const Main = () => {
	document.querySelector("main").innerHTML = HTMLdeMain();
};
const Footer = () => {
	document.querySelector("Footer").innerHTML = HTMLdeFooter();
};
//--------------------------------------------------------------------
Header();
Main();
Footer();