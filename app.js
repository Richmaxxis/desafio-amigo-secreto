// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//crea uma lista vacia
let listaNombresAgregados = [];
console.log(listaNombresAgregados);
sortearAmigo ();

function LimpiarCaja() {
    document.getElementById("amigo").value = ``;
}

function agregarAmigo() {
    let nombre =  document.getElementById("amigo").value

    if (nombre) {
        listaNombresAgregados.push(nombre);
        LimpiarCaja();
        ver()
        return console.log(nombre)
    } else {
        alert("ingresa un nombre por favor")
    } 
  
}
function ver() {
    let lista = document.getElementById("listaAmigos");
   lista.innerHTML = ""

   for (let i = 0; i < listaNombresAgregados.length; i++) {
    let nuevoNombre = document.createElement("li");
    nuevoNombre.textContent = "• " + listaNombresAgregados[i]
    lista.appendChild(nuevoNombre)
   }

}


function sortearAmigo() {
  
//sortea un nombre del array  listaNombresAgregados
    let nombreAlAzar = Math.floor(Math.random() * listaNombresAgregados.length);
    let nombreElegido = listaNombresAgregados[nombreAlAzar];
  console.log (nombreElegido)
  
    // Crear el elemento <li> y agregarlo a la lista
    let resultadoDeSorteo = document.getElementById("resultado");
    let nombreSeleccionado = document.createElement("li");
    nombreSeleccionado.textContent = nombreElegido;
    resultadoDeSorteo.appendChild(nombreSeleccionado);
}

