

function Mover(loc, vel, acc, len, clr){
  this.loc = loc;
  this.vel = vel;
  this.acc = acc;
  this.len = len;
  this.clr = clr;
}

function Attractor(loc, vel, acc, len, clr){
  this.loc = loc;
  this.vel = vel;
  this.acc = acc;
  this.len = len;
  this.clr = clr;
}

function Repeller(loc, vel, acc, len, clr){
  this.loc = loc;
  this.vel = vel;
  this.acc = acc;
  this.len = len;
  this.clr = clr;
}


Mover.prototype.update = function(){

  this.loc.add(this.vel);
  if(this.loc.x >= (window.innerWidth  - this.len)|| this.loc.x <= this.len){
     this.vel.x *= -1;
  }
  if(this.loc.y >= window.innerHeight - this.len || this.loc.y <= this.len){
     this.vel.y *= -1;
  }
  //this.vel = this.vel.add(this.acc);
  //this.acc = this.acc.mult(0.75);

  this.render();
}

Mover.prototype.accelerate = function(attractLoc, repelLoc){


    var dv = new JSVector(attractLoc.x - this.loc.x, attractLoc.y - this.loc.y);

    distance = Math.sqrt( Math.pow(dv.x, 2) + Math.pow(dv.y , 2));


    var maxDistance = 200;
    if (distance < maxDistance) {
        var scale = 1-distance/maxDistance;



    }


}

Attractor.prototype.update = function(movers,list){

  this.loc.add(this.vel);
  if(this.loc.x >= (window.innerWidth  - this.len)|| this.loc.x <= this.len){
     this.vel.x *= -1;
  }
  if(this.loc.y >= window.innerHeight - this.len || this.loc.y <= this.len){
     this.vel.y *= -1;
  if(this.loc.x + 100 >= movers.loc.x || this.loc.y + 100 >= movers.loc.y){
    movers.acc.add(new JSVector(0.25,0.25));
  }
  //if(this.loc.x >= (window.innerWidth  - this.len)|| this.loc.x <= this.len){
     //this.vel.x *= -1;
  //}
  //if(this.loc.y >= window.innerHeight - this.len || this.loc.y <= this.len){
  //   this.vel.y *= -1;
  //}
  //for(i = 0; i < 99; i++){
  //if(this.loc.x + 5 <= movers[i].loc.x || this.loc.x - 5 >= movers[i].loc.x){
  //  movers[i].loc.mult(new JSVector(-2,-2));
//
  //}
  //f(this.loc.x + 5 <= movers[i].loc.y || this.loc.x - 5 >= movers[i].loc.y){
  //  movers[i].loc.div(new JSVector(2,2));
  //}
}

  this.render();
}


Repeller.prototype.update = function(){

  if(this.loc.x >= window.innerWidth){
    this.loc.x = 0;
  }
  if(this.loc.x >= 0){
    this.loc.x = window.innerWidth;
  }
  if(this.loc.y >= window.innerHeight){
    this.loc.y = 0;
  }
  if(this.loc.y >= 0){
    this.loc.y = window.innerHeight;
  }
  if(this.loc.x + 100 >= movers.loc.x || this.loc.y + 100 >= movers.loc.y){
    movers.acc.sub(new JSVector(0.25,0.25));
  }

  repeller.render();
}

Mover.prototype.render = function(){
    ctx.fillStyle = this.clr;
    ctx.beginPath();
    ctx.arc(this.loc.x, this.loc.y, this.len, Math.PI*2,0,false);
    ctx.stroke();
    ctx.fill();
}

Attractor.prototype.render = function(){
  //console.log(this.loc.x);
  ctx.fillStyle = this.clr;
  ctx.beginPath();
  ctx.rect(this.loc.x, this.loc.y, this.len, this.len);
  ctx.stroke();
  ctx.fill();
}
Repeller.prototype.render = function(){
  //console.log(this.loc.x);
  ctx.fillStyle = this.clr;
  ctx.beginPath();
  ctx.rect(this.loc.x, this.loc.y, this.len, this.len);
  ctx.stroke();
  ctx.fill();
}
