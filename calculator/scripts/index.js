const number1 = Number(prompt("Ingrese numero 1"))
const number2 = Number(prompt("Ingrese numero 2"))

const suma = number1 + number2;

const mensajeResultado = "El resultado de la suma es " + suma;

alert(mensajeResultado);

///Obteniendo promedios
const promedio = suma / 2;
const triple = promedio * 3;
const resultadoMenos10 = triple - 10;

const mensajeFinal = "El promedio de los numeros ingresados es: " + promedio + ". El triple del promdio es: " + triple + ". El triple menos 10 es: " + resultadoMenos10;
alert(mensajeFinal)

//Siguiente clase
let cantidadNumeros = Number(prompt("¿Cuantos numeros desea sumar?"));

let sumatoria = 0;

for (let i = 1; i <= cantidadNumeros; i++) {
  let numetoIngresado = Number(prompt("Ingrese un numero a sumar"))
  sumatoria = sumatoria + numetoIngresado;
}

console.log("El resultado de la sumatoria es: " + sumatoria);
