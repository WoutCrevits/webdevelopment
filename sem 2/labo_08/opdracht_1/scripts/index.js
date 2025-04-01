const setup = () => {
    let btn = document.getElementById("bereken");
    btn.addEventListener("click", pressed);
}

const pressed = () => {
    let currentDate = new Date();
    let birthDay = new Date(2005, 4, 7);
    console.log(Math.floor((currentDate - birthDay) / 1000 / (24 * 3600)));
    // Delen door duizend om in seconden te zetten
    // Dan delen door 24 * 3600 omdat er 3600 seconden in een uur zijn en 24 uren in een dag
}

window.addEventListener('load', setup);