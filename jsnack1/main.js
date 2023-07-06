
/* 
Snack1
Generatore di “nomi cognomi” casuali:
il Grande Gatsby ha una lista di nomi e una lista di cognomi, 
e da queste vuole generare una falsa lista di invitati
con nome e cognome. 
*/

// creo una lista di nomi con un array 
const nameList = ["marco", "vanessa", "mario", "samuele", "luca", "paolo", "lino"];

// creo una lista di cognomi con un array 
const lastNameList = ["rossi", "verdi", "bianchi", "banfi", "ferrari", "moretti", "greco"];

// lista vuota dove dovrebbero essere creati i nomi casuali dati dai nomi e cognomi
const randomNameList = [];

// creo una costante che riesca a prendere un nome casuale dall'array "nameList"
const randomNameI = Math.floor(Math.random() * nameList.length);
const randomName = nameList[randomNameI];

// creo una costante che riesca a prendere un nome casuale dall'array "lastNameList"
const randomlastNameI = Math.floor(Math.random() * lastNameList.length);
const randomLastName = lastNameList[randomlastNameI];

let randomCompleteName = `${randomName} ${randomLastName}`;

console.log(randomCompleteName);



