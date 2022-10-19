"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalGrid();
}

function drawDiagonalGrid() {
    let i = 0;
    while (i <= 6) {
        let step = i * 25;
        Utils.drawLine(50 + step, 200 + step, 200 + step, 50 + step);
        Utils.drawLine(50 + step, 200 - step, 200 + step, 350 - step);
        i++;
    }
}