//Función que indica que debe ser mayor de esas para visitar el sitio.
function prevencionEdad(){
    alert('Debes ser mayor de 18 años para ingresar. ');
}

prevencionEdad();

// //Función que solicita al usuario su nombre y cepa preferida.
// function solicitarInformacion() {
//     let nombreUsuario = prompt('Por favor, ingrese su nombre: ');
//     let cepaPreferida = prompt('¿Cuál es la cepa que usted prefiere? ');
//     const nodoInfo = document.createElement("h3");
//     nodoInfo.innerHTML = `Bienvenido/a a WINE HOUSE ${nombreUsuario} . 
//     Como ahora sabemos que la cepa que más le apetece es la ${cepaPreferida}, queremos hacerle saber que va a poder encontrar en nuestra web las bebidas más exquisitas tales como esta.`;
//     titulo.appendChild(nodoInfo);
// }
// solicitarInformacion();

// //Clase Vinoteca con un constructo de Vino
// class Vinoteca{
//     constructor(vino) {
//     this.tipo = vino.tipo;
//     this.cepa = vino.cepa;
//     this.año = vino.año;
//     this.alcohol = vino.alcohol;
//     this.precio = parseFloat(vino.precio);
//     }
//     printMessage() {
//         alert(
//           `Tipo: ${this.tipo} - Cepa: ${this.cepa} - Año: ${this.año} - % ALC: ${this.alcohol} - Precio: ${this.precio}`
//         )
//     }
//     agregarIva() {
//         this.precio = this.precio * 1.21;
//     }
// }

// const vino1 = {
//     tipo: "Tinto",
//     cepa: "Malbec",
//     año: 2013,
//     alcohol: 12,
//     precio: 650,
// };
// const vino2 = {
//     tipo: "Tinto",
//     cepa: "Cabernet Sauvignon",
//     año: 2016,
//     alcohol: 10,
//     precio: 600,
// };
// const vino3 = {
//     tipo: "Tinto",
//     cepa: "Cabernet Franc",
//     año: 2018,
//     alcohol: 8,
//     precio: 550,
// };
// const vino4 = {
//     tipo: "Tinto",
//     cepa: "Merlot",
//     año: 2017,
//     alcohol: 9,
//     precio: 700,
// };
// const vino5 = {
//     tipo: "Tinto",
//     cepa: "Pinot Noir",
//     año: 2020,
//     alcohol: 14,
//     precio: 750,
// };
// const vino6 = {
//     tipo: "Tinto",
//     cepa: "Bonarda",
//     año: 2020,
//     alcohol: 14,
//     precio: 800,
// };
// const vino7 = {
//     tipo: "Blanco",
//     cepa: "Chardonnay",
//     año: 2021,
//     alcohol: 16,
//     precio: 500,
// };
// const vino8 = {
//     tipo: "Blanco",
//     cepa: "Sauvignon Blanc",
//     año: 2021,
//     alcohol: 19,
//     precio: 550,
// };
// const vino9= {
//     tipo: "Blanco",
//     cepa: "Torrontés",
//     año: 2021,
//     alcohol: 21,
//     precio: 650,
// };
// const vino10 = {
//     tipo: "Blanco",
//     cepa: "Blend",
//     año: 2021,
//     alcohol: 21,
//     precio: 600,
// };
// const vino11 = {
//     tipo: "Espumante",
//     cepa: "Brut Nature",
//     año: 2021,
//     alcohol: 7,
//     precio: 900,
// };
// const vino12 = {
//     tipo: "Espumante",
//     cepa: "Extra Brut",
//     año: 2021,
//     alcohol: 10,
//     precio: 800,
// };

// //ARRAY DE LOS VINOS QUE CONTIENE CADA CEPA
// alert("Los principales productos de nuestra vinoteca son los siguientes:");
// const tintos = ["MALBEC","CABERNET SAUVIGNON","CABERNET FRANC","MERLOT","PINOT NOIR","BONARDA"];
// for (let index = 0; index < 6; index++) {
//     alert("Tinto: " + tintos[index]);
// }
// const blanco = ["CHARDONNAY","SAUVIGNON BLANC","TORRONTES","BLEND"];
// for (let index = 0; index < 4; index++) {
//     alert("Blanco: " + blanco[index]);
// }
// const espumante = ["BRUT NATURE","EXTRA BRUT"];
// for (let index = 0; index < 2; index++) {
//     alert("Espumante: " + espumante[index]);
// }

// //CONSTRUCCIÓN DE CADA TIPO DE VINO
// const vinoUno = new Vinoteca(vino1);
// vinoUno.agregarIva();
// const vinoDos = new Vinoteca(vino2);
// vinoDos.agregarIva();
// const vinoTres = new Vinoteca(vino3);
// vinoTres.agregarIva();
// const vinoCuatro = new Vinoteca(vino4);
// vinoCuatro.agregarIva();
// const vinoCinco = new Vinoteca(vino5);
// vinoCinco.agregarIva();
// const vinoSeis = new Vinoteca(vino6);
// vinoSeis.agregarIva();
// const vinoSiete = new Vinoteca(vino7);
// vinoSiete.agregarIva();
// const vinoOcho = new Vinoteca(vino8);
// vinoOcho.agregarIva();
// const vinoNueve = new Vinoteca(vino9);
// vinoNueve.agregarIva();
// const vinoDiez = new Vinoteca(vino10);
// vinoDiez.agregarIva();
// const vinoOnce = new Vinoteca(vino11);
// vinoOnce.agregarIva();
// const vinoDoce = new Vinoteca(vino12);
// vinoDoce.agregarIva();

// //FUNCION QUE MUESTRA LA INFORMACIÓN DEL VINO SELECCIONADO
// function infoVino(){
//     let eleccion = prompt("Ingrese (en mayúscula) el nombre del vino del que desee saber su información: ");
//     switch(eleccion){
//         case "MALBEC":
//             vinoUno.printMessage();
//             break;
//         case "CABERNET SAUVIGNON":
//             vinoDos.printMessage();
//             break;
//         case "CABERNET FRANC":
//             vinoTres.printMessage();
//             break;
//         case "MERLOT":
//             vinoCuatro.printMessage();
//             break;
//         case "PINOT NOIR":
//             vinoCinco.printMessage();
//             break;      
//         case "BONARDA":
//             vinoSeis.printMessage();
//             break;   
//         case "CHARDONNAY":
//             vinoSiete.printMessage();
//             break;    
//         case "SAUVIGNON BLANC":
//             vinoOcho.printMessage();
//             break;     
//         case "TORRONTES":
//             vinoNueve.printMessage();
//             break;    
//         case "BLEND":
//             vinoDiez.printMessage();
//             break;  
//         case "BRUT NATURE":
//             vinoOnce.printMessage();
//         default: vinoDoce.printMessage();
//     }
// }
// infoVino();

document.addEventListener("DOMContentLoaded", () => {
    fetchData()
})

const fetchData = async () => {
    try{
        const res = await fetch('api.json')
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}


   


