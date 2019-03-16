/*****************
  ResponsiveVoiceScript

******************/

function ResponsiveVoiceScript() {
}

ResponsiveVoiceScript.prototype.enterSponsor = function(sponsorSuggestion) {
  let denySponsor = 'This brand has cancelled their sponsorship with you '+ sponsorSuggestion +' are willing to work with you instead.';
    responsiveVoice.speak(denySponsor,'UK English Female');
}

ResponsiveVoiceScript.prototype.completeForm = function() {
  let completion = 'Your Generated Thumbnail is Complete... When you\'re done customizing, just screenshot the thing. No one cares about quality nowdays';
  responsiveVoice.speak(completion,'UK English Female');
}

ResponsiveVoiceScript.prototype.amazed = function() {
  responsiveVoice.speak('Wow','UK English Female');
}

ResponsiveVoiceScript.prototype.confused = function() {
  responsiveVoice.speak('What?','UK English Female');
}
