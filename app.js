// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Lista de amigos 
let amigos = [];

//La funcion agregarAmigo permite ingresar el nombre al usuario y agregarlo  a la lista amigos

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value.trim();
    
    if (nombre === ""){
        alert("Por favor, inserte un nombre.");
        return;
    }else{
        amigos.push(nombre); //En el caso de ser valido agrego el nombre a la lista

        document.getElementById("amigo").value = ""; //Limpio el campo de entrada
        mostrarListaAmigos(); //Muestra la lista actualizada
    }

    console.log(amigos); //parea ver que funca 
}

//Recorre y muestra la lista de amigos en el html
function mostrarListaAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar lista antes de agregar nuevos elementos

    for (let i=0; i < amigos.length; i++){
        let elemento = document.createElement("li");
        elemento.innerHTML=amigos[i];
        lista.appendChild(elemento);
    }
    console.log("segunda funcion", amigos); //parea ver que funca 
}


//Realiza el sorteo del nombre al azar
function sortearAmigo(){
    if (amigos.length === 0){
        alert("La lista esta vacia, ingrese los nombres de sus amigos, por favor");
        return;
    }else{
        let indice = Math.floor(Math.random()*amigos.length);
        let nombreGanador = amigos[indice];

        let resultado = document.getElementById("resultado");
        resultado.innerHTML =  `🎉 ¡${nombreGanador} ha sido sorteado! 🎉`;

        amigos.splice(indice, 1); //eliminar el amigo sorteado
        mostrarListaAmigos //Actualizar la lista
    }
}


//Para reiniciar el juego
function reiniciarJuego(){
    amigos = []; // Vaciar el array de amigos
    // Limpiar la lista en el HTML
    document.getElementById("listaAmigos").innerHTML = "";
    // Borrar el resultado del sorteo
    document.getElementById("resultado").innerHTML = "";
    // Limpiar el campo de entrada
    document.getElementById("amigo").value = "";

    console.log("Juego reiniciado");
}


