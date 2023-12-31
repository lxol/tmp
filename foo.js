let circleX = 40;
let circleY = 325;
let circleSize = 70;
let circleSpeed = 3;
let brickHeight = 40;
let roadPos = 0;
let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;
let characterImages = [];
let currentImageIndex = 0;

function preload() {
    characterImages.push(loadImage("assets/female_walk1.png"));
    characterImages.push(loadImage("assets/female_walk2.png"));
}

function setup() {
    createCanvas(600, 400);
    setInterval(updateCharacterPostition, 100);
}

function draw() {
    background(220);
  
    // draw brick road
    fill(153, 77, 0);
    for (let i = 0; i < width / 40; i++) {
        rect(i * 40 - roadPos, height - brickHeight, 40, brickHeight);
    }
    roadPos += 2;
    if (roadPos > 40) {
        roadPos = 0;
    }
  
    // draw circle
    fill(255, 0, 0);
    image(characterImages[currentImageIndex], circleX, circleY, circleSize, circleSize);
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        leftPressed = true;
    } else if (keyCode === RIGHT_ARROW) {
        rightPressed = true;
    } else if (keyCode === UP_ARROW) {
        upPressed = true;
    } else if (keyCode === DOWN_ARROW) {
        downPressed = true;
    }
}

function keyReleased() {
    if (keyCode === LEFT_ARROW) {
        leftPressed = false;
    } else if (keyCode === RIGHT_ARROW) {
        rightPressed = false;
    } else if (keyCode === UP_ARROW) {
        upPressed = false;
    } else if (keyCode === DOWN_ARROW) {
        downPressed = false;
    }
}

function updateCharacterPostition() {
    currentImageIndex = (currentImageIndex + 1) % characterImages.length;
}
