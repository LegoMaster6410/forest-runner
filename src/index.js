/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
var backgroundImg;
var backgroundSprite;
var player;
var song;
var isSoundOn = true;
var score = 0;
var isPlaying = false;
var isGameOver = false;
var speed = 6;

function preload() {
  song = loadSound('assets/sounds/main_song.mp3');
  background1Img = loadImage('assets/images/background/background1.png');
  background2Img = loadImage('assets/images/background/background2.png');
  background3Img = loadImage('assets/images/background/background3.png');
  background5Img = loadImage('assets/images/background/background5.png');
  background4Img = loadImage('assets/images/background/background4.png');
  iconImg = loadImage('assets/images/Loading/Loading.png');
  rockImg = loadImage('assets/images/obstacles/rock.png');
  logImg = loadImage('assets/images/obstacles/log.png');
  ivyImg = loadImage('assets/images/obstacles/ivy.png');
  dpcomic = loadFont('assets/fonts/dpcomic.ttf');
}

function playButtonClicked() {
  song.play();

  if (!isSoundOn) {
    song.setVolume(0);
  }

  playButton.remove();

  player.visible = true;
  rock.visible = true;
  rock.setSpeed(-4 * speed);
  log.visible = true;
  log.setSpeed(-4 * speed);
  ivy.visible = true;
  ivy.setSpeed(-4 * speed);

  background1Sprite.setSpeed(-1 * speed);
  background2Sprite.setSpeed(-3 * speed);
  background3Sprite.setSpeed(-3 * speed);
  background4Sprite.setSpeed(-2 * speed);
  background5Sprite.setSpeed(-4 * speed);

  isPlaying = true;

  titleText.remove();
}

function soundButtonClicked() {
  if (isSoundOn) {
    isSoundOn = false;
    soundButton.style(
      'background-image',
      'url("assets/images/buttons/volume-x.svg")'
    );
    song.setVolume(0);
  } else {
    isSoundOn = true;
    soundButton.style(
      'background-image',
      'url("assets/images/buttons/volume-2.svg")'
    );
    song.setVolume(1);
  }
}

//function scoreButtonClicked() {
//playButton.remove();
//soundButton.remove();
//scoreButton.remove();
//}

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

  playButton = createButton('Play');
  playButton.position(windowWidth / 2, windowHeight / 2 + 80);
  playButton.addClass('playButton');
  playButton.mousePressed(playButtonClicked);

  soundButton = createButton('');
  soundButton.position(20, 20);
  soundButton.mousePressed(soundButtonClicked);
  soundButton.addClass('soundButton');

  titleText = createDiv('The Adventures of Nici');
  titleText.style('text-align', 'center');
  titleText.style('width', '100%');
  titleText.style('font-size', '80px');
  titleText.style('font-family', 'DpComic');
  titleText.style('transform', 'translateX(-50%)');
  titleText.position(windowWidth / 2, windowHeight / 2);
  titleText.style('color', 'white');

  //loading = createSprite(windowWidth / 2, windowHeight / 2);
  //loading.addImage(iconImg);

  //loading.addImage = (windowWidth / 5, windowHeight / 5);
  //loading.scale = 1 / 4;

  //  player.position.x = random(200, 1000);
  player = createSprite();
  player.position.x = 200;
  player.position.y = windowHeight - 225;

  player.scale = 1 / 2;
  player.mirrorX(-1);
  player.addAnimation(
    'idle',
    'assets/images/player/idle/autumn_Idle_000.png',
    'assets/images/player/idle/autumn_Idle_009.png'
  );

  player.addAnimation(
    'fall',
    'assets/images/player/fall/autumn_Fall_000.png',
    'assets/images/player/fall/autumn_Fall_009.png'
  );

  player.addAnimation(
    'jump',
    'assets/images/player/jump/autumn_Jump_000.png',
    'assets/images/player/jump/autumn_Jump_001.png',
    'assets/images/player/jump/autumn_Jump_002.png',
    'assets/images/player/jump/autumn_Jump_003.png',
    'assets/images/player/jump/autumn_Jump_004.png',
    'assets/images/player/jump/autumn_Jump_005.png',
    'assets/images/player/jump/autumn_Jump_006.png',
    'assets/images/player/jump/autumn_Jump_007.png',
    'assets/images/player/jump/autumn_Jump_008.png',
    'assets/images/player/jump/autumn_Jump_009.png'
  );

  player.addAnimation(
    'run',
    'assets/images/player/run/autumn_Run_000.png',
    'assets/images/player/run/autumn_Run_009.png'
  );
  player.changeAnimation('run');
  player.visible = false;
  player.setCollider('rectangle', -29, 50, 150, 500);
  //player.debug = true;

  rock = createSprite(windowWidth + 1000, windowHeight - 70);
  rock.addImage(rockImg);
  rock.scale = 5 / 12;
  rock.visible = false;
  //rock.debug = true;

  log = createSprite(windowWidth + 2000, windowHeight - 70);
  log.addImage(logImg);
  log.scale = 4.5 / 12;
  log.visible = false;
  //log.debug = true;

  ivy = createSprite(windowWidth + 3000, windowHeight - 70);
  ivy.addImage(ivyImg);
  ivy.scale = 5 / 12;
  ivy.visible = false;
  //ivy.debug = true;

  obstacleGroup = new Group();
  obstacleGroup.add(rock);
  obstacleGroup.add(log);
  obstacleGroup.add(ivy);

  speed = speed / displayDensity();
}

function gameOver() {
  isGameOver = true;
  player.changeAnimation('fall');
  player.animation.looping = false;
  background1Sprite.setSpeed(0);
  background2Sprite.setSpeed(0);
  background3Sprite.setSpeed(0);
  background4Sprite.setSpeed(0);
  background5Sprite.setSpeed(0);
  rock.setSpeed(0);
  log.setSpeed(0);
  ivy.setSpeed(0);
  playAgainButton = createButton('Play Again');
  playAgainButton.position(windowWidth / 2, windowHeight / 2 + 60);
  playAgainButton.mousePressed(playAgainButtonClicked);

  gameOverText = createDiv('Game Over');
  gameOverText.style('text-align', 'center');
  gameOverText.style('width', '100%');
  gameOverText.style('font-size', '60px');
  gameOverText.position(0, windowHeight / 2);
  gameOverText.style('font-family', 'DpComic');
  gameOverText.style('color', 'white');
}

function collisions() {
  player.collide(obstacleGroup, gameOver);
}

function playAgainButtonClicked() {
  window.location.reload();
  gameOverText.remove();
}

function keyPressed() {
  if (isGameOver) {
    return;
  }

  if (keyCode === 32) {
    if (player.getAnimationLabel() === 'jump') {
      return;
    }

    player.velocity.y = -18;
    player.changeAnimation('jump');
    player.animation.changeFrame(0);
    player.animation.frameDelay = 2;
  }
}

function getNextXPosition() {
  var xPositions = obstacleGroup.toArray().map(function (o) {
    return o.position.x;
  });

  var maxXPosition = Math.max(...xPositions);
  var nextXPosition = maxXPosition + random(800, 1400);

  return nextXPosition;
}

function checkObstacle(obstacle) {
  if (obstacle.position.x < 0) {
    obstacle.position.x = getNextXPosition();
  }
}

function updateScore() {
  if (isPlaying) {
    //score = score + 1;
    if (!isGameOver) {
      score = score + 1;
    }
    textFont(dpcomic);
    textSize(42);
    fill('white');
    text(`SCORE:${score}`, windowWidth - 300, 60);
  }
}

function repeatObstacles() {
  checkObstacle(rock);
  checkObstacle(log);
  checkObstacle(ivy);
}

function updatePlayer() {
  if (player.getAnimationLabel() === 'jump') {
    if (player.animation.getFrame() === player.animation.getLastFrame()) {
      player.velocity.y = 15;

      if (player.position.y >= windowHeight - 225) {
        player.changeAnimation('run');
        player.velocity.y = 0;
        player.position.y = windowHeight - 225;
      }
    }
  }

  if (player.position.y >= windowHeight - 225) {
    player.position.y = windowHeight - 225;
  }
}

function draw() {
  background('white');
  drawSprites();
  updateScore();
  updatePlayer();
  repeatObstacles();
  collisions();
}
