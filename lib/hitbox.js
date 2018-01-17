class HitBox {
  constructor(options) {
    this.value = options.value;
    this.game = options.game;
    if (options.value === 1) {
      this.pos = [0,400];
    } else if (options.value === 2) {
      this.pos = [50,400];
    } else if (options.value === 3) {
      this.pos = [100, 400];
    } else {
      this.pos = [150, 0];
    }
  }

  draw(ctx) {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.pos[0],this.pos[1],30,20);
  }

  isCollidedWith(note) {
    if (
      (note.pos[1] < (this.pos[1] + 20)) &&
      (note.pos[1] > (this.pos[1] - 20))
    ) {
      return true;
    } else {
      return false;
    }
  }
}

export default HitBox;
