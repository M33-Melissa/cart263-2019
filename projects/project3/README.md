Project 2: Clickbait Thumbnail Generator
==============

<div style="text-align: right">The title of my project is pretty self-explanatory. It is a program that generates video thumbnails using titles and company names given by either the user or randomly generated from JSON libraries.

The generated thumbnail consists of a randomized and blurred background image (from Unsplash using the website Lorem Picsum), adding to the mystery, there is a red circle closing-up on (really not) "important" details of the background. There is also the Responsive Voice API that is there to encourage you in your behavior.
The random functions are there to ease the user to mindlessly create the "effective thumbnail" if they don't feel like thinking of a title and a company. Alluding to how AIs are there to assist people with their laziness.

For the video title, the randomized function calls a JSON library of misleading headlines, which I thought was amusing. The randomized function of Sponsor name calls a library of company names. At first, I thought of taking an input title and replace each word with a randomized synonym from another JSON gallery. That would generate a nonsensical title that would be interesting, but I couldn't figure that out. The idea I kept though was to make the company names bootleg copies. To do that, I would take the input company name's letters and mix them up. My method of switch case could be refined as there are many different cases that need a closer look.

The narrative of the situation would be that you are a YouTuber working with a certain company. You are spending way too much time on making your YouTube clickbait thumbnail for a sponsored video. Suddenly, you are told that they have canceled their sponsorship. An alternative company is willing to work with you and their name is oddly similar to the previous one. However, you don't question it, since YouTube is a job and there is money to be earned.

This project was a challenge. I found it very difficult to find ideas to associate with the subject. Therefore, I ended up making something very closely related to the article, rather than indirectly referring to it. I focused my ideas on the concepts of generative randomness and attention retaining visuals.

I would've liked to apply more generative titles using another of DariusK's libraries (especially one called "encouraging words") and combine them with other random words and punctuation marks. What I think would be nice is also if I could spam the emojis and make them draggable. Maybe also making the red circle scalable and draggable. However, I feel like there is something to the forced randomness that makes it what it is, along with the forced randomized background. The lack of control on those elements is what forces someone to make a double take to try to understand the link between the title, background and focus point. The time spent observing the image is actually wasted on a thumbnail of a video's content that has probably nothing to do with any of these elements. This is the nature of "clickbait" culture. You lost when you spent too much time looking at it, and you lost even further if you end up clicking on it.
</div>

__References__
https://github.com/dariusk/corpora/blob/master/data/corporations/fortune500.json
https://github.com/dariusk/corpora/blob/master/data/words/crash_blossoms.json
https://github.com/dariusk/corpora/blob/master/data/words/emoji/emoji.json
https://picsum.photos/
https://fonts.google.com/specimen/PT+Sans+Narrow
https://fonts.google.com/specimen/Bowlby+One+SC?selection.family=Bowlby+One+SC

Bonus:
My friend got this funny result from the thumbnail generator: https://media.discordapp.net/attachments/361337113670844436/556359239338295297/unknown.png
