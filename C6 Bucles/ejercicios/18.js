function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
    const arrayNumeros = [];
    for (let i = a; i <= b; i++) {
      arrayNumeros.push(i);
    }
  
    return arrayNumeros.reduce((accum, value) => accum * value, 1);
  }
  
module.exports = productoEntreNúmeros;