import { Howl } from 'howler';


class Game {
  constructor(track, ctx, bpm, beatMap, select) {
    this.ctx = ctx;
    this.track = track;
    this.bpm = bpm;
    this.beatMap = beatMap;
    this.startClock = this.startClock.bind(this);
    this.noteFeed = this.noteFeed.bind(this);
    this.chosen = this.song;
    this.select = select;
    this.song = new Howl({
      src: ['songs/pixgal.mp3'],
      autoplay: false,
      loop: false,
      volume: 0.5,
      onplay: () => {
        setTimeout(() => this.startClock(), this.bpm);
      },
      onstop: () => {
        this.resultScreen();
      }
    });
    this.song2 = new Howl({
      src: ['songs/ramune-slow.wav'],
      autoplay: false,
      loop: false,
      volume: 0.5,
      onplay: () => {
        setTimeout(() => this.startClock(), this.bpm);
      },
      onstop: () => {
        this.resultScreen();
      }
    });
    this.victory = new Howl({
      src: ['songs/victory.mp3'],
      autoplay: false, 
      loop: false, 
      volume: 0.3
    });
  }


  startClock() {
    this.clock = setInterval(()=>{this.noteFeed(this.beatMap);},this.sixteenthCalc(this.bpm) );
  }

  sixteenthCalc(bpm) {
    return ((60 / bpm) / 4) * 100;
  }

  noteFeed(array) {
    if (array.length > 0) {
      array.shift().split("").forEach((k) => {
        this.track.addNote(k);
      });
    } else {
      this.end();
    }
  }

  end() {
    clearInterval(this.clock);
    this.chosen.fade(0.5, 0.0, 5000);
    setTimeout(()=>{
      this.chosen.stop();
      clearInterval(this.clock);
    }, 6000);
  }

  resultScreen() {
    this.victory.play();
    let screen = document.getElementsByClassName("canvas-holder")[0];
    screen.className = "canvas-holder animated flip";
    setTimeout(()=>{screen.className = "canvas-holder animated fadeOut";}, 1500);
    setTimeout(()=>{screen.className = "canvas-holder hidden";}, 1700);
    setTimeout(()=>{document.getElementById("result").className = "menu animated fadeIn";}, 1800);
    setTimeout(()=>{document.getElementById("result").className = "menu";}, 2100);
  }

  bindKeyHandlers() {
    key("s", () => {
      this.track.addHitBox(this.ctx, 1);

    });
    key("d", () => {
      this.track.addHitBox(this.ctx, 2);

    });
    key("j", () => {
      this.track.addHitBox(this.ctx, 3);

    });
    key("k", () => {
      this.track.addHitBox(this.ctx, 4);

    });

    // key("s", () => {this.track.addNote("s");});
    // key("d", () => {this.track.addNote("d");});
    // key("j", () => {this.track.addNote("j");});
    // key("k", () => {this.track.addNote("k");});

  }

  start() {

    if (this.select === 1) {
      this.chosen = this.song;
    } else {
      this.chosen = this.song2;
    }

    document.getElementsByClassName("cheerleader")[0].className = "animated slideInRight cheerleader";
    this.bindKeyHandlers();
    this.chosen.play();
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
