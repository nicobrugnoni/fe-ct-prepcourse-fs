function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  const vistos = new Set();
  
  for (const numero of numeros) {
    if (vistos.has(numero)) {
      return numero;
    }
    vistos.add(numero);
  }
  
  return undefined;
}

module.exports = encontrarElementoRepetido;