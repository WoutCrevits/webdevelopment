const setup = () => {
    let buttons = document.getElementsByClassName("btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", pressed);
    }
}

const pressed = (e) => {
    let clickedButton = e.currentTarget;
    clickedButton.classList.toggle("colored");
}

window.addEventListener('load', setup);