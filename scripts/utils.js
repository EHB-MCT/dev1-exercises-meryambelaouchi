"use strict";
import context from './context.js';


export function drawLine(x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
}

export function strokeCircle(x, y, radius) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.stroke();
}

export function rgb(r, g, b) {
    let rgb = "rgb(" + r + "," + g + "," + b + ")";
    return rgb;
}