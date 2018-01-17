class Game {
  constructor(track, ctx) {
    this.ctx = ctx;
    this.track = track;
  }

  start() {
    requestAnimationFrame(this.animate.bind(this));
  }

  animate() {
    this.track.moveNotes();
    this.track.draw(this.ctx);
    this.track.hitBoxes(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }
}

export default Game;
