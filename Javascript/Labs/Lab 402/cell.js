'use strict'

class Cell {
  constructor(game, location, id) {
    this.game = game;
    this.loc = location;
    this.occupied = false;
    this.visited = false;
    this.neighbors = [];
    this.id = id;
    this.value = -1;
    this.vec = new JSVector(0,0);
    this.row = game.canvas.width/game.cols;
    this.col = game.canvas.height/game.rows;
  }

  render(){
    //  draw a rectangle at location
    if(this.occupied){
      this.game.context.fillStyle = 'red';
    } else{
      this.game.context.fillStyle="#AABBAA";
      // this.game.context.strokeStyle="#001122";
    }
    this.game.context.fillRect(this.loc.x, this.loc.y, this.game.cellDim, this.game.cellDim);
    this.game.context.strokeRect(this.loc.x, this.loc.y, this.game.cellDim, this.game.cellDim);
    this.game.context.fillStyle = 'white';
    this.game.context.fillText(this.id, this.loc.x +12, this.loc.y+10);
    this.game.context.fillStyle = 'black';
    this.game.context.fillText(this.value, this.loc.x + 12, this.loc.y+25);
  }

  addNeighbors(c, r){
    var grid  = this.game.grid;

    // North
    if(r > 0 && !grid[c][r-1].occupied){  // find north
      this.neighbors.push(grid[c][r-1]);
    }

    if(c < this.game.cols - 1 && !grid[c+1][r].occupied){  // find East
          this.neighbors.push(grid[c+1][r]);
    }

    if(r < this.game.rows-1 && !grid[c][r+1].occupied){  // find south
          this.neighbors.push(grid[c][r+1]);
        }

    if(c > 0 && !grid[c-1][r].occupied){  // find west
        this.neighbors.push(grid[c-1][r]);
    }

  }

}
//addNeighbors();
