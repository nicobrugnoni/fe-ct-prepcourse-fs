function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   const limpiarString = str => str.replace(/\s+/g, '').toLowerCase();

   str1 = limpiarString(str1);

   str2 = limpiarString(str2);
   
   if (str1.length !== str2.length) {
      return false;
   }

   const ordenarCaracteres = str => str.split('').sort().join('');

   return ordenarCaracteres(str1) === ordenarCaracteres(str2);
}

module.exports = esAnagrama;
