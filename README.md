# JS-Aim-Game
_______________
## Это пример простой игры с использованием JavaScript, HTML, CSS

### Основная задача: Создание Aim игры. 
### Цели: Сделать "переход страницы". Реализовать меню выбора, функцию таймера, а также счётчик
_____________________________
```html
//Данный код, показывает, что сайт полностью зависит от js файла, а также описывает структуру сайта
<div class="screen">
      <h1>Aim Training</h1>
      <a href="#" id="start" class="start">Начать игру</a>
    </div>

    <div class="screen">
      <h1>Выберите время</h1>
      <ul class="time-list" id="time-list">
        <li>
          <button class="time-btn" data-time="10">10 сек</button>
        </li>
        <li>
          <button class="time-btn" data-time="15">15 сек</button>
        </li>
        <li>
          <button class="time-btn" data-time="20">20 сек</button>
        </li>
        <li>
          <button class="time-btn" data-time="30">30 сек</button>
        </li>
      </ul>
    </div>

    <div class="screen">
      <h3>Осталось <span id="time">00:00</span></h3>
      <div class="board" id="board"></div>
    </div>
    <script src="app.js"></script>
```
_____________________________________________
```js
//Навешиваем обработчика событий на нажатие 
startBtn.addEventListener("click", (event) => {
  event.preventDefault();
  screens[0].classList.add("up");
});
```

```js
//Выбор времени
timeList.addEventListener("click", (event) => {
  if (event.target.classList.contains("time-btn")) {
    time = parseInt(event.target.getAttribute("data-time"));
    screens[1].classList.add("up");
    startGame();
  }
});
```

```js
//Основные функции, показывающие логику игры
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
```
```js
//Функция создания цели
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
```
_________________________________
## Инициализация игры:
![resualt-1](https://sun9-54.userapi.com/impg/eCFOweqB6jacofbU7t673QJKMgaZBNHMVNQRAg/vz6QSufJNpg.jpg?size=1320x767&quality=96&sign=8c1949a1c73a661cf56413d4c1853936&type=album)
________________________
## Реализация меню выбора времени:
![resualt-2](https://sun9-67.userapi.com/impg/qNTN9gcaMs2I0LSj4FpsEtW5WsWsPyNDGgmHew/Erg9NBuj7vQ.jpg?size=1064x706&quality=96&sign=ba883964326204dae309c013095b4da6&type=album)
________________
## Инициализация игры-1:
![resualt-3](https://sun9-26.userapi.com/impg/UPWZPra6xifY7aFr99kUWX7aBx5l0VvVuPZPTA/fhlCkrO1Mk4.jpg?size=1232x693&quality=96&sign=ac0dcb7e0730231ea5ba906f5f1bc534&type=album)
______________
## Инициализация игры-1:
![resualt-4](https://sun9-68.userapi.com/impg/f-1StcLBSFZxd_OZJRWKVBucHKfWZhzwUbOAYA/W7G46QlDhXE.jpg?size=962x680&quality=96&sign=f1f381cdcbb04df2ae51993ef4057632&type=album)
___________
## Реализация счетчика и завершение игры:
![resualt-5](https://sun9-84.userapi.com/impg/6iUD1UfPQ6nPKW3uUoC6fk8C6_Y24NpsFAAvkg/JLk3R-wwDPI.jpg?size=1053x699&quality=96&sign=203440686ad3136f24eced8c8eb82ba5&type=album)
