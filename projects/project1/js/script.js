"use strict";
/*****************

Sisyphus' meeting
Melissa Lim

Represent the story of Sisyphus on his way to his meeing with Zeus
in order to receive the decision to his punishment.
A long elevator experience.

******************/
// Store jQuery selection of all buttons
let $buttons;
// Store floor number counter
let floorNum = 1;

// When the document is loaded we call the setup function
$(document).ready(setup);

// setup()
//
// Sets the handler for floor buttons click and floor level reached
function setup() {
  // Save the selection of all buttons
  $buttons = $("#button");
  // Makes buttons selectable
  $buttons.selectable();
  // Allow for multiple selection
  $buttons.on("selectablestart", function (event, ui) {
    event.originalEvent.ctrlKey = true;
  });
  // Set a click handler on the buttons
  $buttons.on('click',buttonClicked);
  // Set in interval to update the floor level
  setInterval(update,5000);
}

// buttonClicked()
//
//
function buttonClicked() {

}

// update()
//
//
function update() {

}
