// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigosRestantes = [];

function agregarAmigo(){ 
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    
    if (amigos.length >= 5){
        alert("No puedes agregar más de 5 amigos.");
        return;
    }
   
    if (nombre === "") {
        alert ("Por favor, ingresa al menos dos nombres.");
        return;
    }

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ'-]+$/.test(nombre)){
        alert ("Por favor, ingresa solo letras sin espacios ni números");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya fue agregado");
        return;
    }
        amigos.push(nombre);
        amigosRestantes = [...amigos];

        input.value = "";
        input.focus();

        actualizarListaAmigos();

}

function actualizarListaAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);

    }
}

function sortearAmigo(){
    

    if (amigos.length <2){
        alert("Ingresa al menos dos amigos, para sortear.");
        return;
    }

    if (amigosRestantes.length === 0){
        alert("Ya se han sorteado todos los amigos.");
        document.getElementById("botonSortear").disabled = true;
        document.getElementById("botonAñadir").disabled = true;
        return;
    }
    


    let indice = Math.floor(Math.random() * amigosRestantes.length);
    let amigoSecreto = amigosRestantes[indice];

    amigosRestantes.splice(indice, 1);

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Tu amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
    
}





