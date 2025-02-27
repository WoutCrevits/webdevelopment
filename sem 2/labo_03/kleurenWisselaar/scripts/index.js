const setup = () => {
    let buttons = document.getElementsByClassName("btn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", pressed);
    }
}

const pressed = (e) => {
    let clickedButton = e.currentTarget;
    if (clickedButton.className === "btn not_colored") {
        clickedButton.classList.replace("not_colored", "colored");
        clickedButton.style.backgroundColor = "lightblue";
    }
    else {
        clickedButton.classList.replace("colored", "not_colored");
        clickedButton.classList.remove("colored");
        clickedButton.style.backgroundColor = "white";
    }
}

window.addEventListener('load', setup);