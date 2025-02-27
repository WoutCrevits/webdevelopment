const setup = () => {
    let button = document.getElementById("btnSubstring");
    button.addEventListener("click", subString);
}

const subString = () => {
    let txtInput = document.getElementById("txtInput");
    let startNumber = document.getElementById("numberStart");
    let endNumber = document.getElementById("numberEnd");
    let pElement = document.getElementById("txtOutput");

    //let g1 = parseInt(startNumber.value, 10);
    //let g2 = parseInt(endNumber.value, 10);
    txtInput = txtInput.value.toString();
    pElement.innerHTML=txtInput.substring(startNumber.value, endNumber.value);
}

window.addEventListener('load', setup);