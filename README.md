# JS Project Proposal: Musika
---
## Backgorund 
Musika is a rythm game that can be loosly compared to the famous [DanceDanceRevolution](https://en.wikipedia.org/wiki/Dance_Dance_Revolution). The goal of Musika is to hit the notes that fall from the top of the screen when they line up with their indication bar at the bottom of the screen. The notes will be in time with the song, usually lining up with the melody. Players will recieve points reflecting how accurately they hit the note. 

## MVPs
Players will be able to:
1. See notes falling from the top of the screen towards the bottom in time with the music. 
2. Use the "S", "D", "J", and "K" buttons on their keyboard to hit falling notes when they line up with their corresponding target. 
3. Reieve notifications of how close they got to hitting their target and recieve points reflecting their accuracy. 
4. Increase the speed which notes fall. 
5. Choose between multiple difficulties. 

## Wireframes 

## Technologies 
This project will be implemented with the following technologies: 
* `JavaScript` for game logic
* `Howler.js` for audio control 
* `Webpack` to bundle js files

In addition to the entry file, there will be four scripts involved in this project: 

`note.js` : this script will handle the logic for how fast the note will fall and which column it will fall and how long it will be for. 

`note_hitter.js` : this script will handle the collision detection for the falling notes and the note hitter. 

`track.js` : this script will handle the logic for which column to pull the notes down to. It will be passed `note.js` instances and placed into their valued slot.

`game.js` : this script will handle playing the audio file and generating the notes. It will also display the user's score. 


Implementation Timeline

__Day 1__: Setup all Node modules, install `Howler.js`, and setup webpack. Refresh canvas and how to create shapes and have collision detection. Goals for the day:
- Get music playing.
- Setup track and render notes. 
- hit and destroy notes on key press. 

__Day 2__: Setup note generation. Test out two different approaches to note generation: 
1. Create an array with either blank items or strings of combinations of the 4 keys ("SDJK"). 
   * At every smallest beat for the song (which would be calculated by fiding how fast each 16th note of the song would be based on its BPM), the `game.js` will pop off the first entry of the array and use that information to create the `note.js` instance.
2. Create an object with timestamps of the song as keys and the keyboard buttons as values. 
   * At every smallest beat for the song, index into the hash with the playing audio's current time value. 

At this moment, I am leaning towards the first method.
Goals for this day: 
- Generate notes at a consistent and reliabl rate.
- Create a songmap for the song for users to play. 

__Day 3__: Create visual components for navigation and song difficulty selection. Crete links to profile and github. Finishing touches. 

Bonus Features 
- Multiple songs
- High score storing system 
- 
   
   
   
   
   
   
   
   
   
