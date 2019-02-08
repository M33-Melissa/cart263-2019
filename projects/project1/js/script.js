"use strict";
/*****************

Sisyphus' Meeting
Melissa Lim

Represent the story of Sisyphus on his way to his meeing with Zeus
in order to receive the decision to his punishment.
Zeus' office is on the last floor. With floor levels that keeps appearing.
Therefore, resulting a long elevator experience.

******************/
// Store jQuery selection of all buttons
let $buttons;
let $floorNums;
// Store floor number counter
let floorNum = 2;
let numFloors = 20;
let interval;

// When the document is loaded we call the setup function
$(document).ready(setup);

// setup()
//
// Sets the handler for floor buttons click and floor level reached
function setup() {
  // Save the selection of all buttons
  $buttons = $("#button");
  $floorNums = $("#floorNum");
  // Makes buttons selectable
  $buttons.selectable({
    tolerance: "fit"
  });
  // Allow for multiple selection
  $buttons.on("selectablestart", function (event, ui) {
    event.originalEvent.ctrlKey = true;
  });
  // Set a click handler on the buttons
  $buttons.click(buttonClicked);
  // Set in interval to update the floor level
  interval = setInterval(update,10000);
}

// buttonClicked()
//
//
function buttonClicked() {
  console.log("cllicked");
}

// update()
//
//
function update() {
  $floorNums.text(floorNum);
  floorNum++;
  $("#doors").animate({left: "60%"},1000,function() {});
  $("#doors").delay(1000).animate({left: "0%"},1000,function(){});
}

// updateButton()
//
// Randomly activates a button
function updateButton() {
}
