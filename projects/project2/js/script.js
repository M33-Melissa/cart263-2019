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

let $circle;
let randomHeight = "";
let randomWidth = "";
let randomXPosition = "";
let randomYPosition = "";


function setup() {
  $('#dialog-message').dialog({
    modal: true,
    buttons: {
      Begin: function() {
        $(this).dialog('close');
        startGenerator();
      }
    }
  });

  $circle = $('#circle');
}

function startGenerator() {
  $('#click-to-begin').remove();

  $('#border').show();
  $('h1').show();
  $('#form').show();

  $('#generateButton').on('click',generateThumbnail);
}

function generateThumbnail() {
  $('#generateButton').remove();
  $('#result').show();

  $('</br><button id="randomizeBackground" class="ui-button ui-widget ui-corner-all">Randomize Background Picture</button></br>').insertAfter("#result");
  $('#randomizeBackground').on('click', function() {
    $("img").attr("src", "https://picsum.photos/640/360/?random?t=" + new Date().getTime());
  });

  $circle.show();
  randomizeCircle();
}

function randomizeCircle() {
  randomSize = Math.floor(Math.random()*200) + 50;
  randomXPosition = Math.floor(Math.random()*380);
  randomYPosition = Math.floor(Math.random()*100);
  $circle.css("height", randomSize + "px");
  $circle.css("width", randomSize + "px");
  $circle.css("right", randomXPosition + "px");
  $circle.css("bottom", randomYPosition + "px");
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
