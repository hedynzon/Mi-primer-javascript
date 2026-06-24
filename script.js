/*let nombre="Edinson Raymundo"

console.log(nombre)
console.log(typeof nombre)

const curso="Code 101"

console.log(curso)

nombre = "Edison Raymundo"

console.log(nombre)

console.log(2 + 2);

console.log('2' + '2');

let nombre = "Ada"
let edad = 28
let programadora = true

console.log(nombre, typeof nombre)
console.log(edad, typeof edad)
console.log(programadora, typeof programadora)
let numero = prompt("Ingrese un número")
console.log(numero)
console.log(typeof numero)
console.log(Number(numero) + 10)

let msg1 = "Hola, soy " + nombre + " y tengo " + edad + " años y soy programadora"
console.log(msg1);

let msg2 = `Hola, soy ${nombre} y tengo ${edad} años y soy programadora`
console.log(msg2);*/
/*let numero = Math.floor(Math.random()*100)+1;

console.log(numero);

alert("Hola, en número es: " + numero);*/


/*const secreto = 37;

let intento1 = Number(prompt("Intento 1: Cuál es el número secreto?"))

if(intento1 === secreto){
    console.log("¡Genial Bro, el número es Correcto!.")
    alert("¡Genial Bro, el número es Correcto!.")
} else if(intento1 > secreto){   
        console.log("El número es muy alto ")
        alert("El número es muy alto ")
} else {
    console.log("El número es muy bajo ")
    alert("El número es muy bajo ")
}

let intento2 = Number(prompt("Intento 2: Cuál es el número secreto?"))

if(intento2 === secreto){
    console.log("¡Genial Bro, el número es Correcto!.")
    alert("¡Genial Bro, el número es Correcto!.")
} else if(intento2 > secreto){   
        console.log("El número es muy alto ")
        alert("El número es muy alto ")
} else {
    console.log("El número es muy bajo ")
    alert("El número es muy bajo ")
}*/

/*const secreto = 60;

let entrada = prompt("Adivina el número secreto (entre 1 y 100):");

let numero = Number(entrada);

console.log("Entrada original:", entrada);
console.log("Convertida:", numero);
console.log("¿Es NaN?", isNaN(numero));

if (isNaN(numero)) {
    alert("Eso no es un número, Recarga para volver a intentarlo.");
} else if (numero < 1 || numero > 100) {
    alert("Ese número está fuera de rango, recuerda que debe estar entre 1 y 100, Recarga por favor.");
}
else if (numero === secreto) {
    alert("¡Felicidades, el número es Correcto!.");
} else {
    alert("El número es muy bajo!!!");
}*/

/*let edad = 17;

let acceso;

if (edad >= 18) {
    acceso = "Permitido";
} else {
    acceso = "Denegado";
}

let acceso2 = (edad >= 18) ? "Permitido" : "Denegado";

console.log("Acceso:", acceso);

console.log("Acceso 2:", acceso2);*/

/*let edad = prompt("¿Cuántos años tienes?");
let temperatura = 15;

edad = Number(edad);

if (edad < 13){
    alert("Eres un niño, no puede votar 🧒");
} else if (edad <= 17){
    alert("Eres un adolescente, no puede votar 👦");
} else {
    alert("Eres un adulto que puede votar 👨‍🦱");
}
*/
/*let clave = prompt("Crea una contraseña:");
if (clave.length >= 6) {
  alert("Contraseña válida ✅");
} else {
  alert("Contraseña muy corta ❌");
}

let edad = prompt("¿Cuántos años tienes?");
edad = Number(edad);

if (edad >= 18) {
  alert("Puedes votar 🗳️");
} else {
  alert("Aún no puedes votar 🧒");
}

let temperatura = Number(prompt("¿Qué temperatura hace hoy?"));

if (temperatura < 15) {
  alert("Hace frío, ponte abrigo 🧥");
} else if (temperatura <= 25) {
  alert("Clima templado, usa casaca ligera 🧢");
} else {
  alert("Hace calor, usa polo y gorra ☀️");
}*/

let edad = prompt("¿Cuántos años tienes?");
edad = Number(edad);
let temperatura = Number(prompt("¿Qué temperatura hace hoy?"));

if (edad >18 && temperatura < 15) {
  alert("Adulto con frío: lleva abrigo extra 🧣");
} else if (temperatura <= 25) {
  alert("Clima templado, usa casaca ligera 🧢");
} else {
  alert("Hace calor, usa polo y gorra ☀️");
}

/*if (edad < 13) {
  alert("Eres un niño 🧒");
} else if (edad <= 17) {
  alert("Eres un adolescente 👦");
} else {
  alert("Eres un adulto 👨‍🦱");
}*/