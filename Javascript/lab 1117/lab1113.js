

window.onload = init;

// All of these are global
var canvas;
var ctx;
var colorArray = [
  'rgb(163, 48, 37, .3)', 'rgba(241, 167, 28, .3)', 'rgba(238, 241, 28, .3)',
  'rgba(28, 241, 238, .3)', 'rgba(28, 110, 241, .3)', 'rgba(128, 28, 241, .3)',
  'rgba(216, 28, 241, .3)', 'rgba(241, 28, 103, .3)', 'rgba(155, 7, 14, .3)'
];
var vehicles = [];
var mouseX, mouseY;
var mouseObj;

function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid black 2px';
  canvas.style.backgroundColor = 'rgba(100,20,200)';
  canvas.addEventListener('mousemove', function(){
    mouseX = event.offsetX;     // Get the mouse coordinate
    mouseY = event.offsetY;

  }
  , false);
  // get the context
  ctx = canvas.getContext('2d'); // This is the context
  makeVehicle(11);
  mouseObj = new Vehicle(-1, new JSVector(window.innerWidth/2, window.innerHeight/2));
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
  for(var i = 1; i < vehicles.length; i++){
    vehicles[i].seek(mouseObj);
    vehicles[i].antiseek(vehicles[i-1]);
    //for(var k = 0; k < vehicles.length; k++){
    //  var d =JSVector.subGetNew(vehicles[i],vehicles[k]).x + JSVector.subGetNew(vehicles[i],vehicles[k]).y;
    //  if(d < 100){
    //  vehicles[i].antiseek(vehicles[k]);
    //}
    //}
    vehicles[i].update();
  }
  mouseObj.seekCoordinates(new JSVector(mouseX,mouseX));
  mouseObj.update();
}

function makeVehicle(num){

  for(var i = 0; i < num; i++){
    vehicles.push(new Vehicle(i, new JSVector(window.innerWidth/2, window.innerHeight/2)));
  }
    console.log(vehicles.length);
}
