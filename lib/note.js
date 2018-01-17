class Note {
  constructor(options) {
    this.value = options.value;
    this.game = options.game;
    this.pos = options.pos;
  }

  draw(ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.pos[0],this.pos[1],30,10);
  }

  fall() {
    this.pos = [this.pos[0], this.pos[1] + 6];
  }
}

export default Note;
