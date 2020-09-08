const opcionesVotacion = new OpcionesVotacion();
const tabla = document.getElementById('tbody');


function eventListener() {
    document.getElementById('btnConcluirVotacion').addEventListener('click', concluir);
    document.getElementById('btnFavor').addEventListener('click', contarVotosFavor);
    document.getElementById('btnContra').addEventListener('click', contarVotosContra);
    document.getElementById('btnAbstencion').addEventListener('click', contarVotosAbstencion);
    document.getElementById('btnEliminar').addEventListener('click', removeChi)

}

eventListener();

function contarVotosFavor() {
    opcionesVotacion.favor++;
    console.log(opcionesVotacion.favor);
}

function contarVotosContra() {
    opcionesVotacion.contra++;
    console.log(opcionesVotacion.contra);
}

function contarVotosAbstencion() {
    opcionesVotacion.abstencion++;
    console.log(opcionesVotacion.abstencion);
}

function concluir() {
    let tr = opcionesVotacion.contadorVotos(opcionesVotacion.favor, opcionesVotacion.contra, opcionesVotacion.abstencion);
    console.log(tr);
    tabla.appendChild(tr);

    var text = document.getElementById('preguntaTema').value;
    document.getElementById('preguntaTema2').value = text;

}