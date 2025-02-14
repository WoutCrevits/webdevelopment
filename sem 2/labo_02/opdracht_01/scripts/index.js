const setup = () => {
    // Deze code wordt pas uitgevoerd als de pagina volledig is ingeladen.
    let waardeAlert = window.alert("Dit is een mededeling");
    let waardeConfirm = window.confirm("Weet u het zeker?");
    let waardePrompt = window.prompt("Wat is uw naam", "onbekend")
    console.log(waardePrompt);
    // De return value is true van de confirm functie
    // De return value is de ingegeven waarde
    // De return value is null
}

window.addEventListener('load', setup);