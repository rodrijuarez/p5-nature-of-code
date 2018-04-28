var sketch = (p: p5) => {
  p.preload = () => {};

  let xCoordinates = [],
    yCoordinates = [],
    numberOfLines = 1;

  p.setup = () => {
    p.createCanvas(800, 800);

    cleanCoordinates();
  };

  p.windowResized = () => {
    p.resizeCanvas(800, 800);
  };

  p.draw = () => {
    for (let i = 0; i < numberOfLines; i++) {
      const choice = p.round(p.random(4));
      p.push();
      p.strokeWeight(2);
      switch (choice) {
        case 1:
          xCoordinates[i]++;
          break;
        case 2:
          yCoordinates[i]++;
          break;
        case 3:
          yCoordinates[i]--;
          break;
        case 4:
        case 0:
          xCoordinates[i]--;
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
