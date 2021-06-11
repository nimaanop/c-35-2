var dog, happyDog
var database,foodS, foodStocks
function preload()

{
  dogImg= loadImage("images/dogImg.png");
  dogImg1= loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog= new dog(50,170,50,50);
  
}


function draw() {  
  background(46, 139, 87)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dogHappy);
  }

  drawSprites();
 textSize(25)
 Fill("green")
 stroke(5)

}
function readStock(data){
  foodsdata.val();
}
function writeStock(x){
  database.ref('/').update({
    food:x
  })
}


