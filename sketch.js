//Create variables here
var dog, happyDog, database, food, foodStock;
var database;
var foodS;


function preload() {
  //load images here
  img1 = loadImage("images/dogImg.png");
  img2 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250, 250, 10, 10);
  dog.addImage(img1);
  dog.scale = 0.2;

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);


}


function draw() {
  background(46, 139, 87);
  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(img2);
  }
  drawSprites();
  //add styles here
  textSize(15);
  fill(0, 0, 0);
  stroke(3);
  text("Press Up Arrow to Feed yo Doggo Milk!", 60, 20);
  text("Food Remaining(If it runs out ye doggo will be sad)" + foodS, 155, 150);

}

function readStock(data) {
  foodS - data.val();
}

function writeStock(x) {
  // if (x < 0) {
  //   x = 0
  // }
  // else {
  //   x = x - 1
  // }
  database.ref('/').update({
    'Food': x
  })
}



