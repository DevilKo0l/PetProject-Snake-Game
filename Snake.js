   
function Snake(){
  this.x = 0;
  this.y = 0;
  this.xSpeed=0;
  this.ySpeed=1;
  this.point = 0;
  this.tail=[];
  
  this.update = function(){
    if(this.point===this.tail.length){
      for(var i = 0; i<this.tail.length-1;i++){
        this.tail[i]=this.tail[i+1];           
      }
    }    
    this.tail[this.point-1] = createVector(this.x, this.y)

    //snake move
    this.x = this.x + this.xSpeed * scl;
    this.y = this.y + this.ySpeed * scl;

    //constrain x between 0 and width
    //constrain y between 0 and height
    this.x = constrain(this.x, 0, width-scl)
    this.y = constrain(this.y,0,height-scl)
  }

  this.drawSnake = function(){
    fill(255,255,255);
    for(var i = 0; i<this.tail.length;i++){      
      rect(this.tail[i].x, this.tail[i].y, scl,scl)
    }    
    rect(this.x, this.y,scl,scl)
  }

  this.dir = function(x,y){
    this.xSpeed=x;
    this.ySpeed=y; 
  }

  this.eat=function(foodPos){    
    var distance = dist(this.x, this.y, foodPos.x, foodPos.y);
    //If distance less than 1 pixel return true
    if(distance<1){
      this.point++;
      return true;
    } else {
      return false;
    }    
  }
  
}

    