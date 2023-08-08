// TIENDA PARA DIETETICA 
//DASHBOARD ADMIN PARA INGRESAR PRODUCTOS
//LISTA DE PRODUCTOS (CON TODAS SUS CARACTERISTICAS)
//BUSCADOR DE PRODUCTOS
//CARRITO DE COMPRA Y PEDIDO (SE ENVIA A WHATSAPP)

alert('Bienvenido a Los Sauces Dietetica')

// PRODUCTOS DISPONIBLES
// const productosDisponibles = [];

//     avena : 880;
//     arroz : 500;
//     almendras : 710;
//     tofu : 990;
//     burganas : 990;
//     ninas : 1080;
//     hummus : 750;
//     tatrenfu : 1030;


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
let encontrado = false;

for (const producto of listaProductos) {
    if (producto.nombre === buscarProducto) {
        console.log (`El precio del producto "${producto.nombre}" es $${producto.precio}`);
        encontrado = true;
        break;
    }
}

if (!encontrado) {
    console.log(`No hay stock del producto consultado`);
}
