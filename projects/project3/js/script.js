"use strict";

/*****************

Moodify
Melissa Lim

Depending on the user's mood, different scenes can be set.
Scenes are accompanied by particle effects, music, and a platformer game with a walking dog.
They are set up in the sceneManager() function.
The library of particlesJS was used for their particle animation and interactivity.
Phaser 3 was used for the platformer game with physics, colliders, and sprite animations.

******************/

$(document).ready(setup);

// Initialize document variables
let $html = $('html');
let windowHeight;
let windowWidth;

// Initialize variables used for audio management
let audioIsPlaying = false;
let audioVolume = 0.1;
let playlist = [new Audio("assets/sounds/petals.mp3"),new Audio("assets/sounds/rain.mp3"),new Audio("assets/sounds/leaves.mp3"),new Audio("assets/sounds/snow.mp3"),new Audio("assets/sounds/stars.mp3"), new Audio("assets/sounds/underwater.mp3")];
let currentScene;

// Initialize platformer game variables
let platforms;
let player;
let playerVX = 150;
let playerVY = 450;
let playerSlideVX = 300;
let cursors;
let keys;
let lastPositionLeft = false;
let config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics : {
    default: "arcade",
    arcade: {
      gravity: { y: 1100 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  },
  "transparent": true
};
let game = new Phaser.Game(config);

// setup()
//
// Assigns variables and calls menu function
function setup() {
  windowHeight = $(window).height();
  windowWidth = $(window).width();
  particlesJS.load('particles-js', 'assets/jsons/particles.json', function() {});

  $('span').on('click', menu);
}

// menu()
//
// Display menu option changes
function menu() {
  // On choice, option menu fades out
  $('#options').fadeOut(1);
  $('#greeting').fadeOut(500);
  // Back and audio menu fades in
  $('#audio').show();
  $('#audio').on('click', audioButton);
  $('#back').show();
  // When back option chosen, options menu fades back in
  $('#back').on('click', function() {
    $('#back').fadeOut(50);
    $('#options').fadeIn(500);
    $('#greeting').fadeIn(500);
  });
  // Uses html value of the option that was clicked on to decide which scene to display
  sceneManager(this.innerHTML);
}

// sceneManager(option)
//
// Takes in argument of option chosen and set up scenes accordingly
// Change particles json, background and platform colors, song, and activates audio button on scene selected.
// Also manages audio, assign a number to the current scene and associate it to a song in the array.
function sceneManager(option) {
  // Happy scene with petal particles
  if (option === "Happy") {
    particlesJS.load('particles-js', 'assets/jsons/petals-particles.json', function() {
      $html.css("background","linear-gradient(to bottom, #2980b9, #6dd5fa, #ffffff)");
      $('#platformer').css("background","linear-gradient(to top, #56ab2f, #a8e063)");
      $('#audio').html('<i class="fas fa-volume-up"></i>');
      audioManager(playlist[0]);
      currentScene = 0;
    });
  }
  // Gloomy scene with raindrop particles
  if (option === "Gloomy") {
    particlesJS.load('particles-js', 'assets/jsons/rain-particles.json', function() {
      $html.css("background","linear-gradient(to bottom, #4b79a1, #283e51)");
      $('#platformer').css("background","linear-gradient(to bottom, #485563, #29323c)");
      $('#audio').html('<i class="fas fa-volume-up"></i>');
      audioManager(playlist[1]);
      currentScene = 1;
    });
  }
  // Nostalgic scene with leaf particles
  if (option === "Nostalgic") {
    particlesJS.load('particles-js', 'assets/jsons/leaves-particles.json', function() {
      $html.css("background","linear-gradient(to top, #f0cb35, #56ab2f)");
      $('#platformer').css("background","linear-gradient(to top, #f12711, #f5af19)");
      $('#audio').html('<i class="fas fa-volume-up"></i>');
      audioManager(playlist[2]);
      currentScene = 2;
    });
  }
  // Chilly scene with snow particles
  if (option === "Chilly") {
    particlesJS.load('particles-js', 'assets/jsons/snow-particles.json', function() {
      $html.css("background","linear-gradient(to bottom, #83a4d4, #b6fbff)");
      $('#platformer').css("background","linear-gradient(to bottom, #b2fefa, #0ed2f7)");
      $('#audio').html('<i class="fas fa-volume-up"></i>');
      audioManager(playlist[3]);
      currentScene = 3;
    });
  }
  // Thougtful scene with star particles
  if (option === "Thoughtful") {
    particlesJS.load('particles-js', 'assets/jsons/stars-particles.json', function() {
      $html.css("background","linear-gradient(to bottom, #0f2027, #203a43, #2c5364)");
      $('#platformer').css("background","transparent");
      $('#audio').html('<i class="fas fa-volume-up"></i>');
      audioManager(playlist[4]);
      currentScene = 4;
    });
  }
  // Submerged scene with fish particles
  if (option === "Submerged") {
    particlesJS.load('particles-js', 'assets/jsons/fish-particles.json', function() {
      $html.css("background","linear-gradient(to top, #1a2980, #26d0ce)");
      $('#platformer').css("background","linear-gradient(to top, #141e30, #243b55)");
      $('#audio').html('<i class="fas fa-volume-up"></i>');
      audioManager(playlist[5]);
      currentScene = 5;
    });
  }
}

// audioManager(music)
//
// Assigns which song to play to selected scene
function audioManager(music) {
  // When no audio is playing, on scene choice, play song
  if(!audioIsPlaying) {
    audioIsPlaying = true;
    music.loop = true;
    music.volume = audioVolume;
    music.play();

  } else {
    // When audio is already playing from previous scene, pause it and play the current scene's song
    for(let i = 0; i < playlist.length; i++) {
      playlist[i].pause();
      playlist[i].currentTime = 0;
    }
    audioIsPlaying = true;
    music.loop = true;
    music.volume = audioVolume;
    music.play();
  }
}

// audioButton()
//
// Mute and unmute button with visual change
function audioButton() {
  //When audio is playing, on button click pause song
  if(audioIsPlaying) {
    playlist[currentScene].pause();
    audioIsPlaying = false;
    this.innerHTML = '<i class="fas fa-volume-mute"></i>';

  } else {
    //When no audio is playing, on button click play song
    playlist[currentScene].play();
    audioIsPlaying = true;
    this.innerHTML = '<i class="fas fa-volume-up"></i>';
  }
}

//////////////////////////////////////////////////////////////////////
//                      Platformer game corner                      //
//////////////////////////////////////////////////////////////////////

// preload()
//
// Loads character and platform images/sprites
function preload() {
  this.load.image('ground', 'assets/images/platform.png');
  this.load.spritesheet(
    'player',
    'assets/images/player.png',
    {frameWidth: 32, frameHeight: 45}
  );
}

// create()
//
// Adds to scene platforms, character with walking animation, and world physics and boundaries.
function create() {

  // Adds platform with physics engine
  platforms = this.physics.add.staticGroup();
  platforms.create(windowWidth/2, 1239, 'ground').setScale(10).refreshBody();

  // Adds player sprite
  player = this.physics.add.sprite(30,1040, 'player');

  // Player is map-bounded
  player.setCollideWorldBounds(true);

  // Takes sprite image and determinte keyframes according to player direction
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
    key: 'turn-left',
    frames: [ { key: 'player', frame: 9 } ],
    frameRate: 10
  });
  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('player', { start: 5, end: 8 }),
    frameRate: 5,
    repeat: -1
  });

  // Create variable holding keyboard input
  cursors = this.input.keyboard.createCursorKeys();
  keys = this.input.keyboard.addKeys({
    up: 'W',
    left: 'A',
    right: 'D',
    slide: 'SPACE'
  });

  // Set collision between player and platform
  this.physics.add.collider(player, platforms);
}

// update()
//
// Update character movement animation and velocity on key press
function update() {

  if(cursors.left.isDown || keys.left.isDown) {
    player.setVelocityX(-playerVX);
    player.anims.play('left', true);
    lastPositionLeft = true;

  } else if(cursors.right.isDown || keys.right.isDown) {
    player.setVelocityX(playerVX);
    player.anims.play('right', true);
    lastPositionLeft = false;

  } else if(lastPositionLeft) {
    player.setVelocityX(0);
    player.anims.play('turn-left');

  } else {
    player.setVelocityX(0);
    player.anims.play('turn');
  }

  if((cursors.up.isDown || keys.up.isDown) && player.body.touching.down) {
    player.setVelocityY(-playerVY);
  }

  if(keys.slide.isDown && player.body.touching.down) {
    if(player.body.velocity.x!==0) {
      if(lastPositionLeft) {
        player.setVelocityX(-playerSlideVX);
        player.anims.play('turn-left');

      } else {
        player.setVelocityX(playerSlideVX);
        player.anims.play('turn');

      }
    }
  }
}
