function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if (a > b) {
    return 0;
  }
  
  const arrayNumeros = [];
  for (let i = a; i <= b; i++) {
    arrayNumeros.push(i);
  }

  const producto = arrayNumeros.reduce((accum, value) => accum * value, 1);
  
  return producto === -0 ? 0 : producto;
  }
  
module.exports = productoEntreNúmeros;