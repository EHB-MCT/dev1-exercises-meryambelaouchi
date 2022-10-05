"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawStar();

function drawStar() {

    context.fillStyle = 'orange';
    context.beginPath();
    context.rect(50, 50, 300, 300);
    context.fill();

    context.lineWidth = 7;
    context.strokeStyle = 'white';
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(175, 175);

    context.moveTo(225, 225);
    context.lineTo(350, 350);

    context.moveTo(100, 50);
    context.lineTo(350, 300);
    context.moveTo(150, 50);
    context.lineTo(350, 250);
    context.moveTo(50, 100);
    context.lineTo(300, 350);
    context.moveTo(50, 150);
    context.lineTo(250, 350);

    context.moveTo(350, 50);
    context.lineTo(225, 175);

    context.moveTo(175, 225);
    context.lineTo(50, 350);

    context.moveTo(300, 50);
    context.lineTo(50, 300);
    context.moveTo(250, 50);
    context.lineTo(50, 250);
    context.moveTo(350, 100);
    context.lineTo(100, 350);
    context.moveTo(350, 150);
    context.lineTo(150, 350);
    context.stroke();

    context.fillStyle = 'white';
    context.beginPath();
    context.arc(50, 50, 150, 0, Math.PI);
    context.fill();

    context.beginPath();
    context.arc(350, 50, 150, 0, Math.PI);
    context.fill();

    context.beginPath();
    context.arc(50, 350, 150, Math.PI, 0);
    context.fill();

    context.beginPath();
    context.arc(350, 350, 150, Math.PI, 0);
    context.fill();

    context.lineWidth = 10;
    context.strokeStyle = 'orange';
    context.beginPath();
    context.rect(50, 50, 300, 300);
    context.stroke();

}