"use strict";
/*****************

Sisyphus' Meeting
Melissa Lim

Represent the story of Sisyphus on his way to his meeing with Zeus
in order to receive the decision to his punishment.
Zeus' office is on the last floor. Floor levels keeps appearing on each click.
Therefore, resulting a long long elevator experience.

******************/
// Store jQuery selection of all buttons, spans, and floor display
let $buttons;
let $spans;
let $floorDisplay;

// Store floor number for display, and counter values for button adding
let floorNum = 2;
let numFloors = 20;

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

  // Save the selection of all buttons
  $buttons = $("#button");
  $floorDisplay = $("#floor");

  // Popup message for narrative set up
  $("#dialog-message").dialog({
    modal: true,
    buttons: {
      Sigh: function() {
        $(this).dialog("close");
        playMusic();
      }
    }
  });


  // Makes buttons selectable, tolerance is set to fit so that the drag to select mutiple is more contained
  $buttons.selectable({
    tolerance: "fit"
  });

  // Allow for multiple button selection and call for button trigger function
  $buttons.on("selectablestart",buttonClicked);

  // Set in interval to update the floor level
  setInterval(update,8000);
}

// buttonClicked()
//
// On button click, SFX plays and another floor button is added
function buttonClicked(event, ui) {
  // Allows multiple buttons to be activated
  event.originalEvent.ctrlKey = true;

  // Play button click SFX
  buttonSFX.loop = false;
  buttonSFX.playbackRate = 3.5;
  buttonSFX.play();

  // Increment floor number, add buttons every click
  numFloors++;
  $("<span class=\"ui-state-default\">"+numFloors+"</span>").insertAfter("p");
}

// update()
//
// Animates door opening with sound, adding floor number to display
function update() {
  // Arrived to floor level SFX
  floorSFX.volume = 0.5;
  floorSFX.play();

  // Change floor number and adds one for next
  $floorDisplay.text(floorNum);
  floorNum++;

  // Door opening and closing animation
  $("#doors").animate({left: "60%"},1000,function(){});
  $("#doors").delay(3000).animate({left: "0%"},1000,function(){});

  // Randomize images appearing behind doors
  if(floorNum > 3) {
    randomizeImage();
  }
}

// randImage()
//
// Randomized image that appears behind elevator doors
function randomizeImage() {

  let randNum = Math.random()*10;
  switch(Math.floor(randNum)) {
    case 0:
    $("#behindDoor img").attr("src", "assets/images/mountains.jpg");
    $("#behindDoor img").attr("width", "200%");
    $("body").css("background-color","white");
    break;

    case 1:
    $("#behindDoor img").attr("src", "assets/images/isabelle.gif");
    $("#behindDoor img").attr("width", "250%");
    $("body").css("background-color","grey");
    break;

    case 2:
    $("#behindDoor img").attr("src", "assets/images/pleiades.jpg");
    $("#behindDoor img").attr("width", "70%");
    $("body").css("background-color","black");
    break;

    case 3:
    $("#behindDoor img").attr("src", "assets/images/prairiedog-office.png");
    $("#behindDoor img").attr("width", "150%");
    $("body").css("background-color","white");
    break;

    case 4:
    $("#behindDoor img").attr("src", "assets/images/overwork.png");
    $("#behindDoor img").attr("width", "65%");
    $("body").css("background-color","green");
    break;

    case 5:
    $("#behindDoor img").attr("src", "assets/images/gnomed.png");
    $("#behindDoor img").attr("width", "450%");
    $("body").css("background-color","black");
    break;

    case 6:
    $("#behindDoor img").attr("src", "assets/images/sisyphus-dwarves.JPG");
    $("#behindDoor img").attr("width", "120%");
    $("body").css("background-color","white");
    break;

    case 7:
    $("#behindDoor img").attr("src", "assets/images/thumbs-up.gif");
    $("#behindDoor img").attr("width", "300%");
    $("body").css("background-color","white");
    break;

    case 8:
    $("#behindDoor img").attr("src", "assets/images/surprised-pikachu.png");
    $("#behindDoor img").attr("width", "75%");
    $("body").css("background-color","grey");
    break;

    case 9:
    $("#behindDoor img").attr("src", "assets/images/djkhaled.gif");
    $("#behindDoor img").attr("width", "200%");
    $("body").css("background-color","white");
    break;

    default:
    $("#behindDoor img").attr("src", "assets/images/office.jpg");
    $("#behindDoor img").attr("width", "80%");
    break;
  }
}

// playMusic()
//
// Plays elevator music in loop
function playMusic() {
    // Play background music
    elevatorMusic.loop = true;
    elevatorMusic.volume = 0.3;
    elevatorMusic.play();
}
