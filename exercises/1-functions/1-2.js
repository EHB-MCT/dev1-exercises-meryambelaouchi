"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawBox();

function drawBox() {

    context.strokeStyle = 'red';
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(250, 250);
    context.moveTo(250, 50);
    context.lineTo(50, 250);
    context.stroke();

    context.strokeStyle = 'black';
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(250, 50);
    context.lineTo(250, 250);
    context.lineTo(50, 250);
    context.lineTo(50, 50);
    context.stroke();



}