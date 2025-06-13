// variable

const bird = document.querySelector(".bird");
const bird2 = document.querySelector(".bird-2");
let counterElement = document.querySelector("#count");
let gameEnd = document.querySelector("#game-over");
let mp3 = document.querySelector("audio");
// let RangeBird = document.querySelector(".Range");

// ------------------
let left = 0;
let right = 0;
let timer = 0;
let bottom = 0;
let count = 0;
let isPause = false;
let gamefinish = false;
let currentDirection = null;
let speed = 10;
let audioSpeed = 1.0;
// -------------------
// event
window.addEventListener("load", () => {
  randomImage();
  positionBird();
  mp3.playbackRate = audioSpeed;
});

bird2.addEventListener("click", (e) => {
  changeAudioSpeed(6);
  mp3.play();
  kill();
});

document.querySelector("#reset").addEventListener("click", () => {
  location.reload();
});

document.getElementById("stop").addEventListener("click", pause);
