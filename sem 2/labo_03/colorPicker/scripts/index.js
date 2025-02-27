const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
}

const update = () => {
    let colorDiv = document.getElementById("color");
    let sliders = document.getElementsByClassName("slider");
    let pElements = document.getElementsByTagName("p");
    console.log(pElements);
    colorDiv.style.backgroundColor = "rgb(" + sliders[0].value + ", " + sliders[1].value + ", " + sliders[2].value + ")";
    for (let i = 0; i < pElements.length; i++) {
        let printString = "";
        if (pElements[i].classList.contains("red")) {
            printString += "Red ";
        }
        else if (pElements[i].classList.contains("green")) {
            printString += "Green ";
        }
        else {
            printString += "Blue "
        }
        pElements[i].textContent = printString + sliders[i].value;
        console.log(sliders[i].value);
    }
}

window.addEventListener('load', setup);