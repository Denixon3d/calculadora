//1) VARIABLES IMPORTANTES PARA LA FUNCION DE LA CALCULADORA
let valor1;
let valor2;
let signo;
let resultado;

//2) lAS CONSTANTES QUE CONTIENEN LAS CLASES DE LOS BOTONES Y EL INPUT

//INICIO DE CONSTANTE DE BOTONES BORRAR, LIMPIAR Y IGUAL
const borrar = document.querySelector(".borrar");
const reset = document.querySelector(".reset");
const igual = document.querySelector(".igual");
//FIN DE CONSTANTE DE BOTONES BORRAR, LIMPIAR Y IGUAL

//INICIO DE CONSTANTES DE LAS OPERACIONES
const dividir = document.querySelector(".dividir");
const multi = document.querySelector(".multi");
const suma = document.querySelector(".suma");
const resta = document.querySelector(".resta");
//FIN DE CONSTANTES DE LAS OPERACIONES

//INICIO DE CONSTANTES DEL INPURT Y LOS NUMEROS
const visor = document.querySelector(".visor");
const nueve = document.querySelector(".nueve");
const ocho = document.querySelector(".ocho");
const siete = document.querySelector(".siete");
const seis = document.querySelector(".seis");
const cinco = document.querySelector(".cinco");
const cuatro = document.querySelector(".cuatro");
const tres = document.querySelector(".tres");
const dos = document.querySelector(".dos");
const uno = document.querySelector(".uno");
const cero = document.querySelector(".cero");
const punto = document.querySelector(".punto");
//FIN DE CONSTANTES DEL INPURT Y LOS NUMEROS

//3) EVENTOS  DE LOS BOTONES DE NUMEROS Y PUNTO
nueve.addEventListener("click", (e) => {
  e.preventDefault();
  visor.value += 9;
});

ocho.addEventListener("click", (e) => {
  e.preventDefault();
  visor.value += 8;
});

siete.addEventListener("click", (e) => {
  e.preventDefault();
  visor.value += 7;
});

seis.addEventListener("click", (e) => {
  e.preventDefault();
  visor.value += 6;
});

cinco.addEventListener("click", (e) => {
  e.preventDefault();
  visor.value += 5;
});

cuatro.addEventListener("click", (e) => {
  e.preventDefault();
  visor.value += 4;
});

tres.addEventListener("click", (e) => {
  e.preventDefault();
  visor.value += 3;
});

dos.addEventListener("click", (e) => {
  e.preventDefault();
  visor.value += 2;
});

uno.addEventListener("click", (e) => {
  e.preventDefault();
  visor.value += 1;
});

cero.addEventListener("click", (e) => {
  e.preventDefault();
  visor.value += 0;
});

punto.addEventListener("click", (e) => {
  e.preventDefault();
  visor.value += ".";
});

//4) EVENTOS DE LOS BOTONES DE SUMA, RESTA, MULTIPLICACION Y DIVISION

suma.addEventListener("click", (e) => {
  e.preventDefault();
  valor1 = visor.value;
  limpiar();
  signo = "+";
});

resta.addEventListener("click", (e) => {
  e.preventDefault();
  valor1 = visor.value;
  limpiar();
  signo = "-";
});

dividir.addEventListener("click", (e) => {
  e.preventDefault();
  valor1 = visor.value;
  limpiar();
  signo = "/";
});

multi.addEventListener("click", (e) => {
  e.preventDefault();
  valor1 = visor.value;
  limpiar();
  signo = "*";
});

//5) EVENTOS DE BORRAR Y RESET Y FUNCION DE LIMPIAR

borrar.addEventListener("click", (e) => {
  e.preventDefault();
  visor.value -= 1;
});

reset.addEventListener("click", (e) => {
  e.preventDefault();
  visor.value = "";
  signo = "";
  console.log(signo + visor.value);
});

function limpiar() {
  visor.value = "";
}

igual.addEventListener("click", (e) => {
  e.preventDefault();
  valor2 = visor.value;
  limpiar();
  switch (signo) {
    case "+":
      resultado = parseFloat(valor1) + parseFloat(valor2);
      visor.value = resultado;
      break;
    case "-":
      resultado = parseFloat(valor1) - parseFloat(valor2);
      visor.value = resultado;
      break;
    case "/":
      resultado = parseFloat(valor1) / parseFloat(valor2);
      visor.value = resultado;
      break;
    case "*":
      resultado = parseFloat(valor1) * parseFloat(valor2);
      visor.value = resultado;
    default:
  }
});
