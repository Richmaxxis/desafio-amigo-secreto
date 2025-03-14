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
    // Obtiene el elemento de la lista donde se mostrarán los nombres
    let lista = document.getElementById("listaAmigos");
    
    // Limpia el contenido actual de la lista
    lista.innerHTML = "";

    // Recorre el array listaNombresAgregados
    for (let i = 0; i < listaNombresAgregados.length; i++) {
        // Crea un nuevo elemento <li> para cada nombre
        let nuevoNombre = document.createElement("li");
        
        // Asigna el texto del nuevo elemento <li>, añadiendo un punto antes del nombre
        nuevoNombre.textContent = "• " + listaNombresAgregados[i];
        
        // Agrega el nuevo elemento <li> a la lista en el HTML
        lista.appendChild(nuevoNombre);
    }
}

function sortearAmigo() {
    
    // Verificar si la lista está vacía
    if (listaNombresAgregados.length === 0) {
        console.log("No hay más amigos para sortear.");
        return; // Salir de la función si no hay más nombres
    }

    // Sortea un nombre del array listaNombresAgregados
    let nombreAlAzar = Math.floor(Math.random() * listaNombresAgregados.length);
    let nombreElegido = listaNombresAgregados[nombreAlAzar];
    
    // Limpiar el resultado anterior
    let resultadoDeSorteo = document.getElementById("resultado");
    resultadoDeSorteo.innerHTML = ""; // Limpia el contenido anterior

    // Crear el elemento <li> y agregarlo a la lista
    let nombreSeleccionado = document.createElement("li");
    nombreSeleccionado.textContent = nombreElegido;
    resultadoDeSorteo.appendChild(nombreSeleccionado);

    // Eliminar el nombre elegido del array
    listaNombresAgregados.splice(nombreAlAzar, 1);

}


function condicionesIniciales() {
        LimpiarCaja(); // Limpia la caja de entrada
        listaNombresAgregados = []; // Reinicia la lista de nombres
    
        // Limpia el contenido de la lista de amigos en el HTML
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = ""; // Limpia la lista de amigos
    
        // Limpia el resultado del sorteo
        let resultadoDeSorteo = document.getElementById("resultado");
        resultadoDeSorteo.innerHTML = ""; // Limpia el resultado del sorteo

        if (listaNombresAgregados== 0 ) {
            alert ("El siguente es el ultimo Nombre sorteado, reinicie el sorteo")
        }
    
}

function reiniciarJuego() {
condicionesIniciales()
}