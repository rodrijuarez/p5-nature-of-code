var sketch = (p: p5) => {
  p.preload = () => {};

  let numberOfCounts = 20,
    randomCounts = [];

  p.setup = () => {
    p.createCanvas(800, 800);
    p.smooth();
    p.background(255);

    cleanCoordinates();
  };

  p.windowResized = () => {
    p.resizeCanvas(800, 800);
  };

  p.draw = () => {
    const index = p.round(p.random(randomCounts.length - 1));
    console.log(index);
    console.log(randomCounts);
    randomCounts[index]++;

    p.stroke(p.color(0));
    p.fill(p.color(175));

    const widthOfElement = p.width / randomCounts.length;

    for (let x = 0; x < randomCounts.length; x++) {
      p.rect(
        x * widthOfElement,
        p.height - randomCounts[x],
        widthOfElement - 1,
        randomCounts[x],
      );
    }
  };

  p.mouseClicked = () => {
    cleanCoordinates();
  };

  const cleanCoordinates = () => {
    randomCounts = Array(20).fill(0);
  };
};

var sketchP = new p5(sketch);
