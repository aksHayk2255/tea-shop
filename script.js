/* ==========================
   AUDIO ELEMENTS
========================== */

const music = document.getElementById("music");
const ambience = document.getElementById("ambience");
const rainAudio = document.getElementById("rainAudio");

/* ==========================
   SONGS
========================== */

const songs = [
    "assets/audio1.mp3",
    "assets/audio2.mp3",
    "assets/audio3.mp3"
];

/* ==========================
   CONTROLS
========================== */

const musicSlider =
document.getElementById("musicSlider");

const ambienceSlider =
document.getElementById("ambienceSlider");

const rainSlider =
document.getElementById("rainSlider");

const playPauseBtn =
document.getElementById("playPauseBtn");

/* ==========================
   STATE
========================== */

let playing = false;

/* ==========================
   RANDOM SONG
========================== */

function loadRandomSong(){

    const randomSong =
    Math.floor(
        Math.random() * songs.length
    );

    music.src = songs[randomSong];

    music.loop = true;
}

/* ==========================
   VOLUME CONTROL
========================== */

function updateVolumes(){

    music.volume =
    musicSlider.value / 100;

    ambience.volume =
    ambienceSlider.value / 100;

    rainAudio.volume =
    rainSlider.value / 100;

}

updateVolumes();

musicSlider.addEventListener(
    "input",
    updateVolumes
);

ambienceSlider.addEventListener(
    "input",
    updateVolumes
);

rainSlider.addEventListener(
    "input",
    updateVolumes
);

/* ==========================
   PLAY / PAUSE
========================== */

playPauseBtn.addEventListener(
    "click",
    ()=>{

        if(!playing){

            loadRandomSong();

            music.play();
            ambience.play();
            rainAudio.play();

            playPauseBtn.innerHTML =
            "⏸ Leave Tea Shop";

            playing = true;

        }else{

            music.pause();
            ambience.pause();
            rainAudio.pause();

            music.currentTime = 0;

            playPauseBtn.innerHTML =
            "▶ Enter Tea Shop";

            playing = false;
        }

    }
);

/* ==========================
   RAIN EFFECT
========================== */

const rainContainer =
document.querySelector(".rain");

for(let i = 0; i < 150; i++){

    const drop =
    document.createElement("div");

    drop.classList.add("drop");

    drop.style.left =
    Math.random() * 100 + "vw";

    drop.style.animationDuration =
    (Math.random() * 1 + 0.5) + "s";

    drop.style.opacity =
    Math.random();

    rainContainer.appendChild(drop);
}

/* ==========================
   LIGHTNING EFFECT
========================== */

function lightning(){

    document.body.classList.add(
        "flash"
    );

    setTimeout(()=>{

        document.body.classList.remove(
            "flash"
        );

    },250);

    const next =
    Math.random() * 25000 + 15000;

    setTimeout(
        lightning,
        next
    );

}

setTimeout(
    lightning,
    10000
);