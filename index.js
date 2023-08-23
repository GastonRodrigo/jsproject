// TIENDA PARA DIETETICA 
//DASHBOARD ADMIN PARA INGRESAR PRODUCTOS
//LISTA DE PRODUCTOS (CON TODAS SUS CARACTERISTICAS)
//BUSCADOR DE PRODUCTOS
//CARRITO DE COMPRA Y PEDIDO (SE ENVIA A WHATSAPP)

// CONSTRUCTOR DE PRODUCTO
class Producto {
    constructor(codigo, nombre, cantidad, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}

// FUNCION PARA CREAR PRODUCTOS
function crearProducto() {
    const codigo = parseInt(prompt('Ingrese el codigo del Producto nuevo:'));
    const nombre = prompt('Ingrese el nombre del Producto nuevo:');
    const cantidad = parseInt(prompt('Ingrese la cantidad de Kilos o Unidades (en numero):'));
    const precio = parseFloat(prompt('Ingrese el precio del Producto nuevo:'));

    const productoNuevo = new Producto(codigo, nombre, cantidad, precio);
    return productoNuevo;
}

const productosPredeterminados = [
    new Producto(1, 'Hummus Felices las vacas', 10, 1500),
    new Producto(2, 'Karnevil Felices las vacas', 15, 2450),
    new Producto(3, 'VDRINK Almendras', 8, 1270),
    new Producto(4, 'Alfajor de Almendras', 12, 875)
];

const listaProductos = [...productosPredeterminados];

let agregarProducto = true;

while (agregarProducto) {
    const productoNuevo = crearProducto();
    listaProductos.push(productoNuevo);

    const seguirCreando = prompt('Agregar otro producto?');
    agregarProducto = seguirCreando === 'si';
}

console.log('Lista de productos:');
console.log(listaProductos);

// BOTON AGREGAR NUEVO PRODUCTO
const crearProductoBtn = document.getElementById('crear-producto-btn');

crearProductoBtn.addEventListener('click', () => {
    const productoNuevo = crearProducto();
    listaProductosGuardados.push(productoNuevo);

    const listaProductosGuardadosJSON = JSON.stringify(listaProductosGuardados);
    localStorage.setItem('productos', listaProductosGuardadosJSON);

    
    mostrarProductosEnDOM();
});

// GUARDAR EN STORAGE
const listaProductosJSON = JSON.stringify(listaProductos);
localStorage.setItem('productos', listaProductosJSON);

// CARGAR DESDE STORAGE
const listaProductosGuardadosJSON = localStorage.getItem('productos');
const listaProductosGuardados = JSON.parse(listaProductosGuardadosJSON) || [];

// MODIFICAR EL DOM Y DETECTAR EVENTOS DE USUARIO
const carritoLista = document.getElementById('carrito-lista');
const productosContainer = document.getElementById('productos-container');

function mostrarProductosEnDOM() {
    productosContainer.innerHTML = '';

    listaProductosGuardados.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.innerHTML = `
            <div class="producto-info">
                <p><strong>Nombre:</strong> ${producto.nombre}</p>
                <p><strong>Precio:</strong> $${producto.precio.toFixed(2)}</p>
                <button class="agregar-carrito" data-codigo="${producto.codigo}">Agregar al carrito</button>
            </div>
        `;
        productosContainer.appendChild(productoDiv);
    });
}

mostrarProductosEnDOM();

document.addEventListener('click', event => {
    if (event.target.classList.contains('agregar-carrito')) {
        const codigoProducto = parseInt(event.target.getAttribute('data-codigo'));
        const productoSeleccionado = listaProductosGuardados.find(producto => producto.codigo === codigoProducto);

        if (productoSeleccionado) {
            carritoLista.innerHTML += `<li>${productoSeleccionado.nombre} - $${productoSeleccionado.precio.toFixed(2)}</li>`;
        }
    }
});