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

//Clase Vinoteca con un constructo de Vino
class Vinoteca{
    constructor(vino) {
    this.tipo = vino.tipo;
    this.cepa = vino.cepa;
    this.año = vino.año;
    this.alcohol = vino.alcohol;
    }

    printMessage() {
        console.log(
          `Tipo: ${this.tipo} - Cepa: ${this.cepa} - Año: ${this.año} - % ALC: ${this.alcohol}`
        )
    }
}

const vino1 = {
    tipo: "Tinto",
    cepa: "Malbec",
    año: 2013,
    alcohol: 12,
};
const vino1 = {
    tipo: "Tinto",
    cepa: "Malbec",
    año: 2013,
    alcohol: 12,
};


const vinoUno = new Vinoteca(vino1);
vinoUno.printMessage();
