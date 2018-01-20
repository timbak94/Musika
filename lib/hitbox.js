class HitBox {
  constructor(options) {
    this.value = options.value;
    this.game = options.game;
    if (options.value === 1) {
      this.pos = [20,525];
    } else if (options.value === 2) {
      this.pos = [140,525];
    } else if (options.value === 3) {
      this.pos = [260, 525];
    } else if (options.value === 4){
      this.pos = [380, 525];
    }
  }

  draw(ctx) {
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.filter = "blur(1px)";
    ctx.moveTo(this.pos[0] + 50, 20);
    ctx.lineTo(this.pos[0] + 50,480);
    ctx.stroke();
    ctx.strokeRect(this.pos[0],this.pos[1],100,25);
  }

  isCollidedWith(note) {
    if (
      (note.pos[1] < (this.pos[1] + 30)) &&
      (note.pos[1] > (this.pos[1] - 30))
    ) {
      return true;
    } else {
      return false;
    }
  }
}

export default HitBox;
