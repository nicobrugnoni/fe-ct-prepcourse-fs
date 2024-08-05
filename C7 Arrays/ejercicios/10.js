function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for (const StringLargo of array){
    if (StringLargo.length > 5){
      return StringLargo
    }
  }
  return null;
  }

module.exports = obtenerPrimerStringLargo;
