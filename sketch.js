var dog,happyDog;
var dogImg,dogImg1;

var database;
var foodStock, foodS;

function preload(){
	dogImg = loadImage("images/dogImg.png")
  dogImg1 = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  
  dog = createSprite(250,250,20,20)
  dog.addImage(dogImg)
  dog.scale = 0.4;

  dog2 = createSprite(200,200,20,20)
  dog2.addImage(dogImg1)
  dog2.scale = 0.4;

  var database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

}


function draw() {  
 background(46,139,87)
 drawSprites();

 fill("white")
 stroke(50)
 textSize(50)
 text("foodStock", 250,50)
 
  dog1.display();
  dog2.display();

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog1.addImage(dogImg1)
  }

}
function readStock(data){
    foodS = data.val();
}
function writeStock(x){
    database.ref('/').update({
         Food:x 
    })
  }



