import Game from './game';
import Track from './track';
import { BEATMAP } from '../songs/ramune_beatmap.js';
import { HASHMAP } from '../songs/hash_map.js';
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
  const board = new ScoreBoard();
  const track = new Track(board);
  new Overlay(ctx2);
  const play = document.getElementById("play");
  const menu = document.getElementsByClassName("menu")[0];
  const game = new Game(track, ctx, 150, BEATMAP);
  offset.addEventListener("change", () => {
    let map = [];
    for (var i = 0; i < parseInt(offset.value); i++) {
      map = map.concat(["", "", "", ""]);
    }
    game.beatMap = map.concat(BEATMAP);
  });
  play.addEventListener("click", () => {
    container.className = "canvas-holder animated fadeIn";
    menu.className = "animated fadeOut hidden";

    setTimeout(()=>{game.start();}, 5000);
  });


});
