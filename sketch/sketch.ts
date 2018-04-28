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
      const num = p.random(1);
      p.push();

      switch (true) {
        case num <= 0.2:
          yCoordinates[i]--;
          break;
        case num <= 0.4:
          yCoordinates[i]++;
          break;
        case num <= 0.6:
          xCoordinates[i]--;
          break;
        default:
          xCoordinates[i]++;
          break;
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
      xCoordinates[i] = p.width / 2;
      yCoordinates[i] = p.height / 2;
    }
  };
};

var sketchP = new p5(sketch);
