"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawStar();

function drawStar() {

    context.fillStyle = 'orange';
    context.beginPath();
    context.rect(50, 50, 350, 350);
    context.fill();

    context.lineWidth = 7;
    context.strokeStyle = 'white';
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(200, 200);

    context.moveTo(250, 250);
    context.lineTo(400, 400);

    context.moveTo(100, 50);
    context.lineTo(400, 350);
    context.moveTo(150, 50);
    context.lineTo(400, 300);
    context.moveTo(50, 100);
    context.lineTo(350, 400);
    context.moveTo(50, 150);
    context.lineTo(300, 400);

    context.moveTo(400, 50);
    context.lineTo(250, 200);

    context.moveTo(200, 250);
    context.lineTo(50, 400);

    context.moveTo(350, 50);
    context.lineTo(50, 350);
    context.moveTo(300, 50);
    context.lineTo(50, 300);
    context.moveTo(400, 100);
    context.lineTo(100, 400);
    context.moveTo(400, 150);
    context.lineTo(150, 400);
    context.stroke();

    context.fillStyle = 'white';
    context.beginPath();
    context.arc(50, 50, 175, 0, Math.PI);
    context.fill();

    context.beginPath();
    context.arc(400, 50, 175, 0, Math.PI);
    context.fill();

    context.beginPath();
    context.arc(50, 400, 175, 0, Math.PI, true);
    context.fill();

    context.beginPath();
    context.arc(400, 400, 175, 0, Math.PI, true);
    context.fill();

    context.lineWidth = 10;
    context.strokeStyle = 'orange';
    context.fillStyle = "orange";
    context.textAlign = "center";
    context.font = "normal 35pt Arial";
    context.beginPath();
    context.rect(50, 50, 350, 350);
    context.fillText('STARRY NIGHT', 225, 450);
    context.stroke();



}