"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let height = window.innerHeight;
let width = window.innerWidth;

drawMaze();

function drawMaze() {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);

    for (let j = 0; j < 71; j++) {
        for (let i = 0; i < 145; i++) {
            context.lineWidth = 5;
            let color = Math.random() * 360;
            context.strokeStyle = Utils.hsl(color, 100, 40);
            let rand = Utils.randomNumber(0, 1);

            if (rand == 1) {
                Utils.drawLine(i * 10, j * 10, 10 + i * 10, 10 + j * 10);
            } else {
                Utils.drawLine(i * 10, 10 + j * 10, 10 + i * 10, j * 10);
            }
        }
    }
}