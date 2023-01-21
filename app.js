const canvas  = document.getElementById('canvas');
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas);

//Reference: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
const context = canvas.getContext('2d');

// Rect
context.fillStyle = `rgba(255,0,20,0.3)`;
context.fillRect(100,100,100,100);
context.fillStyle = `rgba(0,0,20,0.3)`;
context.fillRect(400,100,100,100);

// Line
context.beginPath();
context.moveTo(100,150);
context.lineTo(200,400);
context.lineTo(300,150);
context.strokeStyle = `blue`;
context.stroke()

//Arcs / Circle
context.beginPath(); 
context.arc(200,500,50,0,Math.PI*2,false);
context.strokeStyle = `gold`;
context.stroke();

//Arcs / Circle fill
context.beginPath(); 
context.arc(400,500,50,0,Math.PI*2,false);
context.fillStyle = `gold`;
context.fill();

console.log(`%c Canvas is ready`,`background:green; color:white;`);