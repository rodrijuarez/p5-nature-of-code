var sketch = (p: p5) => {
  p.preload = () => {};

  let xCoordinates = [],
    yCoordinates = [],
    numberOfLines = 20,
    yEdgeTransformations = [];

  p.setup = () => {
    p.createCanvas(800, 800);
    p.smooth();

    cleanCoordinates();
  };

  p.windowResized = () => {
    p.resizeCanvas(800, 800);
  };

  p.draw = () => {
    for (let i = 0; i < numberOfLines; i++) {
      const moveRight = p.round(p.random()) === 1;
      p.push();
      p.translate(0, yEdgeTransformations[i]);
      if (moveRight) {
        xCoordinates[i]++;
      } else {
        yCoordinates[i]++;
      }
      p.point(xCoordinates[i], yCoordinates[i]);
      p.pop();
    }
  };

  p.mouseClicked = () => {
    cleanCoordinates();
  };

  const cleanCoordinates = () => {
    for (let i = 0; i < numberOfLines; i++) {
      yEdgeTransformations.push(p.random(0, 300));
      xCoordinates[i] = 0;
      yCoordinates[i] = 0;
    }
  };
};

var sketchP = new p5(sketch);
