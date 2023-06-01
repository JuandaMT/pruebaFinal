let numeroDado = prompt("Introduce un numero");
let numero = parseInt(numeroDado)
let numeroLimite = numero + 50;

for(let i = numeroDado; i <= numeroLimite; i++){
    if(i%2 !== 0){
        console.log(i);
    }
}