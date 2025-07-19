const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');

canvas.style.background = 'black';

canvas.height = 600;
canvas.width = 400;
let level = 1;

const player = new Player((canvas.width/2) - 10, canvas.height - 40, 2);

let blocks = [];

let keys = {
    left: false,
    right: false,
    up: false,
    down:false
}

let play = true;
let score = 0;

let button = new Button(canvas.width/2 - 50, canvas.height/2 - 50, 100, 30, 'Replay');

function addBlock() {
  const x = Math.floor(Math.random() * canvas.width) + 1;
  const y = Math.floor(Math.random() * -canvas.height) + 1;
  blocks.push(new Block(x,y));
}

function set() {
  score = 0;
  blocks = [];
  player.reset();
  for(let i = 0; i < 5; i++) {
      addBlock();
    }
  play = true;
}

set();

function game() {
  if (play) {
  ctx.clearRect(0,0, canvas.width, canvas.height);

  if (score / 10 >= level) {
      level++;
      addBlock();
  }
  const defaultFillStyle = ctx.fillStyle;
  ctx.fillStyle = 'white';
  ctx.fillText('Score:' + score, 10,20);
  ctx.fillStyle = defaultFillStyle;

  player.update();

  player.draw();
  for (let  i = 0; i < blocks.length; i++) {
    score += blocks[i].update();
    blocks[i].draw();

    for (let j = 0; j < player.collisionMask.length; j++) {
      if (player.collisionMask[j].isColliding(blocks[i])) {
        play = false;
        break;
      }
    }
  }
}

if (!play){
  const defaultFillStyle = ctx.fillStyle;
  const font = ctx.font;
  ctx.font = "20px serif";
  ctx.fillStyle='white';
  ctx.fillText('Score:' + score, canvas.width/2 - 50, canvas.height/2 - 60);
  ctx.font = font;
  ctx.fillStyle=defaultFillStyle;
  button.draw();
}

requestAnimationFrame(game);
}

requestAnimationFrame(game);

// to do
// collision detection with block mask