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
      src: ['songs/pixgal.mp3'],
      autoplay: false,
      loop: false,
      volume: 0.5,
      onplay: () => {
        setTimeout(() => this.startClock(), this.bpm);
      },
      onend: function() {console.log('Finished!');}
    });
  }


  startClock() {
    this.clock = setInterval(()=>{this.noteFeed(this.beatMap);},this.bpm );
  }

  sixteenthCalc(bpm) {
    return ((60 / bpm) / 4) * 100;
  }

  noteFeed(array) {
    if (array.length > 0) {
      array.shift().split("").forEach((k) => {
        this.track.addNote(k);
      });
    }
  }

  bindKeyHandlers() {
    key("s", () => {
      this.track.addHitBox(this.ctx, 1);});
    key("d", () => {
      this.track.addHitBox(this.ctx, 2);});
    key("j", () => {
      this.track.addHitBox(this.ctx, 3);});
    key("k", () => {
      this.track.addHitBox(this.ctx, 4);});

    // key("s", () => {this.track.addNote("s");});
    // key("d", () => {this.track.addNote("d");});
    // key("j", () => {this.track.addNote("j");});
    // key("k", () => {this.track.addNote("k");});

  }

  start() {
    document.getElementsByClassName("cheerleader")[0].className = "animated slideInRight cheerleader";
    this.bindKeyHandlers();
    this.song.play();
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
