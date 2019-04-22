"use strict";

/*****************

Mood Assistant
Melissa Lim

******************/

$(document).ready(setup);

let option;
let windowHeight;
let windowWidth;

let platforms;
let player;
let cursors;
let config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics : {
    default: "arcade",
    arcade: {
      gravity: { y: 500 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  },
  "transparent": true,
  "render.autoResize": false,
};
let game = new Phaser.Game(config);

function setup() {

  particlesJS.load('particles-js', 'assets/jsons/particles.json', function() {});

  $('span').on('click', optionClicked);

  windowHeight = $(window).height();
  windowWidth = $(window).width();
}

function preload() {
  this.load.image('ground', 'assets/images/platform.png');
  this.load.spritesheet(
    'player',
    'assets/images/player.png',
    {frameWidth: 32, frameHeight: 45}
  );
}

function create() {
  platforms = this.physics.add.staticGroup();

  platforms.create(windowWidth/2, 1239, 'ground').setScale(10).refreshBody();

  // Adds player sprite
  player = this.physics.add.sprite(30,1040, 'player');

  // Map-bounded
  player.setCollideWorldBounds(true);

  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
    frameRate: 5,
    repeat: -1
  });

  this.anims.create({
    key: 'turn',
    frames: [ { key: 'player', frame: 4 } ],
    frameRate: 10
  });

  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('player', { start: 5, end: 8 }),
    frameRate: 5,
    repeat: -1
  });


  cursors = this.input.keyboard.createCursorKeys();
  this.physics.add.collider(player, platforms);
}

function update() {

  if (cursors.left.isDown)
  {
    player.setVelocityX(-140);

    player.anims.play('left', true);
  }
  else if (cursors.right.isDown)
  {
    player.setVelocityX(140);

    player.anims.play('right', true);
  }
  else
  {
    player.setVelocityX(0);

    player.anims.play('turn');
  }

  if (cursors.up.isDown && player.body.touching.down)
  {
    player.setVelocityY(-330);
  }
}


function optionClicked() {
  $('#options').fadeOut(1);
  $('#greeting').fadeOut(500);

  option = this.innerHTML;
  if (option === "Happy") {
    particlesJS.load('particles-js', 'assets/jsons/petals-particles.json', function() {
      $("html").css("background","linear-gradient(to bottom, #2980b9, #6dd5fa, #ffffff)");
      $("#platformer").css("background","linear-gradient(to top, #56ab2f, #a8e063)");
    });
  }

  if (option === "Gloomy") {
    particlesJS.load('particles-js', 'assets/jsons/rain-particles.json', function() {
      $("html").css("background","linear-gradient(to bottom, #4b79a1, #283e51)");
      $("#platformer").css("background","linear-gradient(to bottom, #485563, #29323c)");
    });
  }

  if (option === "Nostalgic") {
    particlesJS.load('particles-js', 'assets/jsons/leaves-particles.json', function() {
      $("html").css("background","linear-gradient(to top, #f0cb35, #56ab2f)");
      $("#platformer").css("background","linear-gradient(to top, #f12711, #f5af19)");
    });
  }

  if (option === "Chilly") {
    particlesJS.load('particles-js', 'assets/jsons/snow-particles.json', function() {
      $("html").css("background","linear-gradient(to bottom, #83a4d4, #b6fbff)");
      $("#platformer").css("background","linear-gradient(to bottom, #b2fefa, #0ed2f7)");
    });
  }

  if (option === "Thoughtful") {
    particlesJS.load('particles-js', 'assets/jsons/stars-particles.json', function() {
      $("html").css("background","linear-gradient(to bottom, #0f2027, #203a43, #2c5364)");
      $("#platformer").css("background","transparent");
    });
  }

  // Add back button
  $('<span id="back">Change of mood?</span>').insertAfter("#greeting");

  // Fade in menu
  $("#back").on('click', function() {
    $('#back').fadeOut(50);
    $('#options').fadeIn(500);
    $('#greeting').fadeIn(500);
  })
}
