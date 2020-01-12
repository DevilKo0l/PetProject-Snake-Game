function Food(){
    this.x = 0;
    this.y = 0;
    
    this.drawFood = function(){
        fill(255,0,0);
        rect(this.x,this.y,scl,scl);
    }
    this.randomLocation = function(){
        var cols = floor(random(width/scl));
        var rows = floor(random(height/scl));
        
        this.x = floor(rows*scl);
        this.y = floor(cols*scl);       
             
    }
    
    
}