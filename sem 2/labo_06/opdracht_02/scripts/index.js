const setup = () => {
    let allLi = document.querySelectorAll('li');

    for (let element of allLi) {
        element.classList.add('listitem');
    }
    let style = document.createElement('style');
    style.textContent = '.listitem { color: red; }';
    document.head.appendChild(style);

    let image = document.createElement("img");
    image.setAttribute("alt", "Foto van mij.");
    image.setAttribute("src", "images/pic_of_me.png");
    document.body.appendChild(image);
}

window.addEventListener('load', setup);