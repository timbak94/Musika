import Note from './note.js';
import HitBox from './hitbox.js';

class Track {
  constructor(board) {

    this.board = board;
    this.note1 = [];
    this.note2 = [];
    this.note3 = [];
    this.note4 = [];
    this.note5 = [];
    this.note6 = [];
    this.hitBoxes = [];
  }

  addNote(key) {
    switch(key) {
      case "s":
        this.note1.push(new Note({pos: [20,0], value: 1, game: this}));
        break;
      case "d":
        this.note2.push(new Note({pos: [140,0], value: 2, game: this}));
        break;
      case "j":
        this.note3.push(new Note({pos: [260,0], value: 3, game: this}));
        break;
      case "k":
        this.note4.push(new Note({pos: [380,0], value: 4, game: this}));
        break;
    }
  }

  addHitBox(ctx, val) {
    let box = new HitBox({value: val, game: this});
    this.hitBoxes.push(box);
    setTimeout(() => {this.remove(box);}, 100);
  }

  hitDraw(ctx) {
    ctx.fillStyle = "blue";
    ctx.fillRect(100,0,30,10);
  }

  allItems() {
    return [].concat(this.hitBoxes, this.note1, this.note2, this.note3, this.note4, this.note5, this.note6);
  }

  draw(ctx) {
    ctx.clearRect(0,0,500,600);
    this.allItems().forEach((obj) => {
      if (obj instanceof Note) {
        obj.draw(ctx);
      } else if (obj instanceof HitBox) {
        obj.draw(ctx);
      }
    });
  }

  checkCollision() {
    this.hitBoxes.forEach((hitbox) => {
      eval(`this.note${hitbox.value}`).forEach((note) => {
        if (hitbox.isCollidedWith(note)) {
          console.log((hitbox.pos[1]+10) - (note.pos[1]-10));
          this.addScore();
          this.addCombo();
          this.remove(note);
        }
      });
    });
  }

  addCombo() {
    this.board.addCombo();
  }

  resetCombo() {
    this.board.resetCombo();
  }

  addScore() {
    this.board.addScore(100);
  }

  updateScore() {
    this.board.update();
  }

  isOutOfBounds(note) {
    if (note.pos[1] > 600) {
      return true;
    } else {
      return false;
    }
  }

  allNotes() {
    return [].concat(this.note1, this.note2, this.note3, this.note4);
  }


  moveNotes(time) {
    this.allNotes().forEach((note) => {
      if (this.isOutOfBounds(note)) {
        this.resetCombo();
        this.remove(note);
      } else {
        note.fall(time);
      }
    });
  }

  remove(obj) {
    if (obj instanceof Note) {
      eval(`this.note${obj.value}`).splice(eval(`this.note${obj.value}`).indexOf(obj), 1);
    } else {
      this.hitBoxes.splice(this.hitBoxes.indexOf(obj), 1);
    }
  }
}

export default Track;
