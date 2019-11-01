
const firkant = document.querySelector("#firkant");

const snurrSettings = {
    duration: 4000,
    iterations: Infinity,
    easing: "linear"
}

const snurrKeyframes = [
    { transform: "rotate(0)" },
    { transform: "rotate(1turn)" }
];


const snurr = firkant.animate(snurrKeyframes, snurrSettings);

document.onclick = () => {
    snurr.reverse();

}