"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let height = window.innerHeight;
let width = window.innerWidth;

drawMaze();

function drawMaze() {
    for (let j = 0; j < height; j++) {
        for (let i = 0; i < width; i++) {
            let rand = Utils.randomNumber(0, 1);
            if (rand == 1) {
                context.lineWidth = 5;
                Utils.drawLine(i * 10, j * 10, 10 + i * 10, 10 + j * 10);
            } else {
                context.lineWidth = 5;
                Utils.drawLine(i * 10, 10 + j * 10, 10 + i * 10, j * 10);
            }
        }
    }
}