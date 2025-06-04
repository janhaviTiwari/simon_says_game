let gameseq = [];
let userseq = [];

let start = false;
let level = 0;

let h2 = document.querySelector("h2");

let btns = ["yellow", "red", "blue", "green"];

document.addEventListener("keypress", function () {
  if (start === false) {
    console.log("Game is started");
    start = true;
    levelup();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function levelup() {
  userseq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let raninx = Math.floor(Math.random() * 4);
  let randomcolor = btns[raninx];
  let randombtn = document.querySelector(`.${randomcolor}`);
  gameseq.push(randomcolor);
  console.log(gameseq);
  btnFlash(randombtn);
}

function check(idx) {
  if (userseq[idx] === gameseq[idx]) {
    if (userseq.length === gameseq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>Press any key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}


function btnpress() {
  let btn = this;
  btnFlash(btn);

  let usercolor = btn.getAttribute("id");
  userseq.push(usercolor);
  console.log(userseq);
  check(userseq.length - 1);
}

let allbtn = document.querySelectorAll(".btn");
for (let btn of allbtn) {
  btn.addEventListener("click", btnpress);
}

function reset() {
  start = false;
  gameseq = [];
  userseq = [];
  level = 0;
}
