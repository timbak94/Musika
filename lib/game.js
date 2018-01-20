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
      loop: true,
      volume: 0.5,
      onload: () => {
        this.song.play();
      },
      onplay: () => {
        console.log(new Date().getTime());
        setTimeout(() => this.startClock(), this.bpm);
      },
      onend: function() {console.log('Finished!');}
    });
    this.hitEffect = new Howl({
      src: ['songs/sample.wav'],
      autoplay: false,
      loop: false,
      volume: .3
    });
  }

  startClock() {
    this.clock = setInterval(()=>{this.noteFeed(this.beatMap);},this.bpm );
  }

  sixteenthCalc(bpm) {
    return ((60 / bpm) / 2) * 100;
  }

  noteFeed(array) {
    console.log(this.song.seek());
    if (array.length > 0) {
      array.shift().split("").forEach((k) => {
        this.track.addNote(k);
      });
    }
  }

  bindKeyHandlers() {
    key("x", () => {this.hitEffect.play();
      this.track.addHitBox(this.ctx, 1);});
    key("c", () => {this.hitEffect.play();
      this.track.addHitBox(this.ctx, 2);});
    key("n", () => {this.hitEffect.play();
      this.track.addHitBox(this.ctx, 3);});
    key("m", () => {this.hitEffect.play();
      this.track.addHitBox(this.ctx, 4);});

    key("s", () => {this.track.addNote("s");});
    key("d", () => {this.track.addNote("d");});
    key("j", () => {this.track.addNote("j");});
    key("k", () => {this.track.addNote("k");});

  }

  start() {
    this.bindKeyHandlers();
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    const timeDelta = time - this.lastTime;
    this.track.checkCollision();
    this.track.moveNotes(timeDelta);
    this.track.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }




}

export default Game;
