import { Howl } from 'howler';
const COLORS = ["red", "orange", "yellow", "green", "blue", "purple"];

class ScoreBoard {
  constructor() {
    this.score = 0;
    this.combo = 0;
    this.scoreColorIdx = 0;
    this.comboColorIdx = 0;
    this.message = "";
    this.cheer = document.getElementsByClassName("cheerleader")[0];
    this.miss = document.getElementsByClassName("miss")[0];
    this.screen = document.getElementById("canvas-overlay");
    this.jump = document.getElementsByClassName("miku")[0];
    this.board = document.getElementsByClassName("score-board")[0];
    this.comboBoard = document.getElementsByClassName("combo-board")[0];
    this.sugoi = new Howl({
      src: ['songs/servals-sugoi.mp3'],
      autoplay: false,
      loop: false,
      volume: .4
    });
  }

  addScore(val) {
    this.score = this.score + val;
    this.update();
    if (this.score % 2000 === 0) {
      this.board.style.color = COLORS[this.scoreColorIdx];
      this.scoreColorIdx ++;
      this.cheer.className = "animated bounce cheerleader";
      setTimeout(()=> {
        this.cheer.className = "cheerleader";
      }, 1000);
    }

    if (this.scoreColorIdx > 5) {
      this.scoreColorIdx = 0;
    }
  }

  resetCombo() {
    this.cheer.src = "Images/mikudance3.png";
    this.miss.className = "animated shake miss";
    this.comboColorIdx = 0;
    this.comboBoard.style.color = "white";
    this.combo = 0;
    this.update();
    setTimeout(()=>{
      this.cheer.src = "Images/miku_dance.gif";
      this.miss.className = "animated fadeOut miss";
  }, 500);
  }

  addCombo(){
    this.combo ++;
    if (this.combo % 20 === 0) {
      this.comboBoard.style.color = COLORS[this.comboColorIdx];
      this.comboColorIdx ++;
      this.sugoi.play();
      this.jump.className = "miku animated bounceInDown";
      setTimeout(()=> {
        this.jump.className = "miku animated bounceOutUp";
      }, 1000);
    }
  }

  update() {
    this.board.innerText = "SCORE: " + this.score.toString();
    this.comboBoard.innerText = "COMBO: " + this.combo.toString();
  }
}

export default ScoreBoard;
