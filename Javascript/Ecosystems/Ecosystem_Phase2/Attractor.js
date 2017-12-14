function Attractor(loc, vel, acc, len){
  this.loc = loc;
  this.vel = vel;
  this.acc = acc;
  this.len = len;
  this.clr = "rgb(" + Math.floor(Math.random() * (255 - 0 + 1))+","+Math.floor(Math.random()*(255-0+1))+","+Math.floor(Math.random()*(255 - 0 + 1)) + ")";
}
Attractor.prototype.update = function(){

  //this.loc.add(this.vel);
  if(this.loc.x >= window.innerWidth || this.loc.x <=0){
    this.vel.x *= -1;
  }
  if(this.loc.y >= window.innerHeight || this.loc.y <= 0){
    this.vel.y *= -1;
  }
   for(var i = 0; i < movers.length; i++){
  var d = this.loc.getDistance(movers[i].loc);
  if(d > 5){
    var force = this.loc.subGetNew(movers[i].loc);
    force.mult(d);
    movers.acc.add(force);
  }
  }
  this.render();
}

Attractor.prototype.render = function(){
  console.log(this.loc);
  ctx.fillstyle = 'rgba(255,200,0)'; //this.clr;
  ctx.beginPath();
  ctx.arc(this.loc.x,this.loc.y,this.len,Math.PI*2,0,false);
  ctx.stroke();
  ctx.fill();
}
