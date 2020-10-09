(function () {
  function createTiledSprite() {
    const sprite1 = createSprite(0, 0, windowWidth, windowHeight);
    const sprite2 = createSprite(0, 0, windowWidth, windowHeight);
    let image;

    function isLeftOfScreen(sprite) {
      const boundingBox = sprite.getBoundingBox();
      return boundingBox.right() < 0;
    }

    function swapSprites(sprite1, sprite2) {
      sprite1.position.x = sprite2.getBoundingBox().right() + image.width / 2;
    }

    function addImage(newImage) {
      image = newImage;
      image.resize(0, windowHeight);

      sprite1.addImage(newImage);
      sprite1.position.x = newImage.width / 2; // 0%
      sprite1.position.y = windowHeight / 2;
      sprite1.height = windowHeight;

      sprite2.addImage(newImage);
      sprite2.position.x = image.width / 2 + image.width; // 100%
      sprite2.position.y = windowHeight / 2;
      sprite2.height = windowHeight;
    }

    function setSpeed(speed) {
      sprite1.setSpeed(speed);
      sprite2.setSpeed(speed);
    }

    function update() {
      if (isLeftOfScreen(sprite1)) {
        swapSprites(sprite1, sprite2);
      } else if (isLeftOfScreen(sprite2)) {
        swapSprites(sprite2, sprite1);
      }
    }

    const drawSprite1 = sprite1.draw;
    sprite1.draw = () => {
      update();
      drawSprite1();
    };

    return {
      addImage,
      setSpeed,
    };
  }

  window.createTiledSprite = createTiledSprite;
})();
