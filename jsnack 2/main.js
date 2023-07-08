/*
    Snack2 Crea un array di numeri interi
    e fai la somma di tutti gli elementi che sono in posizione dispari. 
*/

// const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// for (let i = 0; i < numbers.lenght; i++) {
//     let singleNumber = numbers[i];
//     numbers.indexOf(10);

//     console.log();
// }

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let sommaDispari = 0; 

for (let i = 0; i < numbers.length; i++) {
    if (i % 2 !== 0) {
        sommaDispari += numbers[i];
    }
}

console.log(sommaDispari);