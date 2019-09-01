function giveRandomColor(element) {
    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;
    element.style.setProperty('background-color', `rgb(${red}, ${green}, ${blue})`)
}

function randomizer() {
    let elements = document.querySelectorAll('body, body *');
    for (let element of elements) {
        giveRandomColor(element);
    }
}

setInterval(function() {
    randomizer();
}, 100);