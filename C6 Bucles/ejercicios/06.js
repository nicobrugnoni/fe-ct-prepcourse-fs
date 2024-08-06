function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  const numStr = Math.abs(num).toString();
  
  return numStr.length === 3;
}

module.exports = tieneTresDigitos;
