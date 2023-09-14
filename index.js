// TIENDA PARA DIETETICA 
//DASHBOARD ADMIN PARA INGRESAR PRODUCTOS
//LISTA DE PRODUCTOS (CON TODAS SUS CARACTERISTICAS)
//BUSCADOR DE PRODUCTOS
//CARRITO DE COMPRA Y PEDIDO (SE ENVIA A WHATSAPP)

// CARGA DE API
function cargarProductosDeAPI() {
    const url = 'https://fakestoreapi.com/products';

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            const productosAPI = data.map(item => new Producto(item.id, item.title, 1, item.price, item.image));
            listaProductosGuardados.push(...productosAPI); 
            const listaProductosGuardadosJSON = JSON.stringify(listaProductosGuardados);
            localStorage.setItem('productos', listaProductosGuardadosJSON);

            mostrarProductosEnDOM(); 
        })
        .catch(error => {
            console.error('Error al cargar productos de la API:', error);
            return [];
        });
}

// CONSTRUCTOR DE PRODUCTO
class Producto {
    constructor(codigo, nombre, cantidad, precio, imagen) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
        this.imagen = imagen;
    }
}

// FUNCION PARA CREAR PRODUCTOS
function crearProducto() {
    const codigo = parseInt(prompt('Ingrese el codigo del Producto nuevo:'));
    const nombre = prompt('Ingrese el nombre del Producto nuevo:');
    const cantidad = parseInt(prompt('Ingrese la cantidad de Kilos o Unidades (en numero):'));
    const precio = parseFloat(prompt('Ingrese el precio del Producto nuevo:'));
    const imagen = prompt('Ingrese la URL de la imagen del Producto:');

    const productoNuevo = new Producto(codigo, nombre, cantidad, precio, imagen);
    return productoNuevo;
}

const productosPredeterminados = [
    new Producto(1, 'Hummus Felices las vacas', 10, 1500, './img/favicon.png'),
    new Producto(2, 'Karnevil Felices las vacas', 15, 2450, './img/favicon.png' ),
    new Producto(3, 'VDRINK Almendras', 8, 1270, './img/favicon.png'),
    new Producto(4, 'Alfajor de Almendras', 12, 875, './img/favicon.png'),
    new Producto(5, 'Miel de pastizal 1Kg', 102, 1875, './img/favicon.png'),
    new Producto(6, 'Rawmesan', 10, 1300, './img/favicon.png'),
    new Producto(7, 'Queso Crema Rebelde', 25, 900, './img/favicon.png'),
    new Producto(8, 'NOT Burger Carne', 100, 2275, './img/favicon.png'),
    new Producto(9, 'Congelados Frutos del bosque', 14, 1675, './img/favicon.png')
];

const listaProductos = [...productosPredeterminados];

// GUARDAR EN STORAGE
const listaProductosJSON = JSON.stringify(listaProductos);
localStorage.setItem('productos', listaProductosJSON);

// CARGAR DESDE STORAGE
const listaProductosGuardadosJSON = localStorage.getItem('productos');
const listaProductosGuardados = JSON.parse(listaProductosGuardadosJSON) || [];

// CARGAR DESDE API
cargarProductosDeAPI();

// MODIFICAR EL DOM Y DETECTAR EVENTOS DE USUARIO
const carritoLista = document.getElementById('carrito-lista');
const productosContainer = document.getElementById('productos-container');
const crearProductoBtn = document.getElementById('crear-producto-btn');

// PRODUCTOS MOSTRADOS POR HTML EN CARDS
    function mostrarProductosEnDOM() {
        productosContainer.innerHTML = '';
    
        listaProductosGuardados.forEach(producto => {
        const productoCard = document.createElement('div');
        productoCard.classList.add('producto-card');
        productoCard.innerHTML = `
            <div class="producto-info">
            <img src="${producto.imagen}"  class="responsive-img ">
                <p><strong>Nombre:</strong> ${producto.nombre}</p>
                <p><strong>Precio:</strong> $${producto.precio.toFixed(2)}</p>
                <button class="agregar-carrito" data-codigo="${producto.codigo}">Agregar al carrito</button>
            </div>
        `;
        productosContainer.appendChild(productoCard);
        });
    }
    
    mostrarProductosEnDOM();
    

crearProductoBtn.addEventListener('click', () => {
    const productoNuevo = crearProducto(); 
    listaProductosGuardados.push(productoNuevo);

    const listaProductosGuardadosJSON = JSON.stringify(listaProductosGuardados);
    localStorage.setItem('productos', listaProductosGuardadosJSON);

    mostrarProductosEnDOM();


// NOTIFICACION PARA CREAR PRODUCTO CON TOASTIFY
Toastify({
    text: "Producto creado con éxito!",
    duration: 3000, 
    gravity: "top",
    close: true,
}).showToast();
});


document.addEventListener('click', event => {
    if (event.target.classList.contains('agregar-carrito')) {
        const codigoProducto = parseInt(event.target.getAttribute('data-codigo'));
        const productoSeleccionado = listaProductosGuardados.find(producto => producto.codigo === codigoProducto);

        if (productoSeleccionado) {
            carritoLista.innerHTML += `<li>${productoSeleccionado.nombre} - $${productoSeleccionado.precio.toFixed(2)}</li>`;

            // NOTIFICACION TOASTIFY PARA PRODUCTO AGREGADO AL CARRITO
            Toastify({
                text: "Producto agregado al carrito!",
                duration: 3000,
                gravity: "top",
                close: true,
            }).showToast();
        }
    }
});