const input = `3,4,3,1,2`;
const input2 = `5,1,4,1,5,1,1,5,4,4,4,4,5,1,2,2,1,3,4,1,1,5,1,5,2,2,2,2,1,4,2,4,3,3,3,3,1,1,1,4,3,4,3,1,2,1,5,1,1,4,3,3,1,5,3,4,1,1,3,5,2,4,1,5,3,3,5,4,2,2,3,2,1,1,4,1,2,4,4,2,1,4,3,3,4,4,5,3,4,5,1,1,3,2,5,1,5,1,1,5,2,1,1,4,3,2,5,2,1,1,4,1,5,5,3,4,1,5,4,5,3,1,1,1,4,5,3,1,1,1,5,3,3,5,1,4,1,1,3,2,4,1,3,1,4,5,5,1,4,4,4,2,2,5,5,5,5,5,1,2,3,1,1,2,2,2,2,4,4,1,5,4,5,2,1,2,5,4,4,3,2,1,5,1,4,5,1,4,3,4,1,3,1,5,5,3,1,1,5,1,1,1,2,1,2,2,1,4,3,2,4,4,4,3,1,1,1,5,5,5,3,2,5,2,1,1,5,4,1,2,1,1,1,1,1,2,1,1,4,2,1,3,4,2,3,1,2,2,3,3,4,3,5,4,1,3,1,1,1,2,5,2,4,5,2,3,3,2,1,2,1,1,2,5,3,1,5,2,2,5,1,3,3,2,5,1,3,1,1,3,1,1,2,2,2,3,1,1,4,2`;

function parseInput(input) {
  return input.split(",").map((s) => parseInt(s));
}

function simulate(fish, days) {
  let currFish = fish;
  for (let t = 0; t < days; t++) {
    let newFishCount = 0;
    currFish = currFish.map((timer) => {
      if (timer === 0) {
        newFishCount++;
        return 6;
      } else {
        return timer - 1;
      }
    });
    for (let i = 0; i < newFishCount; i++) {
      currFish.push(8);
    }
  }
  return currFish.length;
}

function simulateCached(fishTimers, days) {
  // Initialize fish counts
  let fishCounts = Array(9).fill(0);
  fishTimers.forEach((time) => {
    fishCounts[time]++;
  });

  for (let t = 0; t < days; t++) {
    // Rotate list by putting first part at the end
    // Count at 0 is now at position 8
    const firstItem = fishCounts.slice(0, 1)[0];
    const nextFishCounts = fishCounts.slice(1).concat([firstItem]);

    if (firstItem > 0) {
      // Count at 0 is also at position 6
      nextFishCounts[6] += firstItem;
    }
    fishCounts = nextFishCounts;
  }
  return fishCounts.reduce((acc, curr) => acc + curr, 0);
}

function solvePart1(input) {
  const fish = parseInput(input);
  return simulate(fish, 80);
}

function solvePart2(input) {
  const fish = parseInput(input);
  return simulateCached(fish, 256);
}
console.log(solvePart2(input2));
