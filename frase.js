/* pedir al usuario una palabra
pedir al usuario la letra a buscar

crear variable que sea contador
crear un bucle que vaya de inicio a fin de la palabra
crear condicional. Si la letra está contenida en la palabra que sume al contador
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