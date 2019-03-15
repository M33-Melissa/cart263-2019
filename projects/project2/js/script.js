/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

// Get setup
$(document).ready(setup);

let inputTitle = "";
let inputSponsor = "";
let title = "";
let sponsor = "";

function setup() {
  $('#click-to-begin').on('click',startGame);
}

function startGame() {
  $('#click-to-begin').remove();

  $('h1').show();
  $('#form').show();

  $('#result').show();
}

function alterName(name) {
  for (let i = 0; i < title.length; i++) {
    switch(title.charAt(i)) {
      case 'B':
      title.charAt(i) = 'P';
      break;
      case 'P':
      title.charAt(i) = 'B';
      case 'b':
      title.charAt(i) = 'p';
      break;
      case 'p':
      title.charAt(i) = 'b';
      break;
      case 'M':
      title.charAt(i) = 'W';
      break;
      case 'W':
      title.charAt(i) = 'M';
      break;
      case 'm':
      title.charAt(i) = 'w';
      break;
      case 'w':
      title.charAt(i) = 'm';
      break;
      case 'C':
      title.charAt(i) = 'K';
      break;
      case 'K':
      title.charAt(i) = 'C';
      break;
      case 'c':
      title.charAt(i) = 'k';
      break;
      case 'k':
      title.charAt(i) = 'c';
      break;
    }
  }
}

function enterTitle() {
  let denyTitle = 'This title has forbidden words, would you like to use '+ title +' instead?';
  responsiveVoice.speak(denyTitle,'UK English Female',options);
}

function enterSponsor() {
  responsiveVoice.speak(denySponsor,'UK English Female',options);
  let denySponsor = 'This brand has cancelled the sponsorship you, would you rather be sponsored by '+ sponsorSuggestion +' instead?';
}

function completeForm() {
  let completion = 'Your Generated Thumbnail is Complete';
  responsiveVoice.speak(completion,'UK English Female',options);
}
