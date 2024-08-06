function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  if (!Array.isArray(array)) {
    throw new TypeError('El argumento debe ser un array');
  }

  for (const item of array) {
    if (typeof item === 'string' && item.length >= 5) {
      return item;
    }
  }
  return undefined;
  }

module.exports = obtenerPrimerStringLargo;
