"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let height = window.innerHeight;
let width = window.innerWidth;

window.onmousemove = drawCross;


/**
 * @param {MouseEvent} eventData
 */
function drawCross(eventData) {
    let x = eventData.pageX;
    let y = eventData.pageY;
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.strokeStyle = 'red';
    context.lineWidth = 5;

    Utils.drawLine(0, y, width, y);
    Utils.drawLine(x, 0, x, height);
}