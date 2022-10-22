"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawGradientCircles();
    context.strokeStyle = "black";
    context.strokeRect(50, 50, 300, 300);
}

function drawGradientCircles() {
    let i = 0;
    while (i < 7) {
        let gray = i * 50;
        context.fillStyle = Utils.rgb(gray, gray, gray);
        let radius = 150 - (25 * i);
        Utils.fillAndStrokeCircle(200, 200, radius);
        i++;
    }
}