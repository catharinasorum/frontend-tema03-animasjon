const bilde = document.querySelector("#bilde");

const bilder = [
    "./img/london.jpg",
    "./img/london02.jpg",
    "./img/covent-garden.jpg"
];

let indeks = 1;

function byttBilde (evt) {
    const nyttBilde = bilder[indeks];
    bilde.src = nyttBilde;

    indeks++;
    if(indeks >= bilder.length) {
        indeks = 0;
    }
}


bilde.addEventListener("animationiteration", byttBilde);