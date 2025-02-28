const setup = () => {
    let btn = document.getElementById("btn");

    btn.addEventListener("click", clicked);
}

const clicked = () => {
    let textVak = document.getElementById("textVak");

    console.log(textVak.value.split(" ").join("").split("").join(" "));
}

window.addEventListener('load', setup);