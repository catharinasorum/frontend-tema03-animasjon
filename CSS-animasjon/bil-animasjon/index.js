const bil = document.querySelector("#bil");
const btnWhite = document.querySelector("#btnWhite");
const btnRed = document.querySelector("#btnRed");


btnWhite.onclick = () => {
    bil.style.backgroundImage = `url("./img/white-car.png")`;
}


btnRed.onclick = () => {
    bil.style.backgroundImage = `url("./img/red-car.png")`;
}
