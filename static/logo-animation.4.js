(function() {
  var logo, logoImage, canvas;

  function logoLoop() {
    window.requestAnimationFrame(logoLoop);

    logo.update();
    logo.render();
  }

  function sprite(options) {
    var that = {},
      frameIndex = 0,
      tickCount = 0,
      ticksPerFrame = options.ticksPerFrame || 0,
      numberOfFrames = options.numberOfFrames || 1;

    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;

    that.update = function() {
      tickCount += 1;

      if (tickCount > ticksPerFrame) {
        tickCount = 0;

        // If the current frame index is in range
        if (frameIndex < numberOfFrames - 1) {
          // Go to the next frame
          frameIndex += 1;
        } else {
          frameIndex = 0;
        }
      }
    };

    that.render = function() {
      // Clear the canvas
      that.context.clearRect(0, 0, that.width, that.height);

      // Draw the animation
      that.context.drawImage(
        that.image,
        (frameIndex * that.width) / numberOfFrames,
        0,
        that.width / numberOfFrames,
        that.height,
        0,
        0,
        that.width / numberOfFrames,
        that.height
      );
    };

    return that;
  }

  // Get canvas
  canvas = document.getElementById("four-satellites-4");
  canvas.width = 400;
  canvas.height = 400;

  // Create sprite sheet
  logoImage = new Image();

  // Create sprite
  logo = sprite({
    context: canvas.getContext("2d"),
    width: 8400,
    height: 400,
    image: logoImage,
    numberOfFrames: 21,
    ticksPerFrame: 3
  });

  // Load sprite sheet
  logoImage.addEventListener("load", logoLoop);
  document.querySelector(".logo").addEventListener("mouseenter", e => {
    e.target.classList.add("active");
    canvas.classList.add("active");
  });

  document.querySelector(".logo").addEventListener("mouseleave", e => {
    e.target.classList.remove("active");
    canvas.classList.remove("active");
  });

  logoImage.src = "logo-animation-ticks.png";
})();
