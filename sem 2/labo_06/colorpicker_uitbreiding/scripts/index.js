const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
    let saveButton = document.getElementById("saveButton");
    saveButton.addEventListener("click", save);
}

const printColor = (r, g, b) => {
    let colorDiv = document.getElementById("color");
    let pElements = document.getElementsByTagName("p");
    colorDiv.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")";
    pElements[0].textContent = "Red" + "\t" + r;
    pElements[1].textContent = "Green" + "\t" + g;
    pElements[2].textContent = "Blue" + "\t" + b;
}

const update = () => {
    let sliders = document.getElementsByClassName("slider");
    printColor(sliders[0].value, sliders[1].value, sliders[2].value);
}

const save = () =>{
    console.log("saved");
    let createdDIV = document.createElement("div");
    let saves = document.getElementById("saves");
    let sliders = document.getElementsByClassName("slider");

    createdDIV.className = "savedColor";
    createdDIV.style.backgroundColor="rgb(" + sliders[0].value + "," + sliders[1].value +"," +sliders[2].value + ")";
    saves.appendChild(createdDIV);

    const createdBtn = document.createElement("button");
    createdBtn.innerHTML = "&#10008";
    createdBtn.className = "button";
    createdDIV.appendChild(createdBtn);

    createdBtn.addEventListener("click", removeButton);
    createdDIV.addEventListener("click", setColor);
}

const removeButton = (event) =>{
    event.stopPropagation();
    event.target.parentElement.remove();
}

const setColor = (event) =>{
    let sliders =document.getElementsByClassName("slider");
    let color = document.getElementById("color");
    color.style.backgroundColor = event.target.style.backgroundColor;
    let value = event.target.style.backgroundColor.replace("rgb(","").replace(")","");
    let values = value.split(",");
    for(let i = 0; i < values.length; i++){
        values[i] = parseInt(values[i].trim());
    }

    sliders[0].value = values[0];
    sliders[1].value = values[1];
    sliders[2].value = values[2];

}

window.addEventListener('load', setup);