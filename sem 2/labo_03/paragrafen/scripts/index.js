const setup = () => {
    let pElements = document.getElementsByClassName("belangrijk");
    for (let i = 0; i < pElements.length; i++) {
        pElements[i].className = 'belangrijk opvallend'
    }
}

window.addEventListener('load', setup);