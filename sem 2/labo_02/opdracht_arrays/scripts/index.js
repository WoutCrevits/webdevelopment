const setup = () => {
    // Deze code wordt pas uitgevoerd als de pagina volledig is ingeladen.
    let namen = ['Evelyne', 'Domien', 'Wout', 'Xander', 'Nanour'];

    //Opdracht 1
    console.log("Opdracht 1");
    console.log(namen.length);

    //Opdracht 2
    console.log("Opdracht 2");
    console.log(namen[0] + " " + namen[2] + " " + namen[4]);

    //Opdracht 3
    console.log("Opdracht 3");
    let voegNaamToe = (namenAlt) => {
        let naam = prompt("Geef een naam: ");
        namenAlt.push(naam);
        return namenAlt;
    }
    let result = voegNaamToe(namen);
    console.log(result);

    //Opdracht 4
    console.log("Opdracht 4");
    console.log(namen.join(" "));
}

window.addEventListener('load', setup);