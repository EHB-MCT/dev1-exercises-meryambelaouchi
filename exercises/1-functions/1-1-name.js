"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawName();

function drawName() {

    //m
    context.lineWidth = 10;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(100, 300);
    context.lineTo(100, 200);
    context.lineTo(150, 250);
    context.lineTo(200, 200);
    context.lineTo(200, 300);
    context.stroke();

    //e
    context.strokeStyle = 'orange';
    context.beginPath();
    context.moveTo(250, 200);
    context.lineTo(250, 300);
    context.lineTo(300, 300);
    context.moveTo(250, 250);
    context.lineTo(300, 250);
    context.moveTo(300, 200);
    context.lineTo(250, 200);
    context.stroke();

    //r
    context.strokeStyle = 'yellow';
    context.beginPath();
    context.moveTo(350, 200);
    context.lineTo(350, 300);
    context.moveTo(350, 200);
    context.lineTo(400, 225);
    context.lineTo(350, 250);
    context.lineTo(400, 300);
    context.stroke();

    //y
    context.strokeStyle = 'green';
    context.beginPath();
    context.moveTo(450, 200);
    context.lineTo(475, 225);
    context.lineTo(475, 300);
    context.moveTo(500, 200);
    context.lineTo(475, 225);
    context.stroke();

    //a
    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(575, 200);
    context.lineTo(550, 300);
    context.moveTo(575, 200);
    context.lineTo(600, 300);
    context.moveTo(560, 250);
    context.lineTo(590, 250);
    context.stroke();


    //m
    context.strokeStyle = 'purple';
    context.beginPath();
    context.moveTo(650, 300);
    context.lineTo(650, 200);
    context.lineTo(700, 250);
    context.lineTo(750, 200);
    context.lineTo(750, 300);
    context.stroke();
}