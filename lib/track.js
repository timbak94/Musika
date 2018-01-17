import Note from './note.js';

class Track {
  constructor(actionBar) {
    this.notes = [];
    this.hitBox = [];
    this.addNote("s");
    this.addNote("d");
    this.addNote("j");
    this.addNote("k");
  }

  addNote(key) {
    switch(key) {
      case "s":
        this.notes.push(new Note({pos: [0,0], value: "s", game: this}));
        break;
      case "d":
        this.notes.push(new Note({pos: [50,0], value: "s", game: this}));
        break;
      case "j":
        this.notes.push(new Note({pos: [100,0], value: "s", game: this}));
        break;
      case "k":
        this.notes.push(new Note({pos: [150,0], value: "s", game: this}));
        break;
    }
  }

  hitBoxes(ctx) {
    ctx.fillRect(100,0,30,10);
  }

  draw(ctx) {
    ctx.clearRect(0,0,600,1000);
    ctx.fillStyle = "#000000";

    this.notes.forEach((note) => {
      note.draw(ctx);
    });
  }

  moveNotes() {
    this.notes.forEach((note) => {
      note.fall();
    });
  }
}

export default Track;
