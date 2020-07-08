/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
var backgroundImg;
//var iconImg;
//var player
function preload
  backgroundImg = loadImage("assets/images/background/Background.png");
  //iconImg = loadImage("assets/images/loadingIcon/Loading.png");
}

function playButtonClicked() {
    
  // this is an example of how to change the background
   playButton.remove();
   soundButton.remove();
   scoreButton.remove();
   player = createSprite(windowWidth / 6, windowHeight / 1.5);
   
    
    
    // test
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  playButton = createButton("Play");
  playButton.position(windowWidth / 2, windowHeight / 2);
  playButton.mousePressed(playButtonClicked);

  scoreButton = createButton("Score");
  scoreButton.position(windowWidth / 1.2, windowHeight / 2);

  soundButton = createButton("Sound on/off");
  soundButton.position(windowWidth / 5.2, windowHeight / 2);

  loading = createSprite(windowWidth / 2, windowHeight / 2);
  loading.addImage(iconImg);

  loading.addImage = (windowWidth / 5, windowHeight / 5);
  loading.scale = 1 / 4;

  player = createSprite(windowWidth / 6, windowHeight / 1.5);
  player.scale = 1 / 4;
  player.mirrorX(-1);
  player.addAnimation(
  "idle",
  "assets/images/player/idle/autumn_Idle_000.png",
  "assets/images/player/idle/autumn_Idle_009.png"
  );

  player.addAnimation(
  "die",
  "assets/images/player/die/autumn_Fall_000.png",
  "assets/images/player/die/autumn_Fall_009.png"
  );

  player.addAnimation(
  "jump",
  "assets/images/player/jump/autumn_Jump_000.png",
  "assets/images/player/jump/autumn_Jump_009.png"
  );

  player.addAnimation(
  "run",
  "assets/images/player/run/autumn_Run_000.png",
  "assets/images/player/run/autumn_Run_009.png"
  );
  player.changeAnimation("run");
}

function draw() {
  background(backgroundImg);
  drawSprites();
}
