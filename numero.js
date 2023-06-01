/* PASOS
1-PREGUNTAR AL USUARIO EL NUM
2-CONVERTIR SU RESPUESTA A NUMERO Y ASIGNÁRSELO A UNA VARIABLE
3-A ESE NUMERO SUMARLE 50 Y ASIGNAR SU VALOR A UNA VARIABLE
4-CREAR UN BUCLE QUE VAYA DESDE EL NUMERO INGRESADO HASTA EL NUMERO MAS 50 
5-CREAR UN CONDICIONAL QUE DETERMINE LOS IMPARES, SI EL RESTO ES DISTINTO DE 0 ES UN IMPAR
6-IMPRIMIR EL RESULTADO*/

let numeroDado = prompt("Introduce un numero");
let numero = parseInt(numeroDado)
let numeroLimite = numero + 50;

for(let i = numeroDado; i <= numeroLimite; i++){
    if(i%2 !== 0){
        console.log(i);
        document.write(i);
    }
}