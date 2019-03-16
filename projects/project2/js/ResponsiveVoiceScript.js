/*****************
ResponsiveVoiceScript

******************/

function ResponsiveVoiceScript() {
}

// Start message
ResponsiveVoiceScript.prototype.start = function() {
  let begin = 'Yo! Create your own hip, cool, and most effective clickbait thumbnail Now!';
  responsiveVoice.speak(begin,'UK English Female');
}

// Fill form before generating thumbnail message
ResponsiveVoiceScript.prototype.fillForm = function() {
  let fill = 'Please randomize or write down the title and sponsor and click submit to proceed';
  responsiveVoice.speak(fill,'UK English Female');
}

// Sponsor message
ResponsiveVoiceScript.prototype.enterSponsor = function(sponsorSuggestion) {
  let denySponsor = 'This company has cancelled their sponsorship with you. However, '+ sponsorSuggestion +' are willing to work with you instead.';
  responsiveVoice.speak(denySponsor,'UK English Female');
}

// Title message
ResponsiveVoiceScript.prototype.impressive = function(title) {
  responsiveVoice.speak(title + '? What is this about? I\'d click on that instantly!','UK English Female');
}

// Generating thumbnail message
ResponsiveVoiceScript.prototype.completeForm = function() {
  let completion = 'Your Generated Thumbnail is Complete. When you\'re done customizing, just screenshot the thing. No one cares about quality nowdays anyway';
  responsiveVoice.speak(completion,'UK English Female');
}

// Randomize background
ResponsiveVoiceScript.prototype.surprised = function() {
  responsiveVoice.speak('Wow!','UK English Female');
}

// Randomize circle (information target)
ResponsiveVoiceScript.prototype.interesting = function() {
  responsiveVoice.speak('interesting','UK English Female');
}

// Randomize emoji
ResponsiveVoiceScript.prototype.really = function() {
  responsiveVoice.speak('nice','UK English Female');
}

// Add exclamation mark
ResponsiveVoiceScript.prototype.amazed = function() {
  responsiveVoice.speak('Oh my god!','UK English Female');
}

// Add question mark
ResponsiveVoiceScript.prototype.confused = function() {
  responsiveVoice.speak('No way!','UK English Female');
}
