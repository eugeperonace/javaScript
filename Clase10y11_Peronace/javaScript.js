// //Creé un listado de productos
// const productos = [
//     {
//         id: 1,
//         imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/390/316/products/chacra-chardonnay1-1a0ea011176b4ea4c316184159175827-480-0.jpg',
//         tipo: "Blanco",
//         cepa: "Chardonnay",
//         año: 2021,
//         alcohol: 16,
//         precio: 500,
//     },
//     {
//         id: 2,
//         imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/390/316/products/trumpeter_sauvignon_blanc_xu5tru1-61ed2f25eaceba4a4f16042792152701-480-0.jpg',
//         tipo: "Blanco",
//         cepa: "Sauvignon Blanc",
//         año: 2021,
//         alcohol: 19,
//         precio: 550,
//     },
//     {
//         id: 3,
//         imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/390/316/products/abras-torrontes1-1a33c51d0d7df6356f16147783996537-480-0.jpg',
//         tipo: "Blanco",
//         cepa: "Torrontés",
//         año: 2021,
//         alcohol: 21,
//         precio: 650,
//     },
//     {
//         id: 4,
//         imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/390/316/products/vino-amalaya-blanco-de-corte-blend-envios-solamente-cpn-d_nq_np_676979-mla31048344425_062019-f1-70d87699e624de4cf216034708903299-480-0.jpg',
//         tipo: "Blanco",
//         cepa: "Blend",
//         año: 2021,
//         alcohol: 21,
//         precio: 600,
//     },
//     {
//         id: 5,
//         imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/390/316/products/botella-alyda-brut-nature1-1dd3a6fd673d8100d416322366844606-480-0.jpg',
//         tipo: "Espumante",
//         cepa: "Brut Nature",
//         año: 2021,
//         alcohol: 7,
//         precio: 900,
//     },
//     {
//         id: 6,
//         imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/390/316/products/emilia-esp_extrabrut_v11-ad3911ea3a0ac8c4d216046849161583-480-0.png',
//         tipo: "Espumante",
//         cepa: "Extra Brut",
//         año: 2021,
//         alcohol: 10,
//         precio: 800,
//     },
//     {
//         id: 7,
//         imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/390/316/products/aguijon-de-abeja-reina-malbec-94da8b8f3e34308cec16201394895062-1024-1024.jpeg',
//         tipo: "Tinto",
//         cepa: "Malbec",
//         año: 2013,
//         alcohol: 12,
//         precio: 650,
//     },  
//     {
//         id: 8,
//         imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/390/316/products/lui-reserva-pinot-noir1-a97037191b170d21e516202315768051-480-0.jpg',
//         tipo: "Tinto",
//         cepa: "Pinot Noir",
//         año: 2020,
//         alcohol: 14,
//         precio: 750,
//     },
//     {
//         id: 9,
//         imagen: 'https://bodegavistalba.com/tienda/img/p/1/3/4/134-large_default.jpg',
//         tipo: "Tinto",
//         cepa: "Cabernet Sauvignon",
//         año: 2016,
//         alcohol: 10,
//         precio: 600,
//     },
//     {
//         id: 10,
//         imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/390/316/products/aguijon-de-abeja-reina-cabernet-franc11-e986bcbd2eca75d72316201385328684-1024-1024.jpeg',
//         tipo: "Tinto",
//         cepa: "Cabernet Franc",
//         año: 2018,
//         alcohol: 8,
//         precio: 550,
//     },
//     {
//         id: 11,
//         imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/390/316/products/domingo-molina-merlot1-0c61f1e89c842760f016197932444638-1024-1024.jpg',
//         tipo: "Tinto",
//         cepa: "Merlot",
//         año: 2017,
//         alcohol: 9,
//         precio: 700,
//     },
  
//     {
//         id: 12,
//         imagen: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/390/316/products/the-apple-bonarda1-7c6968fea41d065fec16311100000318-480-0.jpg',
//         tipo: "Tinto",
//         cepa: "Bonarda",
//         año: 2020,
//         alcohol: 14,
//         precio: 800,
//     },
// ];

// //Creé un nuevo nodo desde mi archivo .js en vez desde el .html y fui mostrando las propiedades de cada producto 
// const listado = document.getElementById("listadoProductos");

// for (const producto of productos) {
//     let contenedor = document.createElement("li");
//     contenedor.className = "producto";
//     contenedor.id = producto.id;
//     contenedor.innerHTML = `
//       <div class="imagen-producto">
//         <img src="${producto.imagen}"
//           alt="imagen vino">
//       </div>
//       <p class="tipo">TIPO: ${producto.tipo}</p>
//       <p class="cepa">CEPA: ${producto.cepa}</p>
//       <p class="año">AÑO: ${producto.año}</p>
//       <p class="alcohol">ALC: ${producto.alcohol} %</p>
//       <p class="precio">PRECIO: $ ${producto.precio},00</p>`;
//       contenedor.onclick = () => agregarProducto(producto);
//       //<button id="btnAgregar">Comprar</button>
//     listado.appendChild(contenedor);
// }


// //CÓDIGO PARA INCORPORAR BOTON "COMPRAR"
// const canasta = document.getElementById("canasta");

// const agregarProducto = (producto) => {
//     let contenedor = document.createElement("div");
//     contenedor.className = "producto-canasta";
//     contenedor.id = producto.id;
//     contenedor.innerHTML = `
//       <div class="imagen-producto">
//         <img src="${producto.imagen}"
//           alt="imagen vino">
//       </div>
//       <p class="tipo">TIPO: ${producto.tipo}</p>
//       <p class="cepa">CEPA: ${producto.cepa}</p>
//       <p class="año">AÑO: ${producto.año}</p>
//       <p class="alcohol">ALC: ${producto.alcohol} %</p>
//       <p class="precio">PRECIO: $ ${producto.precio},00</p>
//       `;
//       canasta.appendChild(contenedor);
// }

//  let boton1 = document.getElementById("btnAgregar");
//  boton1.addEventListener("click", agregarProducto);




 //Accedo a la clase que tiene el botón "AÑADIR AL CARRITO", le agrego el evento "click" a ese botón y la función para agregar el producto al carrito.
const addToShoppingCartButtons = document.querySelectorAll('.addToCart');
addToShoppingCartButtons.forEach((addToCartButton) => {
    addToCartButton.addEventListener('click', addToCartClicked);
});

//Accedo a la clase que tiene el botón "Comprar", le agrego el evento "click" a ese botón y la función comprarButtonClicked.
const comprarButton = document.querySelector('.comprarButton');
comprarButton.addEventListener('click', comprarButtonClicked);

//Accedo a la clase shoppingCartItemsContainer de mi HTML y la guardo en una var para utilizarla después.
const shoppingCartItemsContainer = document.querySelector('.shoppingCartItemsContainer');

//Función que accede y guarda en tres variables distinas la img, título y precio al item y luego usa otra función para agregar ese producto al carrito.
function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest('.item');

    const itemTitle = item.querySelector('.item-title').textContent;
    const itemPrice = item.querySelector('.item-price').textContent;
    const itemImage = item.querySelector('.item-image').src;

    addItemToShoppingCart(itemTitle, itemPrice, itemImage);
}

//FUCIÓN PARA AGREGAR PRODUCTO AL CARRITO
function addItemToShoppingCart(itemTitle, itemPrice, itemImage){
    const elementsTitle = shoppingCartItemsContainer.getElementsByClassName('shoppingCartItemTitle');
      for (let i = 0; i < elementsTitle.length; i++) {
        if (elementsTitle[i].innerText === itemTitle) {
          let elementQuantity = elementsTitle[i].parentElement.parentElement.parentElement.querySelector(
            '.shoppingCartItemQuantity'
          );
          elementQuantity.value++; //si agrego un elemento y ese titulo ya existía en mi carrito, aumentá en 1 la cantidad
          $('.toast').toast('show');
          updateShoppingCartTotal(); //agrego la función para que se acumule el precio de cada producto
          return;
        }
      }

    const shoppingCartRow = document.createElement('div');
    const shoppingCartContent = `
    <div class="row shoppingCartItem">
        <div class="col-7">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-1">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
    shoppingCartRow.innerHTML = shoppingCartContent
    shoppingCartItemsContainer.append(shoppingCartRow)

    shoppingCartRow
        .querySelector('.buttonDelete')
        .addEventListener('click', removeShoppingCartItem);
    
    shoppingCartRow
        .querySelector('.shoppingCartItemQuantity')
        .addEventListener('change', quantityChanged);

    updateShoppingCartTotal();
}

//FUNCIÓN PARA ACTUALIZAR EL PRECIO TOTAL DEL CARRITO
function updateShoppingCartTotal() {
    let total = 0;
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal');   //accedo al precio Total del carrito
  
    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem'); //accedo a todos los items del carrito
  
    shoppingCartItems.forEach((shoppingCartItem) => {                         //recorro los items del carrito
      const shoppingCartItemPriceElement = shoppingCartItem.querySelector('.shoppingCartItemPrice');       //accedo y me guardo en una var el precio de ese item
      const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace('$', ''));     //reemplazo el signo $ por nada y como está en string lo modifico a número con la función Number()
      const shoppingCartItemQuantityElement = shoppingCartItem.querySelector('.shoppingCartItemQuantity'); //accedo y me guardo en una var la cantidad de ese item
      const shoppingCartItemQuantity = Number(shoppingCartItemQuantityElement.value);                      //guardo en una var el valor de la cantidad de ese item 
      total = total + shoppingCartItemPrice * shoppingCartItemQuantity;                                    //multiplico el precio por la cantidad y guardo ese valor en la var "total"
    });
    shoppingCartTotal.innerHTML = `${total.toFixed(2)}$`;
}

//FUNCIÓN PARA ELIMINAR UN PRODUCTO DEL CARRITO
function removeShoppingCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.closest('.shoppingCartItem').remove();
    updateShoppingCartTotal();
}

//FUNCIÓN PARA QUE LA CANTIDAD DE LOS PRODUCTOS SELECCIONADOS NO PUEDA SER NEGATIVA
function quantityChanged(event) {
    const input = event.target;
    input.value <= 0 ? (input.value = 1) : null; //si el valor es menor o igual a 0, automáticamente se coloca 1
    updateShoppingCartTotal();
}

//FUNCIÓN PARA COMPRAR LOS PRODUCTOS SELECCIONADOS
function comprarButtonClicked() {
    shoppingCartItemsContainer.innerHTML = '';  //vacía todo lo agregado al carrito
    updateShoppingCartTotal();                  //pone el Total en $0.00   
}

   


