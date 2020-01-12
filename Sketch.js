var scl=20
var snake;
var food;
function setup() {
    createCanvas(600,600)    
    snake = new Snake();
    food = new Food();
    frameRate(10)    
}

//Store all the fuction showing snake, background and food
function draw() {
  background(0)
  snake.drawSnake();
  snake.update();

  food.drawFood();
  if(snake.eat(food)){
    food.randomLocation()
  }  
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    snake.dir(0,-1);
  }
  if(keyCode===DOWN_ARROW){
    snake.dir(0,1);
  }
  if(keyCode===RIGHT_ARROW){
    snake.dir(1,0);
  }
  if(keyCode===LEFT_ARROW){
    snake.dir(-1,0);
  }

}

//Navigate snake

