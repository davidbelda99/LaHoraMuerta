const chat = document.getElementById("chat");
const codigo = document.getElementById("codigo");
const temporizador = document.getElementById("temporizador");

function mostrarMensaje(texto){

    const mensaje = document.createElement("div");

    mensaje.className = "mensaje";

    mensaje.innerText = texto;

    chat.appendChild(mensaje);

    chat.scrollTop = chat.scrollHeight;
    
    return mensaje;

}

function vibrar(){

    if(navigator.vibrate){

        navigator.vibrate([200,100,200]);

    }

}

function mostrarMensajeTemporal(texto, segundos){

    const mensaje = mostrarMensaje(texto);

    setTimeout(function(){

        mensaje.innerText = "████ MENSAJE INTERCEPTADO ████";

    }, segundos * 1000);

}

function mostrarEscribiendo(){

    const escribiendo = document.createElement("div");

    escribiendo.className = "mensaje";

    escribiendo.id = "escribiendo";

    escribiendo.innerText = "DESCONOCIDO está escribiendo...";

    chat.appendChild(escribiendo);

    chat.scrollTop = chat.scrollHeight;

}

function quitarEscribiendo(){

    const escribiendo = document.getElementById("escribiendo");

    if(escribiendo){

        escribiendo.remove();

    }

}

// ---------------------------
// Historia inicial
// ---------------------------

const historiaInicial = [

    "¿Me recibís?",

    "...",

    "Escuchad con atención.",

    "Solo disponéis de 30 minutos.",

    "Cuando el reloj llegue a cero, las alarmas volverán a activarse.",

    "Encontrad el Archivo Cero y enviadmelo antes de que sea demasiado tarde.",

    "Empezad por el SOBRE ENCIMA DE LA MESA DEL SALÓN."

];

let mensajeActual = 0;

function mostrarHistoriaInicial(){

    if(mensajeActual >= historiaInicial.length){

        return;

    }

    mostrarEscribiendo();

    setTimeout(function(){

        quitarEscribiendo();

        mostrarMensaje(historiaInicial[mensajeActual]);

        mensajeActual++;

        setTimeout(mostrarHistoriaInicial,1200);

    },1000);

}

mostrarHistoriaInicial();

// ---------------------------
// Temporizador
// ---------------------------

let tiempo = 30 * 60;

function iniciarTemporizador(){

    setInterval(function(){

        tiempo--;

        let minutos = Math.floor(tiempo / 60);

        let segundos = tiempo % 60;

        if(segundos < 10){

            segundos = "0" + segundos;

        }

        temporizador.innerText = "⏳ " + minutos + ":" + segundos;

    },1000);

}

iniciarTemporizador();

// ---------------------------
// Pruebas
// ---------------------------

let prueba = 1;

codigo.addEventListener("keydown", function(event){

    if(event.key !== "Enter") return;

    const respuesta = codigo.value.trim().toUpperCase();

    codigo.value = "";

    if(prueba == 1){

        if(respuesta == "482"){

            mostrarMensaje("✔ Correcto.");

            mostrarMensaje("Dirigíos a la cocina, donde se prepara y almacena la magia");

            prueba = 2;

        }else{

            mostrarMensaje("❌ Código incorrecto.");

        }

    }

 else if(prueba == 2){

    if(respuesta == "JOHN DAVID LOPEZ"){

        mostrarMensaje("✔ Accediendo al sistema de cámaras...");

        mostrarMensaje("He conseguido recuperar tres fotografías.");

        mostrarMensaje("Encontrad estas tres localizaciones.");

const galeria = document.createElement("div");

galeria.className = "galeria";

galeria.innerHTML = `
    <div class="camara">
        <div class="cabecera">CAM-01 | CONECTADA</div>
        <img src="foto1.jpg" alt="Foto 1">
        <div class="pie">03:00:00 &nbsp;&nbsp; REC ●</div>
    </div>

    <div class="camara">
        <div class="cabecera">CAM-02 | INTERFERENCIAS</div>
        <img src="foto2.jpg" alt="Foto 2">
        <div class="pie">03:00:00 &nbsp;&nbsp; REC ●</div>
    </div>

    <div class="camara">
        <div class="cabecera">CAM-03 | SEÑAL DÉBIL</div>
        <img src="foto3.jpg" alt="Foto 3">
        <div class="pie">03:00:00 &nbsp;&nbsp; REC ●</div>
    </div>
`;

chat.appendChild(galeria);
chat.scrollTop = chat.scrollHeight;


        prueba = 3;

    }else{

        mostrarMensaje("❌ Código incorrecto.");

    }

}

    else if(prueba == 3){

        if(respuesta == "INFILTRADO"){

            mostrarMensaje("✔ Ubicaciones confirmadas, es correcto.");

            mostrarMensaje("El siguiente destino es el baño, alli guardaba algo especial.");

            setTimeout(function(){

    vibrar();

mostrarMensajeTemporal("NO CONFIÉIS EN NADIE.", 3);

},4000);

            prueba = 4;

        }else{

            mostrarMensaje("❌ Código incorrecto.");

        }

    }

    

    else if(prueba == 4){

        if(respuesta == "ARX"){

            mostrarMensaje("✔ Archivo Cero localizado.");

            mostrarMensaje("NO LO ABRÁIS.");

            mostrarMensaje("Destruidlo inmediatamente.");

            mostrarMensaje("Buen trabajo!");

            mostrarMensaje("████ CONEXIÓN FINALIZADA ████");

            codigo.disabled = true;

        }else{

            mostrarMensaje("❌ Contraseña incorrecta.");

        }

    }

});