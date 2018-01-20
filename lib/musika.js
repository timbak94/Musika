import Game from './game';
import Track from './track';
import { BEATMAP } from '../songs/ramune_beatmap.js';
import ScoreBoard from './score_board';
import Overlay from './overlay';

const addDancer = () => {
  let dancer = document.createElement("IMG");
  dancer.src = "Images/miku_dance.gif";
  dancer.className = "animated fadeInDown cheerleader";
  document.getElementsByClassName("cheerleader-container")[0].appendChild(dancer);
};

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(()=>{addDancer();}, 1000 );
  setTimeout(()=>{addDancer();}, 5000 );
  setTimeout(()=>{addDancer();}, 10000 );
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
  new Game(track, ctx, 150, BEATMAP).start();
});
