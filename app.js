const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-list");
const leftTime = document.querySelector("#time");
const board = document.querySelector("#board");
const end = document.querySelector(".end");

let time = 0;
let score = 0;
const colors = [
  "#ff8f49",
  "#ffff49",
  "#64ff49",
  "#49f6ff",
  "#6449ff",
  "#f349ff",
  "#ff4949",
];

startBtn.addEventListener("click", (event) => {
  event.preventDefault();
  screens[0].classList.add("up");
});

timeList.addEventListener("click", (event) => {
  if (event.target.classList.contains("time-btn")) {
    time = parseInt(event.target.getAttribute("data-time"));
    screens[1].classList.add("up");
    startGame();
  }
});

board.addEventListener("click", (event) => {
  if (event.target.classList.contains("circle")) {
    score++;
    event.target.remove();
    createRandomCircle();
  }
});

function startGame() {
  setInterval(timeEnds, 1000);
  createRandomCircle();

  setTime(time);
}

function timeEnds() {
  const circle = document.querySelector(".circle");

  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }

    setTime(current);
  }
}

function setTime(value) {
  return (leftTime.innerHTML = `00:${value}`);
}

function finishGame() {
  leftTime.parentNode.classList.add("hide");

  board.innerHTML = `<h1>Cчёт: <span class="primary">${score}</span></h1> <a href="*" class="end">Новая Игра!</a>`;
}

function createRandomCircle() {
  const circle = document.createElement("div");
  const size = getRandomCircle(10, 60);

  const { width, height } = board.getBoundingClientRect();
  const x = getRandomCircle(0, width - size);
  const y = getRandomCircle(0, height - size);

  const color = getRandomColor();

  circle.classList.add("circle");

  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  circle.style.background = color;
  circle.style.boxShadow = `0 0 10px ${color}`;

  board.append(circle);
}

function getRandomCircle(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
