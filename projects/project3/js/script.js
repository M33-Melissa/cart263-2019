"use strict";

/*****************

Title of Project
Melissa Lim

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

$(document).ready(setup);

let option;

function setup() {
  particlesJS.load('particles-js', 'assets/particles.json', function() {});

  $('span').on('click', function() {
    $('#options').remove();
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
        // $("html").css("background","linear-gradient(to bottom, #c02425, #f0cb35)");

        $("html").css("background","linear-gradient(to bottom, #f4791f, #659999)");
      });
    }
  })
}
