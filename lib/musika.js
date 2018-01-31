import Game from './game';
import Track from './track';
import { BEATMAP } from '../songs/pixel_beatmap.js';
import { BEATMAP2 } from '../songs/ramune_beatmap.js';
import ScoreBoard from './score_board';
import Overlay from './overlay';

document.addEventListener("DOMContentLoaded", () => {

  const offset = document.getElementById("offset");
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.width = 500;
  canvasEl.height = 600;
  const canvasEl2 = document.getElementById("canvas-overlay");
  canvasEl2.width = 500;
  canvasEl2.height = 600;
  const container = document.getElementsByClassName("canvas-holder")[0];
  const ctx = canvasEl.getContext("2d");
  const ctx2 = canvasEl2.getContext("2d");
  new Overlay(ctx2);
  const offsetValue = document.getElementById("offset-value");
  const play = document.getElementById("play");
  const menu = document.getElementsByClassName("menu")[0];
  const board = new ScoreBoard();
  const game = new Game(new Track(board), ctx, 150, BEATMAP, 1);
  const ramune = document.getElementById("ramune");
  const pixel = document.getElementById("pixel-galaxy");
  let buffer = [];
  let chosenBeat = BEATMAP;

  ramune.addEventListener("click", ()=>{
    board.song = "ramune";
    ramune.className = "chosen";
    pixel.className = "";
    game.select = 2;
    game.bpm = 75;
    game.beatMap = BEATMAP2;
    chosenBeat = BEATMAP2;
  });
  pixel.addEventListener("click", ()=>{
    board.song = "pixel";
    pixel.className = "chosen";
    ramune.className = "";
    game.select = 1;
    game.bpm = 150;
    game.BeatMap = BEATMAP;
    chosenBeat = BEATMAP;
  });

  offset.addEventListener("change", () => {
    offsetValue.innerText = offset.value;
    if (offset.value >= 0) {
      for (let i = 0; i < parseInt(offset.value); i++) {
        buffer = buffer.concat(["", "", "", ""]);
      }
    }
  });

  play.addEventListener("click", () => {
    if (buffer.length > 1) {
      game.beatMap = buffer.concat(chosenBeat);
    } else {
      for (let i =0; i < Math.abs(parseInt(offset.value)); i++) {
        game.beatMap = game.beatMap.slice(4);
      }
    }

    container.className = "canvas-holder animated fadeIn";
    menu.className = "hidden";
    setTimeout(()=>{game.start();}, 5000);
  });


});
