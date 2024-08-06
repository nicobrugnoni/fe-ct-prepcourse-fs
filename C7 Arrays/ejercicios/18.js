function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  const suma = resultadosTest.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
  
  const promedio = suma / resultadosTest.length;

  return promedio;
}

module.exports = promedioResultadosTest;
