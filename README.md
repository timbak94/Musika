# Musika
[LIVE](https://timbak94.github.io/Musika/)

## Backgorund 
Musika is a rythm game that can be loosly compared to the famous [DanceDanceRevolution](https://en.wikipedia.org/wiki/Dance_Dance_Revolution). The goal of Musika is to hit the notes that fall from the top of the screen when they line up with their indication bar at the bottom of the screen. The notes will be in time with the song, usually lining up with the melody.

## How to Play
Use the "s", "d", "j", and "k" buttons to hit the notes as they fall when they line up with their respective hitbox. While at first, it may seem more intuitive to hit the notes purely on visual alignment, hitting them in time with the melody will prove more successful. 

If you are having initial issues lining up the notes in time with the music, try increasing or decreasing the visual offset before playing. Newer computers typically need to increase the offset, while older ones tend to decrease it. 

There are two songs: "Ramune" and "Pixel Galaxy". Ramune is primarily used as a warm up, to let players get the feel of the song. Pixel Galaxy is the main content of Musika. 

## Functionality
Musika runs with vanilla JS and canvas, along with audio handled by Howler.js for their useful callbacks. 

### Note Generation
By dividing up the BPM (beats per minute) of the song and figuring out how many miliseconds each 16th note should be generated, Musika is able to accuratley generate notes that, with proper knowledge of / good rhythmic sense, in time with the music.
Using this value of miliseconds-per-sixteenth, Musika will then unshift the first index of the beatmap array and check if there are characters in a string. If not, it will do nothing. If there are characters, Musika will generate the note for the specificed column in the string. For example. if the string had the content of "s", then 1 note in the first column of the game will generate. If the string had "sk", then 2 notes will be generated, one if the first and one in the last column. 

### Hit Detection
When pressing one of the hitbox buttons, Musika will generate a box with coordinates on the canvas element. If, in the lifespan of the hitbox, a note collides with it, then it will be registered as a hit and be removed from the game. Otherwise, the note is removed from the game when it reaches the bottom of the canvas, genearting the "miss" notification. 

### Score Handling 
Each successful hit of a note will increase the score by a fixed amount. Each consecutive hit after the first hit will increase a player's combo count. Upon missing a note, the combo count will reset to zero. Missed notes or abused spamming of hitboxes do not decrease the score. 

## Visual Perks
While playing, there is a mascot that dances along. Upon missing a note, she will look disgruntled. Upon reaching a multiple of 2000 points, she will do a little jump. Upon hitting consecutive combos of multiples of 40, another visual element will appear on screen, cheering players on. 

## Known Issues / Concerns
1. General concensus finds that the difficulty of Pixel Galaxy is very high. Consideration for changing the difficulty or adding a new one is in action. 
2. The visual offset for the two songs differ from each other. As in, on the same computer, the visual offset for Pixel Galaxy can be different than the visual offset for Ramune. 
3. Sometimes, the browser will stutter, causing the game to stutter as well. The music will be uninterrupted, but the notes will be a bit off. Usually the situation resolves itself and the game can be played normally but in rare cases, the note timing will be off for the rest of the song. 

## Future Updates 
1. Replay without refreshing page. 
2. More songs. 
3. More difficulties.
4. Saving High Scores. 

Thanks for reading all of this. The game is fun, I promise you. Check it out. 

Also while you're still here, you should take the guy who made this music: 
[Ujico](https://soundcloud.com/ujico/)
