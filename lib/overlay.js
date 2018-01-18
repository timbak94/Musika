class Overlay {
  constructor(ctx) {
    this.ctx = ctx;

    this.gradient= this.ctx.createLinearGradient(0,0,600,0);
    this.gradient.addColorStop("0","#c168fd");
    this.gradient.addColorStop("0.5","#68f5fd");
    this.gradient.addColorStop("1.0","#fd68b7");
    this.ctx.strokeStyle = this.gradient;
    this.builder();
  }

  builder() {
    this.ctx.draw
    this.ctx.strokeRect(15, 495, 70, 25);
    this.ctx.strokeRect(95, 495, 70, 25);
    this.ctx.strokeRect(175, 495, 70, 25);
    this.ctx.strokeRect(255, 495, 70, 25);
    this.ctx.strokeRect(335, 495, 70, 25);
    this.ctx.strokeRect(415, 495, 70, 25);
  }
}

export default Overlay;
