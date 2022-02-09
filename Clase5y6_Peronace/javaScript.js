//Función que indica que debe ser mayor de esas para visitar el sitio.
function prevencionEdad(){
    alert('Debes ser mayor de 18 años para ingresar. ');
}

prevencionEdad();

//Función que solicita al usuario su nombre y cepa preferida.
function solicitarInformacion() {
    let nombre = prompt('Por favor, ingrese su nombre: ');
    let cepa = prompt('¿Cuál es la cepa que usted prefiere? ');
    alert('Bienvenido/a ' +nombre+' a WINE HOUSE. Como ahora sabemos que la cepa que más le apetece es la ' +cepa+ ', queremos hacerle saber que va a poder encontrar en nuestra web, los vinos más exquisitos tales como este.');
}

solicitarInformacion();

//Constructor de Vino
function Vino(tipo, cepa, año) {
    this.tipo = tipo;
    this.cepa = cepa;
    this.año = año;
}

const vino1 = new Vino("Tinto", "Malbec", 2013);
const vino2 = new Vino("Tinto", "Cabernet Sauvignon", 2013);
const vino3 = new Vino("Tinto", "Cabernet Franc", 2013);
const vino4 = new Vino("Tinto", "Merlot", 2013);
const vino5 = new Vino("Tinto", "Pinot Noir", 2013);
const vino6 = new Vino("Blanco", "Chardonnay", 2013);
const vino7 = new Vino("Tinto", "Malbec", 2013);
const vino8 = new Vino("Tinto", "Malbec", 2013);
const vino9 = new Vino("Tinto", "Malbec", 2013);
const vino10 = new Vino("Tinto", "Malbec", 2013);