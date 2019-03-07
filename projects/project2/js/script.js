/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

// Get setup
$(document).ready(setup);

function setup() {

  $('#click-to-begin').on('click',startGame);

}

function startGame() {

    $('#click-to-begin').remove();

    // Set some random numbers for the voice's pitch and rate parameters for a bit of fun
    let options = {
      pitch: Math.random(),
      rate: Math.random()
    };

    // Use ResponsiveVoice to speak the string we generated, with UK English Male voice
    // and the options we just specified.
    responsiveVoice.speak('dog','UK English Male',options);
}
