"use strict";

/*****************

Title of Project
Melissa Lim

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

$(document).ready(setup);

let option;

var isFullScreen = false;

function setup() {
  createCanvas(displayWidth,displayHeight/5);
  particlesJS.load('particles-js', 'assets/particles.json', function() {});

  $('span').on('click', function() {
    $('#options').fadeOut();
    $('#greeting').fadeOut(1000);

    option = this.innerHTML;
    if (option === "Happy") {
      particlesJS.load('particles-js', 'assets/petals-particles.json', function() {
        $("html").css("background","linear-gradient(to bottom, #2980b9, #6dd5fa, #ffffff)");
      });
    }
    if (option === "Chilly") {
      particlesJS.load('particles-js', 'assets/snow-particles.json', function() {
        $("html").css("background","linear-gradient(to bottom, #83a4d4, #b6fbff)");
      });
    }
    if (option === "Gloomy") {
      particlesJS.load('particles-js', 'assets/rain-particles.json', function() {
        $("html").css("background","linear-gradient(to bottom, #4b79a1, #283e51)");
      });
    }
    if (option === "Thoughtful") {
      particlesJS.load('particles-js', 'assets/stars-particles.json', function() {
        $("html").css("background","linear-gradient(to bottom, #0f2027, #203a43, #2c5364)");
      });
    }
    if (option === "Nostalgic") {
      particlesJS.load('particles-js', 'assets/leaves-particles.json', function() {
        $("html").css("background","linear-gradient(to top, #f0cb35, #56ab2f)");
      });
    }
  })
}
function mousePressed() {
  // When the mouse is pressed we toggle the variable tracking fullscreen
  isFullScreen = !isFullScreen;
  // And set fullscreen to the result
  if(isFullScreen === false) {
    fullscreen(true);
  }
  // Now we calculate the desired height of the canvas based on whether we're
  // in fullscreen (and want displayHeight) or not (and want the regular height)
  var newHeight = 0;
  if (isFullScreen) {
    newHeight = displayHeight;
  }
  else {
    newHeight = height;
  }
  // Finally, using p5.dom's style() method we set the height and width of the
  // canvas element to the new height
  canvas.style("height:" + newHeight + "px");
  // And we calculate and set the width based on the ratio
  canvas.style("width:" + newHeight * canvasRatio + "px");
}

// draw()
//
// Description of draw()

function draw() {
}
