import Game from './game';
import Track from './track';
import { BEATMAP } from '../songs/ramune_beatmap.js';
import ScoreBoard from './score_board';
import Overlay from './overlay';

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.width = 500;
  canvasEl.height = 600;

  const canvasEl2 = document.getElementById("canvas-overlay");
  canvasEl2.width = 500;
  canvasEl2.height = 600;

  const ctx = canvasEl.getContext("2d");
  const ctx2 = canvasEl2.getContext("2d");

  const board = new ScoreBoard();
  const track = new Track(board);
  new Overlay(ctx2);
  new Game(track, ctx, 120, BEATMAP).start();
});
