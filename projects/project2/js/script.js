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

// Initialize variables for emojis in thumbnail
let emoji = "";
let $emoji;
let respVoice;

// Initialize variables for the circle target randomization of position and size
let $circle;
let randomHeight = "";
let randomWidth = "";
let randomXPosition = "";
let randomYPosition = "";

// setup()
//
// Setting up starting dialog message, clicking 'Begin' initializes variables,
// values, objects, and calls function that starts actual application.
function setup() {
  $('#dialog-message').dialog({
    modal: true,
    buttons: {
      Begin: function() {
        $(this).dialog('close');
        // Access 2 out of the 3 JSON libraries used
        $.getJSON('data/fortune500.json',getSponsor);
        $.getJSON('data/crash_blossoms.json',getHeadline);
        // Initialization of some variables, values, and objects
        respVoice = new ResponsiveVoiceScript();
        $circle = $('#circle');
        $emoji = $('#emoji');
        document.getElementById("title-input").value = "";
        document.getElementById("sponsor-input").value = "";

        startGenerator();
      }
    }
  });
}

// startGenerator()
//
// Unhides form elements from HTML code
// Adds submission buttons that call for get functions and generate the thumbnail
function startGenerator() {
  $('#click-to-begin').remove();
  respVoice.start();
  // Form elements
  $('#border').show();
  $('h1').show();
  $('#form').show();
  $('#titleButton').on('click', getTitleInput);
  $('#sponsorButton').on('click', getSponsorInput);
  // When form completed, generate thumbnail
  $('#generateButton').on('click',generateThumbnail);
}

// generateThumbnail()
//
// Thumbnail is created if form is filled properly.
// Shows Thumbnail Customization UI.
function generateThumbnail() {
  // Only generates if the form is filled properly
  if (title != "" && sponsor != "") {
    respVoice.completeForm();
    $('#generateButton').remove();
    // Unhide thumbnail elements
    $('#result').show();
    $circle.show();
    $emoji.show();
    // Calls for functions that adds buttons for customization
    randomButtons();
    addSpice();
  } else {
    respVoice.fillForm();
  }
}

///////////////////////////// Title Functions /////////////////////////////

// getTitleInput()
//
// Identifies user input for the Thumbnail title
// Adds the input title to the thumbnail preview
function getTitleInput() {
  inputTitle = document.getElementById("title-input").value;
  title = inputTitle;
  if (title != "") {
    respVoice.impressive(title);
  }
  $('#titleOutput').text(inputTitle);
}

// getTitleInput()
//
// If the randomize title button is clicked:
// Takes random element from JSON "crash_blossoms" (misleading headlines) array.
// Adjusts info in title textarea.
// Adds the randomized title to the thumbnail preview.
function getHeadline(hed) {
  $('#randomizeTitleButton').on('click', function() {
    let titleHed = getRandomElement(hed.crash_blossoms);
    document.getElementById("title-input").value = titleHed;
    title = titleHed;
    respVoice.impressive(title);
    $('#titleOutput').text(title);
  });
}

////////////////////////// Sponsor Functions //////////////////////////

// getSponsorInput()
//
// Identifies user input for the Sponsor Company
// Uses regex fonction to capitalize the first letter of the Sponsor input.
// Calls function modifySponsor() to modify the given company name.
function getSponsorInput() {
  inputSponsor = document.getElementById("sponsor-input").value;
  sponsor = inputSponsor.replace(/(\b)([a-zA-Z])/g, function(firstLetter) {
    return firstLetter.toUpperCase();
  });
  modifySponsor();
}

// getSponsor(spon)
//
// If the randomize sponsor button is clicked:
// Takes a random element from JSON companies array.
// Adjusts info in sponsor textarea.
// Calls function modifySponsor() to modify the randomized company name.
function getSponsor(spon) {
  // Function activates on click of the randomize sponsor button
  $('#randomizeSponsorButton').on('click', function() {
    sponsor = getRandomElement(spon.companies);
    document.getElementById("sponsor-input").value = sponsor;
    modifySponsor();
  });
}

// modifySponsor
//
// Takes the sponsor name and decides character by character, which one to alter
// using the function alterName(inputSpon) and also exceptionAlter(modifiedSpon)
// for exception modifications.
// Outputs final sponsor line to Thumbnail preview
function modifySponsor() {
  // clears modified spon every input to avoid concatenation
  modifiedSpon = "";

  for (let i = 0; i < sponsor.length; i++) {
    modifiedSpon += alterName(sponsor.charAt(i));
  }
  modifiedSpon = exceptionAlter(modifiedSpon);
  sponsor = modifiedSpon;
  if (sponsor != "") {
    respVoice.enterSponsor(sponsor);
    // Final Ouput to Thumbnail Sponsor Title
    sponsor = "Sponsored by " + sponsor;
  }
  $('#sponsorOutput').text(sponsor);
}

// alterName(inputSpon)
//
// Takes given sponsor name, replaces letters in case by case (in switch case)
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

// exceptionAlter(spon)
//
// Takes the sponsor name in argument, specific cases to replace parts of string
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

///////////////////// Thumbnail Customization Buttons /////////////////////

// randomButtons()
//
// Creates buttons for randomized customization of thumbnail aesthetics
// (Background, Circle, and Emoji)
function randomButtons() {
  // Button that activates background image randomization
  $('</br><button id="randomizeBackground" class="ui-button ui-widget ui-corner-all">Randomize Background Picture</button>').insertAfter("#result");
  $('#randomizeBackground').on('click', randomizeBackground);

  // Button that activates circle position/size randomization
  $('<button id="randomizeCircle" class="ui-button ui-widget ui-corner-all">Randomize Target</button>').insertAfter("#randomizeBackground");
  $('#randomizeCircle').on('click', randomizeCircle);

  // Button that activates emoji randomization
  $('<button id="randomizeEmoji" class="ui-button ui-widget ui-corner-all">Randomize Emoji</button>').insertAfter("#randomizeCircle");
  $.getJSON('data/emoji.json',getEmoji);
}

// randomizeBackground()
//
// Refreshes the picsum image page to generate a new random image
function randomizeBackground() {
  respVoice.surprised();
  // Code to make the image page refresh on every click
  $("img").attr("src", "https://picsum.photos/640/360/?random?t=" + new Date().getTime());
}

// randomizeCircle()
//
// Randomizes css elements (size and position) of circle using Math.random functions.
function randomizeCircle() {
  respVoice.interesting();
  randomSize = Math.floor(Math.random()*190) + 70;
  randomXPosition = Math.floor(Math.random()*380);
  randomYPosition = Math.floor(Math.random()*90);
  $circle.css("height", randomSize + "px");
  $circle.css("width", randomSize + "px");
  $circle.css("right", randomXPosition + "px");
  $circle.css("bottom", randomYPosition + "px");
}

// getEmoji(emo)
//
// Randomizes emoji on button click and updates it on the thumbnail.
function getEmoji(emo) {
  $('#randomizeEmoji').on('click', function() {
    respVoice.really();
    emoji = getRandomElement(emo.emoji);
    $emoji.text(emoji);
  });
}

// addSpice()
//
// Creates button for customization at end of title.
// Adds question marks and exclamation marks, on every click.
function addSpice() {
  // Add button that adds question marks
  $('</br><button id="question" class="ui-button ui-widget ui-corner-all">Add ❔</button>').insertAfter("#randomizeEmoji");
  $('#question').on('click', function() {
    respVoice.confused();
    $('#titleOutput').append("?");
  });
  // Add button that adds exclamation marks
  $('<button id="exclamation" class="ui-button ui-widget ui-corner-all">Add ❕</button>').insertAfter("#question");
  $('#exclamation').on('click', function() {
    respVoice.amazed();
    $('#titleOutput').append("!");
  });
}

// getRandomElement(arr)
//
// Takes an array in argument and returns a random item of the array
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
