'use strict'

function Vehicle(loc){
  this.loc = loc;
  this.maxSpeed = 5;
  this.vel = new JSVector(Math.random()*3-1.5, Math.random()*3-1.5);
  this.acc = new JSVector(0, 0);
  this.angle = 0;

  // Method to update position
  this.update = function(){
  this.vel.add(this.acc);
  this.loc.add(this.vel);
  this.checkEdges();
  this.render();
  }
// Method to display
  this.render = function() {
    ctx.strokeStyle = "rgba(2, 2, 2, 1)";
    ctx.fillStyle = "rgba(0, 255, 0, .75)";
    ctx.save();
    ctx.translate(this.loc.x, this.loc.y);
    this.angle = this.vel.getDirection()+Math.PI/2;
    ctx.rotate(this.angle);
    ctx.beginPath();
    ctx.moveTo(-6, 12);
    ctx.lineTo(6, 12);
    ctx.lineTo(0, -12);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

  }

  this.checkEdges = function(){
    if(this.loc.x < 0) this.loc.x  = window.innerWidth;
    if(this.loc.x > window.innerWidth) this.loc.x  = 0;
    if(this.loc.y < 0) this.loc.y  = window.innerHeight;
    if(this.loc.y > window.innerHeight) this.loc.y  = 0;
  }
  this.applyForce = function(force){
    this.vel.add(force);
  }
  this.seek = function(target){
  }
  this.sepperate = function(targets){
    var sum = new JSVector();
    var count = 0;
    for(var i=0; i < targets.length(); i++){
      var distance = JSVector.subGetNew(this.loc,targets[i].loc);
      if((distance > 0) && (d < 50)){
        var diff = JSVector.subGetNew(this.loc,targets[i].loc);
        diff.normalize();
        sum.add(diff);
        count++;
      }
    }
    if(count > 0){
    sum.div(count);
    sum.setMag(maxSpeed);
    var steer = JSVector.subGetNew(sum,vel);
    this.applyForce(steer);
    }
  }
