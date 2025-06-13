// function

const positionBird = () => {
  if (isPause || gamefinish) return;
  randomImage();
  bird2.style.display = "block";
  console.log(count);
  counterElement.innerHTML = `Count: ${count}`;
  let lRRandom = Math.floor(Math.random() * 2);
  console.log(lRRandom);
  if (lRRandom == 0) {
    bird2.style.left = "0px";
    bird2.style.transform = "scaleX(-1)";
    currentDirection = "left";
    StartLeft();
    gameOver();
  } else if (lRRandom == 1) {
    {
      bird2.style.right = "0px";
      bird2.style.transform = "scaleX(1)";
      bird2.style.left = null;
      currentDirection = "right";
      StartRight();
      gameOver();
    }
  }
};

const StartLeft = () => {
  if (isPause || gamefinish) return;
  left += 2;
  bird2.style.left = `${left}px`;
  timer = setTimeout(StartLeft, speed);
  if (left >= 800) {
    count--;
    console.log("stop");
    clearTimeout(timer);
    left = 0;
    positionBird();
    gameOver();
  }
};

const StartRight = () => {
  if (isPause || gamefinish) return;
  right += 2;
  bird2.style.right = `${right}px`;
  timer = setTimeout(StartRight, speed);
  if (right >= 800) {
    count--;
    console.log("stop");
    clearTimeout(timer);
    right = 0;
    positionBird();
    gameOver();
  }
};

const kill = () => {
  if (isPause || gamefinish) return;
  clearTimeout(timer);
  bird2.style.rotate = "180deg";
  bottom += 2;
  bird2.style.top = `${bottom}px`;
  timer = setTimeout(kill, 7);

  if (bottom >= 220) {
    console.log("kill");
    clearTimeout(timer);
    bird2.style.display = "none";
    count++;
    console.log(count);
    // counterElement.innerHTML = `Count: ${count}`;
    bird2.style.top = 30 + "px";
    bottom = 0;
    left = 0;
    right = 0;
    bird2.style.transform = "scaleX(-1)";
    bird2.style.rotate = 0 + "deg";

    positionBird();
  }
};

const gameOver = () => {
  switch (count) {
    case -5:
      gameEnd.innerHTML = " <span style='color:red'> You Lose 😭  </span> --";
      gamefinish = true;
      break;
    case 5:
      speed = 5;
      break;
    case 10:
      gameEnd.innerHTML = " <span style='color:green'> You Win 😎👌 </span> --";
      gamefinish = true;
      break;
  }
};
console.log(count);

const pause = () => {
  isPause = !isPause;
  console.log("Paused:", isPause);
  if (!isPause && !gamefinish) {
    if (currentDirection == "left") {
      StartLeft();
    } else if (currentDirection == "right") {
      StartRight();
    }
  }
};

const randomImage = () => {
  let randomImage = Math.floor(Math.random() * 4) + 1;
  console.log(randomImage);
  bird2.src = `image/${randomImage}.gif`;
};

function changeAudioSpeed(newSpeed) {
  audioSpeed = newSpeed;
  mp3.playbackRate = audioSpeed;
}
