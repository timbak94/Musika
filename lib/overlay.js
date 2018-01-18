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
    this.ctx.strokeRect(20, 525, 100, 25);
    this.ctx.strokeRect(140, 525, 100, 25);
    this.ctx.strokeRect(260, 525, 100, 25);
    this.ctx.strokeRect(380, 525, 100, 25);
    this.lineBuilder();
  }

  lineBuilder() {
    [20, 140, 260, 380].forEach( (el) => {
      this.ctx.beginPath();
      this.ctx.lineWidth = 2;
      this.ctx.filter = "blur(1px)";
      this.ctx.moveTo(el + 50, 20);
      this.ctx.lineTo(el + 50,480);
      this.ctx.stroke();
    });
  }
}

export default Overlay;
