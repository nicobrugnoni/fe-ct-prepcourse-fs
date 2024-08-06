function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  const buscadorMeses = ['Enero', 'Marzo', 'Noviembre'];

  const mesesEncontrados = [];

  for (let mes of array) {
    if (buscadorMeses.includes(mes)) {
      mesesEncontrados.push(mes);
    }
  }

  if (buscadorMeses.every(mes => mesesEncontrados.includes(mes))) {
    return mesesEncontrados;
  } 
  else {
    return 'No se encontraron los meses pedidos';
  }
}

module.exports = mesesDelAño;
