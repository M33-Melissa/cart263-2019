"use strict";
/*****************

Sisyphus' Meeting
Melissa Lim

Represent the story of Sisyphus on his way to his meeing with Zeus
in order to receive the decision to his punishment.
Zeus' office is on the last floor. With floor levels that keeps appearing.
Therefore, resulting a long elevator experience.

******************/
// Store jQuery selection of all buttons, spans, and floor numbers
let $buttons;
let $spans;
let $floorNums;

// Store floor number counter values
let floorNum = 2;
let numFloors = 20;

// Store door opening interval
let doorInterval;

// Store sound effects
let buttonSFX;
let elevatorMusic;
let floorSFX;


// When the document is loaded we call the setup function
$(document).ready(setup);

// setup()
//
// Sets the handler for floor buttons click and floor level reached
function setup() {
  // Initialize audio
  buttonSFX = new Audio("assets/sounds/button.mp3");
  elevatorMusic = new Audio("assets/sounds/elevator-music.mp3");
  floorSFX = new Audio("assets/sounds/ding.wav");

  // Play background music
  elevatorMusic.play();
  elevatorMusic.loop = true;
  elevatorMusic.volume = 0.3;

  // Save the selection of all buttons
  $buttons = $("#button");
  $floorNums = $("#floor");

  // Makes buttons selectable
  $buttons.selectable({
    tolerance: "fit"
  });

  // Allow for multiple button selection
  $buttons.on("selectablestart", function (event, ui) {
    event.originalEvent.ctrlKey = true;
  });

  // Set a click handler on the buttons
  $spans = $("span");
  $spans.on('click',buttonClicked);

  // Set in interval to update the floor level
  doorInterval = setInterval(update,7000);
}

// buttonClicked()
//
// On button click, SFX plays and another floor button is added
function buttonClicked() {

  // Play button click SFX
  buttonSFX.play();
  buttonSFX.playbackRate = 3.5;

  // Increment floor number, add buttons every click
  numFloors++;
  $("<span class=\"ui-state-default\">"+numFloors+"</span>").insertAfter("p");
  $("span").on('click',buttonClicked);
}

// update()
//
// Animates door opening, adding floor number
function update() {
  // Arrived to floor level SFX
  floorSFX.play();
  floorSFX.volume = 0.5;

  // Change floor number and adds one for next
  $floorNums.text(floorNum);
  floorNum++;

  // Randomize images appearing behind doors
  if(floorNum > 3) {
    randImage();
  }

  // Door opening and closing animation
  $("#doors").animate({left: "60%"},1000,function() {});
  $("#doors").delay(2000).animate({left: "0%"},1000,function(){});
}

// randImage()
//
// Randomizes image that appears behind elevator doors
function randImage() {

  let randNum = Math.random();

  if(randNum > 0.9) {

    $("#behindDoor img").attr("src", "assets/images/djkhaled.gif");
    $("#behindDoor img").attr("width", "200%");

  } else if(randNum > 0.8) {

    $("#behindDoor img").attr("src", "assets/images/surprised-pikachu.png");
    $("#behindDoor img").attr("width", "75%");

  } else if(randNum > 0.7) {

    $("#behindDoor img").attr("src", "assets/images/thumbs-up.gif");
    $("#behindDoor img").attr("width", "300%");

  } else if(randNum > 0.6) {

    $("#behindDoor img").attr("src", "assets/images/sisyphus-dwarves.jpg");
    $("#behindDoor img").attr("width", "120%");

  } else if(randNum > 0.5) {

    $("#behindDoor img").attr("src", "assets/images/gnomed.png");
    $("#behindDoor img").attr("width", "400%");
    $("body").css("background-color","black");

  } else if(randNum > 0.4) {

    $("#behindDoor img").attr("src", "assets/images/overwork.png");
    $("#behindDoor img").attr("width", "65%");

  } else if(randNum > 0.3) {

    $("#behindDoor img").attr("src", "assets/images/prairiedog-office.png");
    $("#behindDoor img").attr("width", "150%");

  } else if(randNum > 0.2) {

    $("#behindDoor img").attr("src", "assets/images/pleiades.jpg");
    $("#behindDoor img").attr("width", "70%");

  } else if(randNum > 0.1) {

    $("#behindDoor img").attr("src", "assets/images/isabelle.gif");
    $("#behindDoor img").attr("width", "250%");

  } else if(randNum > 0) {

    $("#behindDoor img").attr("src", "assets/images/mountains.jpg");
    $("#behindDoor img").attr("width", "200%");
    $("body").css("background-color","white");

  }
}
