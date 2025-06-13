// function

const positionEgg = () => {
  if (isPause || isGameOver) return;

  setTimeout(() => {
    lose.style.display = "none";
  }, 2300);
  egg.style.display = "block";
  egg.style.left = Math.floor(Math.random() * 400) + "px";

  startTop();
};
const startTop = () => {
  if (isPause || isGameOver) return;

  move += 2;
  egg.style.top = move + "px";
  Repeat();
  gameOver();
};

const Repeat = () => {
  if (isPause || isGameOver) return;
  let translateX = egg.style.left;
  let timer = setTimeout(startTop, speed);
  if (move == 300) {
    // console.log(Math.abs(parseInt(translateX) - right));
    if (Math.abs(parseInt(translateX) - right) < 50) {
      count++;
      countElement.innerHTML = `count: ${count}`;
      clearTimeout(timer);
      egg.style.display = "none";
      move = 0;
      positionEgg();
    } else {
      console.log("you lose");
      count--;
      countElement.innerHTML = `count: ${count}`;
      move = 0;
      lose.style.top = 350 + "px";
      lose.style.left = egg.style.left;
      setTimeout(() => {
        lose.style.display = "block";
        positionEgg();
      }, 30);
      clearTimeout(timer);
    }
  }
};

const gameOver = () => {
  switch (count) {
    case -5:
      gameEnd.innerHTML = "<span style='color:red'> You Lose 😭  </span> --";
      egg.style.left = 0;
      egg.style.top = 0;
      isGameOver = true;
      break;

    case 5:
      speed = 10;
      break;
    case 10:
      gameEnd.innerHTML = " <span style='color:green'> You Win 😎👌 </span> --";
      egg.style.left = 0;
      egg.style.top = 0;
      isGameOver = true;
      break;
  }
};
const pause = () => {
  isPause = !isPause;
  console.log("Paused:", isPause);
  if (!isPause && !isGameOver) {
    positionEgg();
  }
};

// -----------------------------------------
