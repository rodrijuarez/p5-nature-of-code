var sketch = (p: p5) => {
  p.preload = () => {};

  let currentX = 0,
    currentY = 0,
    numberOfLines = 20,
    yEdgeTransformations = [];

  p.setup = () => {
    p.createCanvas(800, 800);
    p.smooth();

    for (let i = 0; i < numberOfLines; i++) {
      yEdgeTransformations.push(p.random(0, 50));
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(800, 800);
  };

  p.draw = () => {
    const moveRight = p.round(p.random()) === 1;

    if (moveRight) {
      currentX++;
    } else {
      currentY++;
    }
    for (let i = 0; i < numberOfLines; i++) {
      p.push();
      p.translate(0, yEdgeTransformations[i]);
      p.point(currentX, currentY);
      p.pop();
    }
  };

  p.mouseClicked = () => {
    currentX = 0;
    currentY = 0;
  };
};

var sketchP = new p5(sketch);
