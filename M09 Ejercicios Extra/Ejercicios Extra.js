/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let arreglo =[];
   let resultado = [];
   Object.keys(objeto).forEach(key => {
      
      //console.log(key, ':', obj[key])
      arreglo = [key, objeto[key]];
      //console.log(arreglo),
      resultado.push(arreglo);

      });
      //console.log(arreglo);

      return resultado;


}

//var obj = {D: 1, B: 2, C: 3};

//console.log(deObjetoAarray(obj));

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var arreglo= string.split('');
   var contador =0;
   var res=[];
   arreglo.sort();
   
   var objeto={};
   for (let i = 0; i < arreglo.length; i++) {
      var letra = arreglo[i];
      
      for (let j = 0; j < arreglo.length; j++) {

         if(arreglo[j]==letra){
            contador = contador + 1;
         }
         
      }
      //res.push(letra + ': ' +contador);
      objeto[letra] = contador;
      contador =0;
      
   }

   return objeto;
}


function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var arreglo = string.split('');
   console.log(arreglo);
   var primero=[];
   var segundo =[];
   var resultado=[];
   var get_words = arreglo.map(cur => {
      
      //return /[A-Z]/.test(cur) ? cur : "";
      if(/[A-Z]/.test(cur)){
         primero.push(cur);
         //return cur;
      }else{
         segundo.push(cur);
      }

      });
      for ( i in primero) {
         resultado.push(primero[i]);
      }
      
      for ( e in segundo) {
         resultado.push(segundo[e]);
      }

     return resultado.join('');

}
//console.log(capToFront('uuuUUUiIIUuuu'))

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var arreg = frase.split('');
   console.log(arreg);
   var palabra = "";
   var resultado = "";
   arreg.forEach(elem=>{
      console.log(elem);
      if(elem!=' '){
         palabra = palabra + '' + elem;
      }else{
         var pal =palabra.split("").reverse().join("");
         console.log(pal);
         resultado =  pal + " " + resultado;
         palabra = "";
      }
      
   });
   return resultado;

}
console.log(asAmirror('El Gran Escalon Azul Viejo'));

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var num = numero.toString();
   var n = num.split("").reverse().join("");
   if (num==n){
      return "Es capicua";

   }else{
      return "No es capicua";
   }

}


function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var arr = string.split('');
   console.log(arr);
   const resultado = arr.filter(letra => letra != 'a' && letra != 'b' && letra != 'c');
   return resultado.join('');



}
// console.log('hagghsgga hhgb sgsgsgchshs');
// console.log(deleteAbc('hagghsgga hhgb sgsgsgchshs'));

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var aux='';
   for (let i = 0; i < arrayOfStrings.length; i++) {
      for (let j = i+1; j < arrayOfStrings.length; j++) {

         if(arrayOfStrings[i].length>arrayOfStrings[j].length){
            aux = arrayOfStrings[j];
            arrayOfStrings[j]=arrayOfStrings[i];
            arrayOfStrings[i]=aux;

         }
      
      
      }
      
   }
   return arrayOfStrings;

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let arreglo = [];
   for (let i = 0; i < array1.length; i++) {

      for (let j = 0; j < array2.length; j++) {

         if(array1[i]===array2[j]){
            arreglo.push(array1[i]);
         }

      }
   }
   return arreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
