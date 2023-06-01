/* PASOS
1-PEDIR AL USUARIO UNA PALABRA
2-PEDIR AL USUARIO UNA LETRA
3-CONVERTIR LA PALABRA EN UNA ARRAY DE LETRAS
4-CREAR UNA VARIABLE CONTADOR Y ASIGNARLE EL VALOR 0
5-CREAR UN BUCLE QUE RECORRA LA ARRAY DE LETRAS
6-CREAR UN CONDICIONAL: SI LA LETRA RECORRIDA ES IGUAL A LA LETRA INDICADA SUMAR UNO AL CONTADOR
 */

let frase = prompt("Escribe una palabra");
frase.split("");


const letraRepetida = prompt("Escribe una letra");
let contador = 0;

for(letra of frase){
    if(letra === letraRepetida){
        contador++
    }
}
console.log(contador)
document.write(contador)