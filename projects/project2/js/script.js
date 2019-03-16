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
let modifiedSpon = "";

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
  $.getJSON('data/fortune500.json',getSponsor);
}

function startGenerator() {
  $('#click-to-begin').remove();

  $('#border').show();
  $('h1').show();
  $('#form').show();

  $('#titleButton').on('click', getTitleInput);
  $('#sponsorButton').on('click', getSponsorInput);
  $('#generateButton').on('click',generateThumbnail);
}

function getTitleInput() {
  inputTitle = document.getElementById("title-input").value;
  $('#titleOutput').text(inputTitle);
}
function getSponsorInput() {
  inputSponsor = document.getElementById("sponsor-input").value;
  sponsor = inputSponsor;
  modifySponsor();
}

function generateThumbnail() {
  $('#generateButton').remove();
  $('#result').show();

  $('</br><button id="randomizeBackground" class="ui-button ui-widget ui-corner-all">Randomize Background Picture</button></br>').insertAfter("#result");
  $('#randomizeBackground').on('click', function() {
    $("img").attr("src", "https://picsum.photos/640/360/?random?t=" + new Date().getTime());
  });

  $circle.show();
  $('<button id="randomizeCircle" class="ui-button ui-widget ui-corner-all">Randomize Target</button></br>').insertAfter("#randomizeBackground");
  $('#randomizeCircle').on('click', randomizeCircle);
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


function getSponsor(spon) {

  $('#randomizeSponsorButton').on('click', function() {
    sponsor = getRandomElement(spon.companies);
    document.getElementById("sponsor-input").value = sponsor;
    modifySponsor();
  });
}

function modifySponsor() {
  modifiedSpon = "";
  for (let i = 0; i < sponsor.length; i++) {
    modifiedSpon += alterName(sponsor.charAt(i));
  }

  modifiedSpon = exceptionAlter(modifiedSpon);
  $('#sponsorOutput').text("Sponsored by " + modifiedSpon);
}

//
//
// Exception alterations
function exceptionAlter(spon) {
  let tempSpon = spon.replace("The", "Dah");
  spon = tempSpon;
  tempSpon = spon.replace("Au", "O");
  spon = tempSpon;
  tempSpon = spon.replace("Association", "Ass.");
  spon = tempSpon;
  tempSpon = spon.replace("America", "Ameriga");
  spon = tempSpon;
  return spon;
}

//
//
//
function alterName(inputSpon) {
  switch(inputSpon) {
    case 'B':
    inputSpon = 'P';
    break;
    case 'P':
    inputSpon = 'B';
    break;
    case 'D':
    inputSpon = 'P';
    break;
    case 'M':
    inputSpon = 'W';
    break;
    case 'W':
    inputSpon = 'M';
    break;
    case 'N':
    inputSpon = 'M';
    break;
    case 'C':
    inputSpon = 'K';
    break;
    case 'K':
    inputSpon = 'C';
    break;
    case 'Q':
    inputSpon = 'K';
    break;
    case 'S':
    inputSpon = 'Sh';
    break;
    case 'V':
    inputSpon = 'W';
    break;
    case 'X':
    inputSpon = 'Ex';
    break;
    case 'F':
    inputSpon = 'V';
    break;
    case 'I':
    inputSpon = 'U';
    break;
    case 'G':
    inputSpon = 'K';
    break;
    case 'R':
    inputSpon = 'L';
    break;
    case 'U':
    inputSpon = 'Yu';
    break;
    case 'O':
    inputSpon = 'Au';
    break;
    default:
    break;
  }
  return inputSpon;
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


function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
