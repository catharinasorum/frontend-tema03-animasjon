
const stjerne = document.querySelector("#stjerne");

const lengde = stjerne.getTotalLength();

stjerne.style.strokeDasharray = lengde;
stjerne.style.strokeDashoffset = lengde;


/* Lager keyframes, husk å få med start og slutt */ 
const keyframes = [
    { strokeDashoffset: lengde },
    { strokeDashoffset: 0 }
];

/* "stylingen" av stjernen. Hvor lang tid den skal bruke */
const settings = {
    duration: 4000,
    fill: "forwards"
};

const strektegning = stjerne.animate(keyframes, settings);