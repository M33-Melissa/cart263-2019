/*****************

Clickbait Thumbnail Generator
Melissa Lim

******************/

// Get setup
$(document).ready(setup);

// Initialize variables for form results (title and sponsor)
let inputTitle = "";
let inputSponsor = "";
let title = "";
let sponsor = "";
let modifiedSpon = "";
let emoji = "";
let $emoji;

// Initialize variables for the circle target randomization of position and size
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
  $emoji = $('#emoji');
  $.getJSON('data/fortune500.json',getSponsor);
  // $.getJSON('data/encouraging_words.json',getAdjectives);
  $.getJSON('data/crash_blossoms.json',getHeadline);
  document.getElementById("title-input").value = "";
  document.getElementById("sponsor-input").value = "";
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
  title = inputTitle;
  $('#titleOutput').text(inputTitle);
}

function getSponsorInput() {
  inputSponsor = document.getElementById("sponsor-input").value;
  sponsor = inputSponsor;
  modifySponsor();
}

function generateThumbnail() {
  if(title != "" && sponsor != "") {
    $('#generateButton').remove();
    $('#result').show();

    $('</br><button id="randomizeBackground" class="ui-button ui-widget ui-corner-all">Randomize Background Picture</button></br>').insertAfter("#result");
    $('#randomizeBackground').on('click', function() {
      $("img").attr("src", "https://picsum.photos/640/360/?random?t=" + new Date().getTime());
    });

    $circle.show();
    $('<button id="randomizeCircle" class="ui-button ui-widget ui-corner-all">Randomize Target</button></br>').insertAfter("#randomizeBackground");
    $('#randomizeCircle').on('click', randomizeCircle);

    $emoji.show();
    $('<button id="randomizeEmoji" class="ui-button ui-widget ui-corner-all">Randomize Emoji</button></br>').insertAfter("#randomizeCircle");
    $.getJSON('data/emoji.json',getEmoji);
  }
}

function getEmoji(emo) {
  $('#randomizeEmoji').on('click', function() {
    emoji = getRandomElement(emo.emoji);
    $emoji.text(emoji);
  });
}

function randomizeCircle() {
  randomSize = Math.floor(Math.random()*190) + 70;
  randomXPosition = Math.floor(Math.random()*380);
  randomYPosition = Math.floor(Math.random()*90);
  $circle.css("height", randomSize + "px");
  $circle.css("width", randomSize + "px");
  $circle.css("right", randomXPosition + "px");
  $circle.css("bottom", randomYPosition + "px");
}

function getHeadline(hed) {
  $('#randomizeTitleButton').on('click', function() {
    let titleHed = getRandomElement(hed.crash_blossoms);
    document.getElementById("title-input").value = titleHed;
    title = titleHed;

    $('#titleOutput').text(title);
  });
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
  tempSpon = spon.replace("&", "N");
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
  let denySponsor = 'This brand has cancelled the sponsorship you, would you rather be sponsored by '+ sponsorSuggestion +' are willing to work with you instead.';
}

function completeForm() {
  let completion = 'Your Generated Thumbnail is Complete';
  responsiveVoice.speak(completion,'UK English Female',options);
}


function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
