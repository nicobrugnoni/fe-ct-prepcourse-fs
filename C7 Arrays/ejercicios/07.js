function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  if (array.length === 0) {
    return array;
  }
  
  if (typeof array[0] === 'number') {
    return array.sort((a, b) => a - b);
  } else if (typeof array[0] === 'string') {
    return array.sort();
  }
  
  return array;
}

module.exports = ordenarArray;
