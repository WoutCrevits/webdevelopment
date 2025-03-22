const setup = () => {
    let pElements = document.querySelectorAll('p')
    for (let element of pElements) {
        element.textContent = 'Good Job!'
    }
}

window.addEventListener('load', setup);