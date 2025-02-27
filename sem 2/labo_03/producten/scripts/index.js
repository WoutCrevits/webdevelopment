const setup = () => {
    let btn_herbereken = document.getElementById("btn_herbereken")
    btn_herbereken.addEventListener("click", clicked)
}

const clicked = () => {
    let prijzen = document.getElementsByClassName("prijs");
    let aantallen = document.getElementsByClassName("invoer");
    let btws = document.getElementsByClassName("btw");
    let subtotalen = document.getElementsByClassName("subtotaal");
    let sum = 0;

    for (let i = 0; i < prijzen.length; i++) {
        let prijs = prijzen[i];
        let aantal = aantallen[i];
        let btw = btws[i];
        let subtotaal = subtotalen[i];
        let calculation = parseFloat(prijs.textContent) * ((parseFloat(btw.textContent) / 100) + 1) * aantal.value;
        sum += calculation;
        subtotaal.textContent = calculation.toFixed(2) + " Eur";
    }

    document.getElementById("totaal").textContent = sum.toFixed(2)  + " Eur"
}

window.addEventListener('load', setup);