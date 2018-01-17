import { Howl } from 'howler';

class Game {
  constructor(track, ctx, bpm, beatMap) {
    this.ctx = ctx;
    this.track = track;
    this.bpm = this.sixteenthCalc(bpm);
    this.beatMap = beatMap;
    this.startClock = this.startClock.bind(this);
    this.noteFeed = this.noteFeed.bind(this);
    this.song = new Howl({
      src: ['songs/ramune.mp3'],
      autoplay: false,
      loop: true,
      volume: 0.5,
      onload: () => {
        this.song.play();
      },
      onplay: () => {
        setTimeout(() => this.startClock(), this.bpm);
      },
      onend: function() {console.log('Finished!');}
    });
  }

  startClock() {
    this.clock = setInterval(()=>{this.noteFeed(this.beatMap)}, this.bpm );
  }

  sixteenthCalc(bpm) {
    return ((60 / bpm) / 2) * 100;
  }

  noteFeed(array) {
    if (array[0]) {
      array.shift()[0].split("").forEach((k) => {
        this.track.addNote(k);
      });
    }
  }

  bindKeyHandlers() {
    key("x", () => {this.track.addHitBox(this.ctx, 1);});
    key("c", () => {this.track.addHitBox(this.ctx, 2);});
    key("n", () => {this.track.addHitBox(this.ctx, 3);});
    key("m", () => {this.track.addHitBox(this.ctx, 4);});
    key("s", () => {this.track.addNote("s");});
    key("d", () => {this.track.addNote("d");});
    key("j", () => {this.track.addNote("j");});
    key("k", () => {this.track.addNote("k");});
  }

  start() {
    this.bindKeyHandlers();

    requestAnimationFrame(this.animate.bind(this));
  }

  animate() {
    this.track.checkCollision();

    this.track.moveNotes();
    this.track.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }
}

export default Game;
