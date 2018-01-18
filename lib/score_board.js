class ScoreBoard {
  constructor() {
    this.score = 0;
    this.combo = 0;
    this.message = "";
  }

  addScore(val) {
    this.score = this.score + val;
    this.update();
  }

  resetCombo() {
    this.combo = 0;
    this.update();
  }

  addCombo(){
    this.combo ++;
  }

  update() {
    let board = document.getElementsByClassName("score-board");
    board[0].innerText = this.score.toString();

    let combo = document.getElementsByClassName("combo-board");
    combo[0].innerText = this.combo.toString();
  }
}

export default ScoreBoard;
