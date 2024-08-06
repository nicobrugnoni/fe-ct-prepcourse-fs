function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  const nuevoString = string.split(' ').join('').toLowerCase();
  
  const reversedString = nuevoString.split('').reverse().join('');
  
  return nuevoString === reversedString;
}

module.exports = esPalindromo;