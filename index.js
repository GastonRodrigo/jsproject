// TIENDA PARA DIETETICA 
//DASHBOARD ADMIN PARA INGRESAR PRODUCTOS
//LISTA DE PRODUCTOS (CON TODAS SUS CARACTERISTICAS)
//BUSCADOR DE PRODUCTOS
//CARRITO DE COMPRA Y PEDIDO (SE ENVIA A WHATSAPP)

alert('Bienvenido a Los Sauces Dietetica')


// CONSTRUCTOR DE PRODUCTO
class Producto {
    constructor (codigo, nombre, cantidad, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}

// FUNCION PARA CREAR PRODUCTOS

function crearProducto () {
    const codigo = parseInt (prompt ('Ingrese el codigo del Producto nuevo:'));
    const nombre = prompt ('Ingrese el nombre del Producto nuevo:');
    const cantidad = parseInt (prompt ('Ingrese la cantidad de Kilos o Unidades (en numero):'));
    const precio = parseFloat (prompt ('Ingrese el precio del Producto nuevo:'));

    const productoNuevo = new Producto(codigo, nombre, cantidad, precio);
    return productoNuevo;

}

const listaProductos = [];

let agregarProducto = true;

while (agregarProducto) {
    const productoNuevo = crearProducto ();
    listaProductos.push (productoNuevo);

    const seguirCreando = prompt ('Agregar otro producto?');
    agregarProducto = seguirCreando == 'si';
}

console.log ('Lista de productos:');
console.log (listaProductos);

// PROMPT PARA BUSCAR PRODUCTOS

const buscarProducto = prompt('Ingrese el nombre del producto que desea buscar:');
const productoEncontrado = listaProductos.find(producto => producto.nombre === buscarProducto);

if (productoEncontrado) {
    console.log(`El precio del producto "${productoEncontrado.nombre}" es $${productoEncontrado.precio}`);
} else {
    console.log(`No hay stock del producto consultado`);
}
