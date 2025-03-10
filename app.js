// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/*
Fucionalidades:
Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y 
lo agregarán a una lista visible al hacer clic en "Adicionar".
Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo
un nombre válido.
Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", 
se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.
*/
let amigos = [];
function addAmigo(){
    //let amigos = []; para que no se reinicie debe ser una variable global
    let listaAmigos = document.getElementById('amigo').value;
    if(listaAmigos == ""){
        alert('Este campo no puede estar vacio');
    }if(amigos.includes(listaAmigos)){
        alert(`El amigo: ${listaAmigos} ya esta incluido`)
    }else{
        amigos.push(listaAmigos)
        alert('El amigo se ha agregado');
        document.getElementById('amigo').value = '';//limpiamos la caja de texto
       
        listDeploy();
    }
}
//Crear funcion para desplegar lo que vayamos agregando
/*notas
Método document.createElement() 
    Crea un elemento HTML específico por su tagName.
    Si el tagName no se reconoce, crea un HTMLUnknownElement.
*/
function listDeploy(){
    let lista = document.querySelector('ul');// obtener la etiqueta del html donde
                                            // queremos poner los 
    lista.innerHTML = ''; // se debe limpiar la lista porque sino agrega los elementos anteriores
                            // es decir va duplicando campos pasados
                            
    for(let x = 0 ; x<amigos.length; x++){
    let nombres = document.createElement('li');
        nombres.textContent = amigos[x];
        lista.appendChild(nombres);
        
    }
}

function sortearAmigo(){
    let ganador = 0
    for(let y = 0 ; y<amigos.length; y++){ 
        
    }
    
}