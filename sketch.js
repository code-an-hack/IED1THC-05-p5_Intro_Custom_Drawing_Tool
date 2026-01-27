let mouseSpeed = 0;
let prevMouseX = 0;
let prevMouseY = 0;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
background(220,220,220,10);
  mouseSpeed = dist(mouseX, mouseY, prevMouseX, prevMouseY);

  let circleSize = map(mouseSpeed, 0, 50, 10, 100);

  noStroke();
  fill(100, 150, 255);
  circle(mouseX, mouseY, circleSize);

  prevMouseX = mouseX;
  prevMouseY = mouseY;
}
