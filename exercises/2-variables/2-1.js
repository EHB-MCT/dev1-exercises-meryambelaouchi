"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;

let margin = 600;
let space = 50;


drawLines();

function drawLines() {
    context.lineWidth = 3;
    context.beginPath();
    context.moveTo(margin, space);
    context.lineTo(width - margin, space);
    context.lineTo(margin, space * 2);
    context.lineTo(width - margin, space * 2);
    context.lineTo(margin, space * 3);
    context.lineTo(width - margin, space * 3);
    context.lineTo(margin, space * 4);
    context.lineTo(width - margin, space * 4);
    context.lineTo(margin, space * 5);
    context.lineTo(width - margin, space * 5);
    context.lineTo(margin, space);

    context.stroke();
}