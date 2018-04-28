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

      if (num <= 0.5) {
        const mouseX = p.mouseX,
          mouseY = p.mouseY;
        yCoordinates[i];
        xCoordinates[i];

        switch (true) {
          case yCoordinates[i] > mouseY:
            yCoordinates[i]--;
            break;
          case yCoordinates[i] < mouseY:
            yCoordinates[i]++;
            break;
        }

        switch (true) {
          case xCoordinates[i] > mouseX:
            xCoordinates[i]--;
            break;
          case xCoordinates[i] < mouseX:
            xCoordinates[i]++;
            break;
        }
      } else {
        const stepX = p.round(p.random(-1, 1));
        const stepY = p.round(p.random(-1, 1));
        xCoordinates[i] += stepX;
        yCoordinates[i] += stepY;
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
