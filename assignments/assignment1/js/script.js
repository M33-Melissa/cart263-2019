"use strict";

/*****************

Circle Eater
Melissa Lim

A simple game in which the player controls a shrinking circle with their mouse and tries
to overlap another circle (food) in order to grow bigger.

******************/

// Constants defining key quantities
const AVATAR_SIZE_GAIN = 50;
const AVATAR_SIZE_LOSS = 0.5;
let score = 0;

// Avatar is an object defined by its properties
let avatar = {
  x: 0,
  y: 0,
  maxSize: 64,
  size: 64,
  active: true,
  color: '#ffffff'
}

// Food is an object defined by its properties
let food = {
  x: 0,
  y: 0,
  vx: 1,
  vy: 1,
  maxSpeed: 5,
  size: 64,
  color: '#ff0000'
}

// preload()
//
// Not needed

function preload() {

}


// setup()
//
// Create the canvas, position the food, remove the cursor

function setup() {
  createCanvas(windowWidth,windowHeight);
  positionFood();
  noCursor();
}


// draw()
//
// Move the avatar, check for collisions, display avatar and food

function draw() {
  // Make sure the avatar is still alive - if not, we don't run
  // the rest of the draw loop
  if (!avatar.active) {
    // By using "return" the draw() function exits immediately
    return;
  }

  // Otherwise we handle the game
  background(50);
  updateAvatar();
  checkCollision();
  displayAvatar();
  displayFood();
  updateFood();
  if (avatar.active) {
    push();
    textSize(avatar.size*9/10);
    stroke(0);
    textAlign(CENTER, CENTER);
    fill(250,0,0);
    text(score,mouseX,mouseY);
    pop();
  }
}

// updateAvatar()
//
// Set the position to the mouse location
// Shrink the avatar
// Set it to inactive if it reaches a size of zero
function updateAvatar() {
  avatar.x = mouseX;
  avatar.y = mouseY;
  // Shrink the avatar and use constrain() to keep it to reasonable bounds
  avatar.size = constrain(avatar.size - AVATAR_SIZE_LOSS,0,avatar.maxSize);
  if (avatar.size === 0) {
    avatar.active = false;
  }
}

// updateFood()
//
//
function updateFood() {
  food.x = constrain(food.x + food.vx,0,width);
  food.y = constrain(food.y + food.vy,0,height);
  if (food.x === 0 || food.x === width) {
    food.vx = -food.vx;
  } else if (food.y === 0 || food.y === height) {
    food.vy = -food.vy;
  }
}

// checkCollision()
//
// Calculate distance of avatar to food
// Check if the distance is small enough to be an overlap of the two circles
// If so, grow the avatar and reposition the food
function checkCollision() {
  let d = dist(avatar.x,avatar.y,food.x,food.y);
  if (d < avatar.size/2 + food.size/2) {
    avatar.size = constrain(avatar.size + AVATAR_SIZE_GAIN,0,avatar.maxSize);
    positionFood();
    score++;
  }
}

// displayAvatar()
//
// Draw the avatar in its current position, using its size and color
// Use push() and pop() around it all to avoid affecting the rest of the program
// with drawing commands
function displayAvatar() {
  push();
  noStroke();
  fill(avatar.color);
  ellipse(avatar.x,avatar.y,avatar.size);
  pop();
}

// displayFood()
//
// Draw the food in its current position, using its size and color
// Use push() and pop() around it all to avoid affecting the rest of the program
// with drawing commands
function displayFood() {
  push();
  noStroke();
  fill(food.color);
  ellipse(food.x,food.y,food.size);
  stroke(0);
  noFill();
  rect(food.x-25,food.y-10,food.size/3, food.size/5,1);
  rect(food.x+5,food.y-10,food.size/3, food.size/5,1);
  line(food.x-5,food.y-5,food.x+5,food.y-5);
  line(food.x-15,food.y-15,food.x-5,food.y-10);
  line(food.x+5,food.y-10,food.x+15,food.y-15);
  arc(food.x,food.y+20,food.size/5,food.size/5,PI,TWO_PI);
  pop();
}

// positionFood()
//
// Set the food's position properties to random numbers within the canvas dimensions
function positionFood() {
  food.x = random(0,width);
  food.y = random(0,height);
  food.vx = random(-food.maxSpeed,food.maxSpeed);
  food.vy = random(-food.maxSpeed,food.maxSpeed);
}
