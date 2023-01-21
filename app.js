const canvas  = document.getElementById('canvas');
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
console.log(canvas);

//Reference: https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
const context = canvas.getContext('2d');
context.fillRect(100,100,100,100);
console.log(context);

console.log(`%c Canvas is ready`,`background:green; color:white;`);