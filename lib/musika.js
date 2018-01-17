import Game from './game';
import Track from './track';

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.width = 600;
  canvasEl.height = 1000;

  const ctx = canvasEl.getContext("2d");
  const track = new Track();
  new Game(track, ctx).start();
});
