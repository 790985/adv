function Attractor(loc,len,vel, acc, obj){
  this.vel = vel;
  this.loc = loc;
  this.acc = acc;
  this.obj = obj;
  this.len = len;
  this.id = 10;
  this.clr = "rgba(134, 66, 244)";
}
Attractor.prototype.update = function(){

  this.loc.add(this.vel);
  if(this.loc.x >= window.innerWidth || this.loc.x <=0){
    this.vel.x *= -1;
  }
  if(this.loc.y >= window.innerHeight || this.loc.y <= 0){
    this.vel.y *= -1;
  }
//for(var i = 0; i < this.obj.length; i++){
//  var d = this.loc.getDistance(this.obj[i].loc);
//  if(d > 10){
//    var force = this.loc.subGetNew(this.obj[i].loc);
//    force.mult(d);
//    this.obj[i].acc.add(force);
//  }
//  }
  this.render();
}

Attractor.prototype.render = function(){
  ctx.fillstyle = this.clr;
  ctx.beginPath();
  ctx.arc(this.loc.x,this.loc.y,this.len,Math.PI*2,0,false);
  ctx.stroke();
  ctx.fill();
}
