// TIENDA PARA DIETETICA 
// Buscador de producto
// Precio

alert('Bienvenido a Los Sauces Dietetica')

alert('Los siguiente productos estan disponibles para consultar precio: avena, arroz, almendras, tofu, burganas, ninas, hummus, tatrenfu')

// const productoSeleccionado = prompt('Ingrese el producto que desea comprar')
// if (productoSeleccionado === 'Avena') {
//     console.log('El precio de la Avena es de $880 x Kg')
// }   else if (productoSeleccionado === 'Arroz') {  
//     console.log('El precio del Arroz es de $500 x Kg')
// }   else if (productoSeleccionado === 'Almendras') {
//     console.log('El precio de las Almendras es de $710 x 100gr')
// }   else if (productoSeleccionado === 'Tofu') {
//     console.log('El precio del Tofu es de $990 x Unidad')
// }   else if (productoSeleccionado === 'Burganas') {
//     console.log('El precio de las Burganas es de $990 x Unidad')
// }   else if (productoSeleccionado === 'Ninas') {
//     console.log('El precio de las Nunas es de $1080 x Unidad')
// }   else if (productoSeleccionado === 'Hummus') {
//     console.log('El precio del Hummus es de $750 x Unidad')
// }   else if (productoSeleccionado === 'Tatrenfu') {
//     console.log('El precio del Tatrenfu es de $1030 x Unidad')
// }   else {
//     console.log('El producto ingresado se encuentra sin Stock momentaneamente')
// }

// EL CODIGO COMENTADO ES EL PRIMER INTENTO, EL SIGUIENTE INTENTO ES MAS PROLIJO E UTIL

const productosDisponibles = {
    avena : 880,
    arroz : 500,
    almendras : 710,
    tofu : 990,
    burganas : 990,
    ninas : 1080,
    hummus : 750,
    tatrenfu : 1030
}

function precio(nombreProducto) {
    if (nombreProducto in productosDisponibles) {
        console.log(`${nombreProducto} = $${productosDisponibles[nombreProducto]}`);
    } else {
        console.log('Producto momentaneamente sin Stock');
    }
}

while(true) {
    const productoBuscado = prompt('Ingrese el producto a consultar, o ingrese "salir" para terminar el programa');
    if (productoBuscado === 'salir') {
        break;
    }
    precio(productoBuscado)
}
