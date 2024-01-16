// "La función calcularPrecio() debe:
// 1. Aplicar 10% de descuento a productos de categoría 'A'  
// 2. Aplicar 10% de descuento a productos de categoría 'B'

function calcularPrecio(producto) {

    if (producto.categoria == 'A') {
      return producto.precio - (producto.precio * 0.1);
    }
  
    if (producto.categoria == 'B') {
      return producto.precio - (producto.precio * 0.05); 
    }
  
  }

let productoA = { precio: 100, categoria: 'A' };
let productoB = { precio: 100, categoria: 'B' };

console.log(calcularPrecio(productoA));
console.log(calcularPrecio(productoB));