const setup = () => {
    let prog1 = document.getElementById("prog1");
    let prog2 = document.getElementById("prog2");
    prog1.addEventListener("click", program_1);
    prog2.addEventListener("click", program_2);
}

const program_1 = () => {
    let student1 = {
        voornaam : "Wout",
        familienaam : "Crevits",
        geboorteDatum : new Date("2005-5-7"),
        geboortePlaats: "Roeselare",
        adres : {
            straat: "Huppeldepupstraat",
            nummer: "14",
            gemeente: "Kortrijk",
            postcode: "8500"
        }
    }

    console.log(JSON.stringify(student1));
}

const program_2 = () => {
    // Object met gekopieerde JSON
    let student1 = {"voornaam":"Wout","familienaam":"Crevits","geboorteDatum":"2005-05-06T22:00:00.000Z","geboortePlaats":"Roeselare",
        "adres":{"straat":"Huppeldepupstraat","nummer":"14","gemeente":"Kortrijk","postcode":"8500"}};

    console.log(student1.adres["straat"]);
}

// Vraag 1: Het ISO formaat wordt bij een date gebruikt
// Vraag 2: Dat kan niet

window.addEventListener('load', setup);