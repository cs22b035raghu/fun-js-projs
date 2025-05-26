let colors = ['green', 'blue', 'red', 'yellow'];
let gameseq = [];
let userseq = [];
let level = 0;

const y = document.getElementById("startBtn");
y.addEventListener("click", () => startgame());

function startgame() {
  gameseq = [];
  userseq = [];
  level = 0;
  nextlevel();
}

// Set up click handlers with arrow functions
for (let i = 0; i < colors.length; i++) {
  let p = document.getElementById(colors[i]);
  p.addEventListener("click", () => checkseq(colors[i]));
}

function nextlevel() {
  level++;
  const text = document.getElementById("levelTitle");
  text.innerText = `Level: ${level}`;

  const o = Math.floor(Math.random() * 4);
  gameseq.push(colors[o]);

  // Flash sequence using arrow function in setTimeout
  for (let i = 0; i < gameseq.length; i++) {
    setTimeout(() => {
      flash(gameseq[i]);
    }, 600*(i+1) );
  }

  userseq = [];
}

function flash(color) {
  const i = document.getElementById(color);
  i.classList.add('active');
  setTimeout(() => {
    i.classList.remove('active');
  }, 300);
}

function checkseq(color) {
  userseq.push(color);

  for (let i = 0; i < userseq.length; i++) {
    if (userseq[i] !== gameseq[i]) {
      gameover();
      return;
    }
  }

  if (userseq.length === gameseq.length) {
    setTimeout(() => nextlevel(), 1000);
  }
}

function gameover() {
  alert('You lost the game!');
  gameseq = [];
  userseq = [];
  level = 0;
  document.getElementById("levelTitle").innerText = "Game Over! Press Start";
}
