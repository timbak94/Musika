class Note {
  constructor(options) {
    this.value = options.value;
    this.game = options.game;
    this.pos = options.pos;
    this.type = options.type;
  }

  draw(ctx) {
    ctx.fillStyle = "#80ffff";
    ctx.fillRect(this.pos[0],this.pos[1],100,20);
  }



  fall() {
    this.pos = [this.pos[0], this.pos[1] + 8.5];
  }


}

export default Note;
