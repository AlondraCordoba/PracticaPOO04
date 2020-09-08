class OpcionesVotacion {
    favor = 0;
    contra = 0;
    abstencion = 0;

    contadorVotos(favor, contra, abstencion) {
        const tr = document.createElement('tr')
        tr.innerHTML = `
            <td scope="row">${this.favor}</td>
            <td>${this.contra}</td>
            <td>${this.abstencion}</td>`

        return tr;
    }

}