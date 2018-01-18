class HitBox {
  constructor(options) {
    this.value = options.value;
    this.game = options.game;
    if (options.value === 1) {
      this.pos = [15,500];
    } else if (options.value === 2) {
      this.pos = [95,500];
    } else if (options.value === 3) {
      this.pos = [175, 500];
    } else if (options.value === 4){
      this.pos = [255, 500];
    } else if (options.value === 5){
      this.pos = [335, 500];
    } else if (options.value === 6){
      this.pos = [415, 500];
    }
  }

  draw(ctx) {
    ctx.strokeStyle = "blue";
    ctx.filter = 'blur(1px)';
    ctx.strokeRect(this.pos[0],this.pos[1],70,20);
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
