"use strict";

/*****************

Title of Project
Melissa Lim

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

$(document).ready(setup);

let option;
let config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  scene: {
    preload: preload,
    create: create,
    update: update
  },
  "transparent": true,
  "render.autoResize": true,
  physics : {
    default: "arcade"
  }
};
let windowHeight;
let windowWidth;

let game = new Phaser.Game(config);

function setup() {

  particlesJS.load('particles-js', 'assets/particles.json', function() {});

  $('span').on('click', optionClicked);

  windowHeight = $(window).height();
  windowWidth = $(window).width();
}

function preload() {

  this.load.image('star', 'assets/images/star.png');
}

function create() {
  // this.add.image(windowWidth/2,windowHeight/2, 'star');
}

function update() {

}


function optionClicked() {
  $('#options').fadeOut(1);
  $('#greeting').fadeOut(500);

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

  $('<span id="back">Change of mood?</span>').insertAfter("#greeting");

  $("#back").on('click', function() {
    $('#back').fadeOut(50);
    $('#options').fadeIn(500);
    $('#greeting').fadeIn(500);
  })
}
