const setup = () => {
    let text = "De man van An geeft geen hand aan ambetante verwanten";
    let searchTerm = "an";
    let count = 0;
    let position = text.indexOf(searchTerm);

    //IndexOf
    while (position !== -1) {
        count++;
        position = text.indexOf(searchTerm, position + 1);
    }
    console.log(`indexOf: ${count}`);

    let count2 = 0;
    let position2 = text.lastIndexOf(searchTerm);

    //lastIndexOf
    while (position2 !== -1) {
        count2++;
        position2 = text.lastIndexOf(searchTerm, position2 - 1);
    }
    console.log(`lastIndexOf: ${count2}`);
};

window.addEventListener("load", setup);