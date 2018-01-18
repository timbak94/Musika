import Game from './game';
import Track from './track';
import { BEATMAP } from '../songs/ramune_beatmap.js';


document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.width = 500;
  canvasEl.height = 600;

  const ctx = canvasEl.getContext("2d");
  const track = new Track();
  new Game(track, ctx, 120, BEATMAP).start();
});
