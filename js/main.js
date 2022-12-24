//Botones del HTML
let btnEncriptado = document.querySelector("#encriptar");
let btnDesencriptar = document.querySelector("#desencriptar");
let btnCopiar = document.querySelector("#copiar");
//Textareas
let campoEncriptar = document.getElementById("traductor");
let campoResultado = document.getElementById("resultado");
//Contents HTML
let mensajeResultado = document.querySelector(".card__resultado");
let cardResultado = document.querySelector(".card__area__resultado");
//Variables Globales
let nuevaCadena = []; // Arreglo para encriptar
let nuevaTraduccon = ""; //Variable para poner el resultado de lo encriptado o desencriptado
//Función para limpiar el textarea del resultado
//Función encriptar
function encriptar() {
  let cadenaTexto = campoEncriptar.value;
  let separaLetras = [...cadenaTexto];
  //Recorre el arreglo letra por letra y cuando encuentra la vocal, hace push a un nuevo arreglo
  for (let i = 0; i < separaLetras.length; i++) {
    if (separaLetras[i] == "a") {
      nuevaCadena.push("ai"); // Realiaza un push al nuevo arreglo
    } else if (separaLetras[i] == "e") {
      nuevaCadena.push("enter");
    } else if (separaLetras[i] == "i") {
      nuevaCadena.push("imes");
    } else if (separaLetras[i] == "o") {
      nuevaCadena.push("ober");
    } else if (separaLetras[i] == "u") {
      nuevaCadena.push("ufat");
    } else {
      nuevaCadena.push(separaLetras[i]);
    }
  }

  // Recorre el nuevo arreglo generado y lo guarda en una variable String
  for (let a = 0; a < nuevaCadena.length; a++) {
    nuevaTraduccon += nuevaCadena[a];
  }
  mensajeResultado.style.display = "none"; // Elimina el contenedor del mensaje y la imagen
  cardResultado.style.display = "flex"; // Muestra en pantalla el contenedor con el mensaje
  cardResultado.style.position = "relative"; // Muestra en pantalla el contenedor con el mensaje
  campoResultado.innerText = nuevaTraduccon; // Guarda la nueva cadena de caracteres
  nuevaCadena = [];
  nuevaTraduccon = "";
}

function desencriptar() {
  let cadenaTexto = campoEncriptar.value;
  let cadenaDesencriptar = [...cadenaTexto];
  console.log(cadenaDesencriptar);
  let nuevaCadena = "";
  for (let i = 0; i < cadenaDesencriptar.length; i++) {
    let coincidencia = "";
    if (cadenaDesencriptar[i] == "a") {
      nuevaCadena += cadenaDesencriptar[i];
      i += 1;
    } else if (cadenaDesencriptar[i] == "e") {
      nuevaCadena += cadenaDesencriptar[i];
      i += 4;
    } else if (cadenaDesencriptar[i] == "i") {
      nuevaCadena += cadenaDesencriptar[i];
      i += 3;
    } else if (cadenaDesencriptar[i] == "o") {
      nuevaCadena += cadenaDesencriptar[i];
      i += 3;
    } else if (cadenaDesencriptar[i] == "u") {
      nuevaCadena += cadenaDesencriptar[i];
      i += 3;
    } else {
      nuevaCadena += cadenaDesencriptar[i];
    }
    mensajeResultado.style.display = "none"; // Elimina el contenedor del mensaje y la imagen
    cardResultado.style.display = "flex"; // Muestra en pantalla el contenedor con el mensaje
    cardResultado.style.position = "relative"; // Muestra en pantalla el contenedor con el mensaje
    campoResultado.innerText = nuevaCadena; // Guarda la nueva cadena de caracteres
  }
}
//Función copia lo que se haya puesto en el campo del resultado
function copiar() {
  let cadenaCopiar = campoResultado;
  cadenaCopiar.select();
  document.execCommand("copy");
  alert("Texto copiado");
}

btnEncriptado.onclick = encriptar; //llamada  a la función que encripta
btnDesencriptar.onclick = desencriptar; //llamada a la función que desencripta
btnCopiar.onclick = copiar; // llamada a la función para copiar
