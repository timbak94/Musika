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
    this.boxBuilder();
    this.lineBuilder();
  }

  boxBuilder() {
    [20, 140, 260, 380].forEach((el) => {
      this.ctx.strokeRect(el, 525, 100, 25);
      this.diamondMaker(el, 525);
    });
  }

  diamondMaker(x, y) {
    this.ctx.beginPath();
    this.ctx.moveTo(x, y + 12.5);
    this.ctx.lineTo(x + 50, y + 25);
    this.ctx.lineTo(x + 100, y + 12.5);
    this.ctx.lineTo(x + 50, y );
    this.ctx.lineTo(x, y + 12.5);
    this.ctx.stroke();
  }

  lineBuilder() {
    this.ctx.lineWidth = 2;
    [20, 140, 260, 380].forEach( (el) => {
      this.ctx.beginPath();
      this.ctx.moveTo(el + 50, 20);
      this.ctx.lineTo(el + 50,480);
      this.ctx.stroke();
    });
  }
}

export default Overlay;
