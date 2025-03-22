const setup = () => {
    let myDIV = document.getElementById("myDIV");
    myDIV.addEventListener("click", clicked);
}

const clicked = () => {
    let myDIV = document.getElementById("myDIV");
    let pElement = document.createElement("p");
    pElement.textContent = "This is a p element with some text!";
    myDIV.appendChild(pElement);
}

window.addEventListener('load', setup);