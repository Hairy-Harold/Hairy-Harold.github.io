$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid()


    // TODO 2 - Create Platforms
    createPlatform(200, 400, 150, 20, "black");
    createPlatform(550, 500, 150, 20, "cyan");
    createPlatform(950, 600, 150, 20, "yellow");
    createPlatform(700, 700, 150, 20, "red");
    createPlatform(550,300,150,20, "green");


    // TODO 3 - Create Collectables



    
    // TODO 4 - Create Cannons
    createCollectable("steve", 1350, 600);
    createCollectable("max", 200, 170, 0.5, 0.7);
    createCollectable("ken", 70, 300);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
