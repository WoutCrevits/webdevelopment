let personen = [];
let currentPersonIndex = -1;  // To track which person is being edited

const bewaarBewerktePersoon = () => {
    valideer(); // Validate the form inputs
    let persoon;
    if (document.getElementsByClassName("invalid").length === 0) {
        persoon = {
            voornaam: document.getElementById("txtVoornaam").value,
            familienaam: document.getElementById("txtFamilienaam").value,
            geboortedatum: document.getElementById("txtGeboorteDatum").value,
            email: document.getElementById("txtEmail").value,
            aantalKinderen: document.getElementById("txtAantalKinderen").value
        };

        if (currentPersonIndex === -1) {
            // If no person is selected, add a new one
            personen.push(persoon);
        } else {
            // If editing an existing person, overwrite their data
            personen[currentPersonIndex] = persoon;
        }

        // Update the list display
        updatePersonList();
    }
};

const updatePersonList = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.innerHTML = '';  // Clear the list before re-adding the updated options

    // Recreate the options based on the personen array
    for (let i = 0; i < personen.length; i++) {
        let option = document.createElement("option");
        option.text = personen[i].voornaam + " " + personen[i].familienaam;
        option.value = i;  // Store the index as the value to identify the person
        lstPersonen.appendChild(option);
    }

    // Reset the form fields after saving
    clearForm();
};

const bewerkNieuwePersoon = () => {
    // Clear the form and reset the currentPersonIndex
    currentPersonIndex = -1;
    let fieldIds = ["txtVoornaam", "txtFamilienaam", "txtGeboorteDatum", "txtEmail", "txtAantalKinderen"];
    for (let i = 0; i < fieldIds.length; i++) {
        clearField(document.getElementById(fieldIds[i]));
    }
};

const clearField = (element) => {
    clearError(element);
    element.value = "";
};

const clearForm = () => {
    let fieldIds = ["txtVoornaam", "txtFamilienaam", "txtGeboorteDatum", "txtEmail", "txtAantalKinderen"];
    for (let i = 0; i < fieldIds.length; i++) {
        clearField(document.getElementById(fieldIds[i]));
    }
};

const bewerkPersoon = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    let persoonIndex = lstPersonen.selectedIndex;

    // If a valid selection is made, populate the form
    if (persoonIndex !== -1) {
        let persoon = personen[persoonIndex];
        currentPersonIndex = persoonIndex;  // Track the index of the person being edited

        let txtVoornaam = document.getElementById("txtVoornaam");
        let txtFamilienaam = document.getElementById("txtFamilienaam");
        let txtGeboortedatum = document.getElementById("txtGeboorteDatum");
        let txtEmail = document.getElementById("txtEmail");
        let txtAantalKinderen = document.getElementById("txtAantalKinderen");

        // Populate the form with the selected person's data
        txtVoornaam.value = persoon.voornaam;
        txtFamilienaam.value = persoon.familienaam;
        txtGeboortedatum.value = persoon.geboortedatum;
        txtEmail.value = persoon.email;
        txtAantalKinderen.value = persoon.aantalKinderen;
    }
};

const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", bewerkPersoon);
};

window.addEventListener("load", setup);
