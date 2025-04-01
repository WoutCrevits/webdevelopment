let personen = [];
const bewaarBewerktePersoon = () => {

    valideer();

    if (document.getElementsByClassName("invalid").length === 0) {
        let persoon = {
            voornaam: document.getElementById("txtVoornaam").value,
            familienaam: document.getElementById("txtFamilienaam").value,
            geboortedatum: document.getElementById("txtGeboorteDatum").value,
            email: document.getElementById("txtEmail").value,
            aantalKinderen: document.getElementById("txtAantalKinderen").value
        }
        personen.push(persoon);
    }
    let lstPersonen = document.getElementById("lstPersonen");
    let option = document.createElement("option");
    option.text = personen[personen.length - 1]["voornaam"] + " " + personen[personen.length - 1]["familienaam"];
    lstPersonen.appendChild(option);
};

const bewerkNieuwePersoon = () => {
    let fieldIds=["txtVoornaam", "txtFamilienaam", "txtGeboorteDatum", "txtEmail", "txtAantalKinderen"];
    for (let i = 0; i < fieldIds.length; i++) {
        clearField(document.getElementById(fieldIds[i]));
    }
};

const clearField = (element) => {
    clearError(element);
    element.value = "";
};

const bewerkPersoon = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    let persoon = lstPersonen.value;

    let txtVoornaam = document.getElementById("txtVoornaam");
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let txtGeboortedatum = document.getElementById("txtGeboorteDatum");
    let txtEmail = document.getElementById("txtEmail");
    let txtAantalKinderen = document.getElementById("txtAantalKinderen");

    txtVoornaam.value = persoon["voornaam"];
    txtFamilienaam.value = persoon["familienaam"];
    txtGeboortedatum.value = persoon["geboortedatum"];
    txtEmail.value = persoon["email"];
    txtAantalKinderen.value = persoon["aantalKinderen"];
}

const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", bewerkPersoon);
};

window.addEventListener("load", setup);