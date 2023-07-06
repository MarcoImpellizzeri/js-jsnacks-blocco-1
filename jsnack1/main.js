
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

for (let i = 0; i < 10; i++) {
    // creo una costante che riesca a prendere un nome casuale dall'array "nameList"
    // const randomNameI = Math.floor(Math.random() * nameList.length);
    // const randomName = nameList[randomNameI];
    // posso abbreviare le righe di sopra e scriverle in questo modo
    const randomName = nameList[Math.floor(Math.random() * nameList.length)];

    // creo una costante che riesca a prendere un nome casuale dall'array "lastNameList"
    // const randomlastNameI = Math.floor(Math.random() * lastNameList.length);
    // const randomLastName = lastNameList[randomlastNameI];
    // posso abbreviare le righe di sopra e scriverle in questo modo
    const randomLastName = lastNameList[Math.floor(Math.random() * lastNameList.length)];

    let randomCompleteName = `${randomName} ${randomLastName}`;

    randomNameList.push(randomCompleteName);
}

console.log(randomNameList)

// considerazioni
/*
    ho capito che bisogna inserire all'interno del for queste variabili

    const randomName = nameList[Math.floor(Math.random() * nameList.length)];
    const randomLastName = lastNameList[Math.floor(Math.random() * lastNameList.length)];
    let randomCompleteName = `${randomName} ${randomLastName}`;

    perche se le tengo all'esterno mi crea un nome completo soltato una volta e non 10 come io vorrei
*/