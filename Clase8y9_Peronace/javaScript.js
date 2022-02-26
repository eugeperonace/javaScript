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


//Creé un listado de productos
const productos = [
    {
        id: 1,
        imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/390/316/products/chacra-chardonnay1-1a0ea011176b4ea4c316184159175827-480-0.jpg',
        tipo: "Blanco",
        cepa: "Chardonnay",
        año: 2021,
        alcohol: 16,
        precio: 500,
    },
    {
        id: 2,
        imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/390/316/products/trumpeter_sauvignon_blanc_xu5tru1-61ed2f25eaceba4a4f16042792152701-480-0.jpg',
        tipo: "Blanco",
        cepa: "Sauvignon Blanc",
        año: 2021,
        alcohol: 19,
        precio: 550,
    },
    {
        id: 3,
        imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/390/316/products/abras-torrontes1-1a33c51d0d7df6356f16147783996537-480-0.jpg',
        tipo: "Blanco",
        cepa: "Torrontés",
        año: 2021,
        alcohol: 21,
        precio: 650,
    },
    {
        id: 4,
        imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/390/316/products/vino-amalaya-blanco-de-corte-blend-envios-solamente-cpn-d_nq_np_676979-mla31048344425_062019-f1-70d87699e624de4cf216034708903299-480-0.jpg',
        tipo: "Blanco",
        cepa: "Blend",
        año: 2021,
        alcohol: 21,
        precio: 600,
    },
    {
        id: 5,
        imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/390/316/products/botella-alyda-brut-nature1-1dd3a6fd673d8100d416322366844606-480-0.jpg',
        tipo: "Espumante",
        cepa: "Brut Nature",
        año: 2021,
        alcohol: 7,
        precio: 900,
    },
    {
        id: 6,
        imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/390/316/products/emilia-esp_extrabrut_v11-ad3911ea3a0ac8c4d216046849161583-480-0.png',
        tipo: "Espumante",
        cepa: "Extra Brut",
        año: 2021,
        alcohol: 10,
        precio: 800,
    },
    {
        id: 7,
        imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/390/316/products/aguijon-de-abeja-reina-malbec-94da8b8f3e34308cec16201394895062-1024-1024.jpeg',
        tipo: "Tinto",
        cepa: "Malbec",
        año: 2013,
        alcohol: 12,
        precio: 650,
    },  
    {
        id: 8,
        imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/390/316/products/lui-reserva-pinot-noir1-a97037191b170d21e516202315768051-480-0.jpg',
        tipo: "Tinto",
        cepa: "Pinot Noir",
        año: 2020,
        alcohol: 14,
        precio: 750,
    },
    {
        id: 9,
        imagen: 'https://bodegavistalba.com/tienda/img/p/1/3/4/134-large_default.jpg',
        tipo: "Tinto",
        cepa: "Cabernet Sauvignon",
        año: 2016,
        alcohol: 10,
        precio: 600,
    },
    {
        id: 10,
        imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/390/316/products/aguijon-de-abeja-reina-cabernet-franc11-e986bcbd2eca75d72316201385328684-1024-1024.jpeg',
        tipo: "Tinto",
        cepa: "Cabernet Franc",
        año: 2018,
        alcohol: 8,
        precio: 550,
    },
    {
        id: 11,
        imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/390/316/products/domingo-molina-merlot1-0c61f1e89c842760f016197932444638-1024-1024.jpg',
        tipo: "Tinto",
        cepa: "Merlot",
        año: 2017,
        alcohol: 9,
        precio: 700,
    },
  
    {
        id: 12,
        imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/390/316/products/the-apple-bonarda1-7c6968fea41d065fec16311100000318-480-0.jpg',
        tipo: "Tinto",
        cepa: "Bonarda",
        año: 2020,
        alcohol: 14,
        precio: 800,
    },
];

//Creé un nuevo nodo desde mi archivo .js en vez desde el .html y fui mostrando las propiedades de cada producto 
const listado = document.getElementById("listadoProductos");

for (const producto of productos) {
    let contenedor = document.createElement("li");
    contenedor.id = producto.id;
    contenedor.innerHTML = `
      <div class="imagen-producto">
        <img src="${producto.imagen}"
          alt="imagen vino">
      </div>
      <p class="tipo">TIPO: ${producto.tipo}</p>
      <p class="cepa">CEPA: ${producto.cepa}</p>
      <p class="año">AÑO: ${producto.año}</p>
      <p class="alcohol">ALC: ${producto.alcohol} %</p>
      <p class="precio">PRECIO: $ ${producto.precio},00</p>
      <button id="btnAgregar">Comprar</button>
      `;
    listado.appendChild(contenedor);
}

//Creé un evento click 
let respuesta = document.getElementById('respuesta');

const agregarProducto = () => {
  console.log("Producto agregado al carrito.");
  const elemento = document.createElement("p");
  elemento.innerHTML = "El producto seleccionado ya fue reservado para usted.";
  respuesta.appendChild(elemento);
}

let boton1 = document.getElementById("btnAgregar");
boton1.addEventListener("click", agregarProducto);

   


