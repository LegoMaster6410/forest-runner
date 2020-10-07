/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
var backgroundImg;
var backgroundSprite;
var player;
var song;
var isSoundOn = true;
var score = 0;
var isPlaying = false;

function preload() {
  song = loadSound("assets/sounds/main_song.mp3");
  background1Img = loadImage("assets/images/background/background1.png");
  background2Img = loadImage("assets/images/background/background2.png");
  background3Img = loadImage("assets/images/background/background3.png");
  background5Img = loadImage("assets/images/background/background5.png");
  background4Img = loadImage("assets/images/background/background4.png");
  iconImg = loadImage("assets/images/Loading/Loading.png");

  rockImg = loadImage("assets/images/obstacles/rock.png");

  logImg = loadImage("assets/images/obstacles/log.png");

  ivyImg = loadImage("assets/images/obstacles/ivy.png");

  dpcomic = loadFont("assets/fonts/dpcomic.ttf");
}

function playButtonClicked() {
  if (isSoundOn === true) {
    song.play();
  }

  playButton.remove();
  soundButton.remove();
  scoreButton.remove();

  player.visible = true;
  rock.visible = true;
  rock.setSpeed(-4);
  log.visible = true;
  log.setSpeed(-4);
  ivy.visible = true;
  ivy.setSpeed(-4);

  background1Sprite.setSpeed(-1);
  background2Sprite.setSpeed(-3);
  background3Sprite.setSpeed(-3);
  background4Sprite.setSpeed(-2);
  background5Sprite.setSpeed(-4);

  isPlaying = true;
}

function soundButtonClicked() {
  if (isSoundOn) {
    isSoundOn = false;
    soundButton.html("Sound Off");
  } else {
    isSoundOn = true;
    soundButton.html("Sound On");
  }
}

function scoreButtonClicked() {
  playButton.remove();
  soundButton.remove();
  scoreButton.remove();
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  background1Sprite = createTiledSprite(
    windowWidth / 2,
    windowHeight / 2,
    windowWidth,
    windowHeight
  );
  background1Sprite.addImage(background1Img);

  background4Sprite = createTiledSprite(
    windowWidth / 2,
    windowHeight / 2,
    windowWidth,
    windowHeight
  );
  background4Sprite.addImage(background4Img);

  background3Sprite = createTiledSprite(
    windowWidth / 2,
    windowHeight / 2,
    windowWidth,
    windowHeight
  );
  background3Sprite.addImage(background3Img);

  background5Sprite = createTiledSprite(
    windowWidth / 2,
    windowHeight / 2,
    windowWidth,
    windowHeight
  );
  background5Sprite.addImage(background5Img);

  background2Sprite = createTiledSprite(
    windowWidth / 2,
    windowHeight / 2,
    windowWidth,
    windowHeight
  );
  background2Sprite.addImage(background2Img);

  playButton = createButton("Play");
  playButton.position(windowWidth / 2, windowHeight / 2);
  playButton.mousePressed(playButtonClicked);

  scoreButton = createButton("Score");
  scoreButton.position(windowWidth / 1.2, windowHeight / 2);
  scoreButton.mousePressed(scoreButtonClicked);

  soundButton = createButton("Sound On");
  soundButton.position(windowWidth / 5.2, windowHeight / 2);
  soundButton.mousePressed(soundButtonClicked);

  //loading = createSprite(windowWidth / 2, windowHeight / 2);
  //loading.addImage(iconImg);

  //loading.addImage = (windowWidth / 5, windowHeight / 5);
  //loading.scale = 1 / 4;

  //  player.position.x = random(200, 1000);
    player = createSprite();
  player.position.x = 200;
  player.position.y = windowHeight - 20;
  
  player.scale = 1 / 2;
  player.mirrorX(-1);
  player.addAnimation(
    "idle",
    "assets/images/player/idle/autumn_Idle_000.png",
    "assets/images/player/idle/autumn_Idle_009.png"
  );

  player.addAnimation(
    "die",
    "assets/images/player/fall/autumn_Fall_000.png",
    "assets/images/player/fall/autumn_Fall_009.png"
  );

  player.addAnimation(
    "jump",
    "assets/images/player/jump/autumn_Jump_000.png",
    "assets/images/player/jump/autumn_Jump_001.png",
    "assets/images/player/jump/autumn_Jump_002.png",
    "assets/images/player/jump/autumn_Jump_003.png",
    "assets/images/player/jump/autumn_Jump_004.png",
    "assets/images/player/jump/autumn_Jump_005.png",
    "assets/images/player/jump/autumn_Jump_005.png",
    "assets/images/player/jump/autumn_Jump_005.png",
    "assets/images/player/jump/autumn_Jump_005.png",
    "assets/images/player/jump/autumn_Jump_005.png",
    "assets/images/player/jump/autumn_Jump_005.png",
    "assets/images/player/jump/autumn_Jump_005.png",
    "assets/images/player/jump/autumn_Jump_005.png",
    "assets/images/player/jump/autumn_Jump_006.png",
    "assets/images/player/jump/autumn_Jump_007.png",
    "assets/images/player/jump/autumn_Jump_008.png",
    "assets/images/player/jump/autumn_Jump_009.png"
  );

  player.addAnimation(
    "run",
    "assets/images/player/run/autumn_Run_000.png",
    "assets/images/player/run/autumn_Run_009.png"
  );
  player.changeAnimation("run");
  player.visible = false;
  player.setCollider("rectangle", -29, 50, 150, 500);
  player.debug = true;

  rock = createSprite(windowWidth + 1000, windowHeight - 70);
  rock.addImage(rockImg);
  rock.scale = 1 / 2;
  rock.visible = false;
  rock.debug = true;
  //obstacle.setCollider("rectangle",0 , 0, 250, 250);

  log = createSprite(windowWidth + 2000, windowHeight - 70);
  log.addImage(logImg);
  log.scale = 1 / 2;
  log.visible = false;
  log.debug = true;

  ivy = createSprite(windowWidth + 3000, windowHeight - 70);
  ivy.addImage(ivyImg);
  ivy.scale = 1 / 2;
  ivy.visible = false;
  ivy.debug = true;

  obstacleGroup = new Group();
  obstacleGroup.add(rock);
  obstacleGroup.add(log);
  obstacleGroup.add(ivy);
}

function gameOver() {
  alert("GAME OVER.");
}

function collisions() {
  player.collide(obstacleGroup, gameOver);
}

function mousePressed() {
     player.changeAnimation("jump");
   player.position.y = player.position.y - 50;   
  //player.setCollider("rectangle", -29, 50, 150, 500);
}

function mouseReleased() {
      player.changeAnimation("run");
        player.position.y = windowHeight - 225;
  //xplayer.setCollider("rectangle", -29, 50, 150, 500);
    //player.position.y = windowHeight / 2;
}

function getNextXPosition() {
  var xPositions = obstacleGroup.toArray().map(function (o) {return o.position.x;});

  var maxXPosition = Math.max(...xPositions);
  var nextXPosition = maxXPosition + random(400, 1000);

  return nextXPosition;
}

function checkObstacle(obstacle) {
  if (obstacle.position.x < 0) {
    obstacle.position.x = getNextXPosition();
  }
}

function updateScore() {
  if (isPlaying) {
    score = score + 1;
    textFont(dpcomic);
    textSize(42);
    fill("white");
    text(`SCORE:${score}`, windowWidth - 300, 60);
  }
}

function repeatObstacles() {
  checkObstacle(rock);
  checkObstacle(log);
  checkObstacle(ivy);
}

function draw() {
  background("white");
  drawSprites();
  updateScore();
  repeatObstacles();
  collisions();
}
