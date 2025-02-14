const setup = () => {
    // Deze code wordt pas uitgevoerd als de pagina volledig is ingeladen.
    let btn =document.getElementById("btn");
    btn.addEventListener("click", changeText)
}

const changeText = () => {
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}

window.addEventListener('load', setup);