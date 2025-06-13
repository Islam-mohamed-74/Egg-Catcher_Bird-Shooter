// variables

let egg = document.querySelector(".chicken");
let lose = document.querySelector(".lose");
let gameEnd = document.querySelector("#game-over");
let countElement = document.querySelector("h1");
// let reset = document.querySelector("#reset");

// ----------------------------
let right = 0;
let left = 0;
let bottem = 0;
let count = 0;
let move = 0;
let speed = 15;
let isGameOver = false;
let isPause = false;
let basket = document.querySelector(".basket");
// ----------------------------

// event

window.addEventListener("load", () => {
  positionEgg();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" && right < 400) {
    right += 20;
    left += 20;
    basket.style.left = right + "px";
  }
  if (event.key === "ArrowLeft" && left > 0) {
    left -= 20;
    right -= 20;
    basket.style.left = left + "px";
  }
});

document.querySelector("#reset").addEventListener("click", () => {
  location.reload();
});

document.getElementById("stop").addEventListener("click", pause);
