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
        return 0; // esto evita que mande al array un campo con espacio vacios
                 // envia nada a la funcion

    }if(amigos.includes(listaAmigos)){
        alert(`El amigo: ${listaAmigos} ya esta incluido`);
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
    let lista = document.querySelector('ul');// obtener la etiqueta del html donde queremos ponerlos
    lista.innerHTML = ''; // se debe limpiar la lista porque sino agrega los elementos anteriores
                            // es decir va duplicando campos pasados
                            
    for(let x = 0 ; x<amigos.length; x++){
    let nombres = document.createElement('li'); // creamos un elemntos del tipo lis
        nombres.textContent = amigos[x];
        lista.appendChild(nombres); // agregamso con appendchild el nombre del amigo
        
    }
}

function sortearAmigo(){
    let z = Math.floor(Math.random()*amigos.length); // con esto se crea un numero aleatorio
                                                    // dentro del rango del array

    //alert(amigos[z]); // con un numero que este dentro del rango se selecciona el indice
                    // que le corresponde dentro del array amigos[] el cual 
                    //nos devuelve el valor que corresponde a dicho valo dentro del array
                    // seleccionado asi nuestro amigo sorteado.
    let seleccion = document.getElementById('resultado')
    seleccion.innerHTML = ''; // agregar para evitar que este el seleccionado anterior
    let amigoSeleccionado = document.createElement('li');
    amigoSeleccionado.textContent = `El amigo secreto es: ${amigos[z]}`;
    seleccion.appendChild(amigoSeleccionado);
}

function reboot(){
    amigos = [];
    listaAmigos = document.getElementById('amigo');
    listaAmigos.value = '';
    lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    seleccion = document.getElementById('resultado');
    seleccion.innerHTML = '';
    alert('Juego reiniciado');
}
