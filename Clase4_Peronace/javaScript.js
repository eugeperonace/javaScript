function prevencionEdad(){
    alert('Debes ser mayor de 18 años para ingresar. ');
}

prevencionEdad();

function solicitarInformacion() {
    let nombre = prompt('Por favor, ingrese su nombre: ');
    let cepa = prompt('¿Cuál es la cepa que usted prefiere? ');
    alert('Bienvenido/a ' +nombre+' a WINE HOUSE. Como ahora sabemos que la cepa que más le apetece es la ' +cepa+ ', queremos hacerle saber que va a poder encontrar en nuestra web, los vinos más exquisitos tales como este.');
}

solicitarInformacion();