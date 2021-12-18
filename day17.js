const input = "target area: x=20..30, y=-10..-5";
const input2 = "target area: x=155..215, y=-132..-72";

function parseInput(input) {
  const [_target, _area, xComma, yStr] = input.split(" ");
  const [xStr, _comma] = xComma.split(",");
  const [_xEquals, xValues] = xStr.split("x=");
  const [xMin, xMax] = xValues.split("..");

  const [_yEquals, yValues] = yStr.split("y=");
  const [yMin, yMax] = yValues.split("..");

  return [parseInt(xMin), parseInt(xMax), parseInt(yMin), parseInt(yMax)];
}

function isInBox(target, xPos, yPos) {
  const { xMin, xMax, yMin, yMax } = target;
  return xMin <= xPos && xPos <= xMax && yMin <= yPos && yPos <= yMax;
}

function isPastBox(target, xPos, yPos) {
  const { xMax, yMin } = target;
  return xPos > xMax || yPos < yMin;
}

function isGoingToMakeIt(target, velocity) {
  let xPos = 0;
  let yPos = 0;
  let yMax = 0;
  let [xVel, yVel] = velocity;

  while (!isInBox(target, xPos, yPos) && !isPastBox(target, xPos, yPos)) {
    xPos += xVel;
    yPos += yVel;
    xVel = xVel > 0 ? xVel - 1 : xVel < 0 ? xVel + 1 : 0;
    yVel -= 1;

    yMax = Math.max(yMax, yPos);
  }
  if (isInBox(target, xPos, yPos)) {
    return yMax;
  }
  return null;
}

function findMaxHeight({ xMin, xMax, yMin, yMax }) {
  let maxHeight = -Infinity;
  for (let xVel = 0; xVel < 1000; xVel++) {
    for (let yVel = 0; yVel < 1000; yVel++) {
      const result = isGoingToMakeIt({ xMin, xMax, yMin, yMax }, [xVel, yVel]);
      if (result !== null) {
        maxHeight = Math.max(maxHeight, result);
      }
    }
  }
  return maxHeight;
}

function isGoingToMakeIt2(target, velocity) {
  let xPos = 0;
  let yPos = 0;
  let yMax = 0;
  let [xVel, yVel] = velocity;

  while (!isInBox(target, xPos, yPos) && !isPastBox(target, xPos, yPos)) {
    xPos += xVel;
    yPos += yVel;
    xVel = xVel > 0 ? xVel - 1 : xVel < 0 ? xVel + 1 : 0;
    yVel -= 1;

    yMax = Math.max(yMax, yPos);
  }
  if (isInBox(target, xPos, yPos)) {
    const [x, y] = velocity;
    return `${x},${y}`;
  }
  return null;
}

function countDistinctVelocities({ xMin, xMax, yMin, yMax }) {
  let velocitySet = new Set();
  // I probably could've spent more time calculating the bounds here, but this works.
  for (let xVel = 0; xVel < 1000; xVel++) {
    for (let yVel = -1000; yVel < 1000; yVel++) {
      const result = isGoingToMakeIt2({ xMin, xMax, yMin, yMax }, [xVel, yVel]);
      if (result !== null) {
        velocitySet.add(result);
      }
    }
  }
  return velocitySet.size;
}

function solvePart1(input) {
  const [xMin, xMax, yMin, yMax] = parseInput(input);
  return findMaxHeight({ xMin, xMax, yMin, yMax });
}

function solvePart2(input) {
  const [xMin, xMax, yMin, yMax] = parseInput(input);
  return countDistinctVelocities({ xMin, xMax, yMin, yMax });
}

console.log(solvePart2(input2));
