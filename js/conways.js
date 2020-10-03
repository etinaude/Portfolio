//By Etienne Naude
const WIDTH = Math.round(window.innerWidth * 0.6);
const HEIGHT = 200;
const GRID_WIDTH = Math.round(WIDTH / 20);
const GRID_HEIGHT = 10;
const CELL_SIZE = 20;
const FR = 30;
var cells = new Array(GRID_HEIGHT)
  .fill(0)
  .map(() => new Array(GRID_WIDTH).fill(0));
var old = [];
var paused = false;
var looper = 0;

function defaultGrid() {
  cells = new Array(GRID_HEIGHT)
    .fill(0)
    .map(() => new Array(GRID_WIDTH).fill(0));
  //console.log(cells.length);
  //console.log(cells[0].length);
  cells.forEach((i) => (i[i % 5] = 1));
  var x = cells[0].length - 3;
  var y = cells.length - 1;

  cells[4][x] = 1;
  cells[5][x] = 1;
  cells[6][x] = 1;

  //occelator
  for (let i = 0; i < cells[0].length - 10; i++) {
    if (i % 6 == 0) {
      cells[6][i] = 1;
      cells[1][i] = 1;
    } else if (i % 6 == 1) {
      cells[7][i] = 1;
      cells[2][i] = 1;
    } else if (i % 6 == 2) {
      cells[5][i] = 1;
      cells[6][i] = 1;
      cells[7][i] = 1;

      cells[0][i] = 1;
      cells[1][i] = 1;
      cells[2][i] = 1;
    }
  }

  display();
}
function pauseToggle() {
  //Handles the pause button
  paused = !paused;
  if (paused) {
    document.getElementById("pauseBtn").text = "Play";
  } else {
    document.getElementById("pauseBtn").text = "Pause";
  }
}

function setup() {
  //sets up the canvas
  noStroke();
  defaultGrid();
  background(32);
  var myCanvas = createCanvas(WIDTH, HEIGHT);
  myCanvas.parent("conway");
  frameRate(FR);
}

function countNeighbours(x, y) {
  var count = 0;
  var left = x == 0 ? GRID_WIDTH - 1 : x - 1;
  var right = x == GRID_WIDTH - 1 ? 0 : x + 1;
  var top = y == 0 ? GRID_HEIGHT - 1 : y - 1;
  var bottom = y == GRID_HEIGHT - 1 ? 0 : y + 1;

  count += old[top][left];
  count += old[top][x];
  count += old[top][right];

  count += old[bottom][left];
  count += old[bottom][x];
  count += old[bottom][right];

  count += old[y][left];
  count += old[y][right];

  return count;
}

function update() {
  /*
  Any live cell with two or three live neighbours survives.
  Any dead cell with three live neighbours becomes a live cell.
  All other live cells die in the next generation. Similarly, all other dead cells stay dead.  
  
  */
  old = JSON.parse(JSON.stringify(cells));
  for (var y = 0; y < GRID_HEIGHT; y++) {
    for (var x = 0; x < GRID_WIDTH; x++) {
      var alive = countNeighbours(x, y);
      //if cells alive and has <2 or >3 it die
      if (cells[y][x]) {
        if (alive > 3 || alive < 2) {
          cells[y][x] = 0;
        } else {
          //console.log(alive);
        }
      }
      //if cells dead and has 3 it alive
      if (!cells[y][x]) {
        if (alive == 3) {
          cells[y][x] = 1;
        }
      }
    }
  }
}

function display() {
  for (var y = 0; y < GRID_HEIGHT; y++) {
    for (var x = 0; x < GRID_WIDTH; x++) {
      if (cells[y][x]) {
        fill(0, 140, 255);
      } else {
        fill(22);
      }
      rect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    }
  }
}

function draw() {
  looper += 1;
  if (looper == 10) {
    looper = 0;
    if (!paused) {
      display();
      update();
    }
  }
}
function mouseClicked(event) {
  if (mouseX < CELL_SIZE * GRID_WIDTH && mouseY < CELL_SIZE * GRID_HEIGHT) {
    var xPos = mouseX - (mouseX % CELL_SIZE);
    var yPos = mouseY - (mouseY % CELL_SIZE);
    if (cells[yPos / CELL_SIZE][xPos / CELL_SIZE] == 1) {
      fill(225, 40, 40);
      cells[yPos / CELL_SIZE][xPos / CELL_SIZE] = 0;
    } else {
      fill(0, 80, 255);
      cells[yPos / CELL_SIZE][xPos / CELL_SIZE] = 1;
    }
    rect(xPos, yPos, CELL_SIZE, CELL_SIZE);
  }
}
