function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  const duplicados = [];
  for (const duplo of array){
    duplicados.push(duplo * 2);
  }
  return duplicados;
}

module.exports = duplicarElementos;
