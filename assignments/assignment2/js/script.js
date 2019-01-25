"use strict";

/*****************

OOP Circle Eater
Pippin Barr

An Object-Oriented version of the Circle Eater program.
The player moves a circle around with the mouse.
Another circle represents food which the player eats by overlapping.
The player circle shrinks over time, but grows when it eats.

******************/

// Constants for key quantities
const AVATAR_MAX_SIZE = 64;
const AVATAR_SIZE_LOSS_PER_FRAME = 1;
const FOOD_MAX_SPEED = 7;
const FOOD_MIN_SIZE = 5;
const FOOD_MAX_SIZE = 100;
const NUM_FOOD = 30;

// Variables to store the two key objects
let avatar;
let foods = [];

// preload()
//
// Not needed

function preload() {

}


// setup()
//
// Create the canvas, avatar, and food, disable the cursor

function setup() {
  createCanvas(windowWidth,windowHeight);
  avatar = new Avatar(mouseX,mouseY,AVATAR_MAX_SIZE,AVATAR_SIZE_LOSS_PER_FRAME);
  for (let i = 0; i < NUM_FOOD; i++) {
    foods.push(new Food(random(0,width),random(0,height),random(-FOOD_MAX_SPEED,FOOD_MAX_SPEED),random(-FOOD_MAX_SPEED,FOOD_MAX_SPEED),FOOD_MAX_SPEED,FOOD_MIN_SIZE,FOOD_MAX_SIZE));
  }
  noCursor();
}


// draw()
//
// Clear the background
// Update the avatar and check for eating
// Display the avatar and food

function draw() {
  background(209, 23, 63, 80);

  avatar.update();
  avatar.display();
  // push();
  // noStroke();
  // fill('#D7C2A2');
  // ellipse(avatar.x,avatar.y,avatar.size/3);
  // pop();
  for (let i = 0; i < foods.length; i++) {
    let food = foods[i];
    food.display();
    food.update();
    if (avatar.collide(food)) {
      avatar.eat(food);
    }
  }
}
