"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;


background();
setup();
draw();


function setup() {

    context.textAlign = "center";
    context.fillStyle = "white";
}

function draw() {
    let space = height / 5;
    drawSnail(space / 2, space / 2, space, 1);
    drawSnail(space / 2, space * 3 / 2, space, 2);
    drawSnail(space / 2, space * 5 / 2, space, 3);
    drawSnail(space / 2, space * 7 / 2, space, 4);
    drawSnail(space / 2, space * 9 / 2, space, 5);

}

function background() {
    context.fillStyle = 'grey';
    context.fillRect(0, 0, width, height);

    context.fillStyle = "lightgrey";
    context.fillRect(0, height / 5, width, height / 5);

    context.fillStyle = "lightgrey";
    context.fillRect(0, height * 3 / 5, width, height / 5);
}


function drawSnail(x, y, sizeY, number) {

    let sizeDiff = sizeY / 4 / 5;
    context.beginPath();
    context.fillStyle = "green";
    context.ellipse(x + sizeY / 24, y + sizeY / 4, sizeY / 2, sizeY / 8, 0, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.ellipse(x + sizeY / 2, y + sizeY / 8, sizeY / 4, sizeY / 8, Math.PI / 4 * 3, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.ellipse(x + sizeY / 2 + sizeY / 16, y - sizeY / 8, sizeY / 16, sizeY / 8, 0, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = "orange";
    context.fillStyle = "darkorange";
    for (let i = 0; i < 5; i++) {
        context.beginPath();
        context.arc(x, y, sizeY / 3 - sizeDiff * i, 0, Math.PI * 2);
        context.fill();
        context.stroke();
    }
    context.fillStyle = "black";
    context.font = "bold " + sizeY / 5 + "pt Arial";
    context.fillText(number, x, y + sizeY / 8);
}