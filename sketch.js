const {
  Engine,
  World,
  Bodies,
  Mouse,
  MouseConstraint,
  Constraint
} = Matter;

let ground;
const boxes = [];
let ;
let world, engine;
let mConstraint;
let slingshot;

let dotImg;
let boxImg;
let bkgImg;

function preload() {
  dotImg = loadImage('dot.png');
  boxImg = loadImage('equals.png');
  bkgImg = loadImage('skyBackground.png');
}

function setup() {
  const canvas = createCanvas(711, 400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height - 10, width, 20);
  for (let i = 0; i < 3; i++) {
    boxes[i] = new Box(450, 300 - i * 75, 84, 100);
  }
   = new (150, 300, 25);

  slingshot = new SlingShot(150, 300, .body);

  const mouse = Mouse.create(canvas.elt);
  const options = {
    mouse: mouse
  };

  // A fix for HiDPI displays
  mouse.pixelRatio = pixelDensity();
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
}

function keyPressed() {
  if (key == ' ') {
    World.remove(world, .body);
     = new (150, 300, 25);
    slingshot.attach(.body);
  }
}

function mouseReleased() {
  setTimeout(() => {
    slingshot.();
  }, 100);
}

function draw() {
  background(bkgImg);
  Matter.Engine.update(engine);
  ground.show();
  for (let box of boxes) {
    box.show();
  }
  slingshot.show();
  .show();
}
