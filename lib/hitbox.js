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
    } else if (options.value === 4){
      this.pos = [150, 400];
    } else if (options.value === 5){
      this.pos = [200, 400];
    } else if (options.value === 6){
      this.pos = [250, 400];
    }
  }

  draw(ctx) {
    ctx.strokeStyle = "blue";
    ctx.filter = 'blur(1px)';
    ctx.strokeRect(this.pos[0],this.pos[1],30,20);
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
