"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

let bubbles = [];

setup();

update();

function setup() {
    for (let i = 0; i < 100; i++) {
        let bubble = {
            y: height,
            x: Utils.randomNumber(0, width),
            speed: Utils.randomNumber(2, 5),
            hue: Utils.randomNumber(0, 60)

        };
        bubbles[i] = bubble;
    }
}

function update() {
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, width, height);
    for (let i = 0; i < bubbles.length; i++) {
        let bubble = bubbles[i];
        bubble.x += Utils.randomNumber(-2, 2);
        bubble.y += Utils.randomNumber(-2, 2);
        bubble.y -= bubble.speed;
        drawBubble(bubble);
    }

    requestAnimationFrame(update);
}



function drawBubble(bubble) {
    context.lineWidth = 3;
    Utils.drawLine(bubble.x, bubble.y, bubble.x, bubble.y + 80);
    context.fillStyle = Utils.hsl(bubble.hue, 100, 50);
    Utils.fillEllipse(bubble.x, bubble.y, 20, 40);


}