const input = `
5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526
`;

const input2 = `
2682551651
3223134263
5848471412
7438334862
8731321573
6415233574
5564726843
6683456445
8582346112
4617588236
`;

const parseInput = (input) => {
  return input
    .trim()
    .split("\n")
    .map((s) => s.split("").map((c) => parseInt(c)));
};

function canFlash(board, flashes) {
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (!flashes[r][c] && board[r][c] > 9) {
        return true;
      }
    }
  }
  return false;
}

function flashAll(board, flashes) {
  while (canFlash(board, flashes)) {
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[0].length; c++) {
        if (board[r][c] > 9 && !flashes[r][c]) {
          if (r >= 1) {
            if (c >= 1) {
              board[r - 1][c - 1] += 1;
            }
            board[r - 1][c] += 1;
            if (c < board[0].length - 1) {
              board[r - 1][c + 1] += 1;
            }
          }
          if (r < board.length - 1) {
            if (c >= 1) {
              board[r + 1][c - 1] += 1;
            }
            board[r + 1][c] += 1;
            if (c < board[0].length - 1) {
              board[r + 1][c + 1] += 1;
            }
          }
          if (c < board[0].length - 1) {
            board[r][c + 1] += 1;
          }
          if (c >= 1) {
            board[r][c - 1] += 1;
          }
          flashes[r][c] = 1;
        }
      }
    }
  }
}

function step(board) {
  const flashes = Array(board.length)
    .fill(0)
    .map((_) => Array(board[0].length).fill(0));

  let flashCount = 0;

  // Increase energy by 1
  board.forEach((row, r) => {
    row.forEach((_, c) => {
      board[r][c] += 1;
    });
  });

  // Do all flashes
  flashAll(board, flashes);

  // Reset levels
  flashes.forEach((row, r) => {
    row.forEach((col, c) => {
      if (col) {
        board[r][c] = 0;
        flashCount += 1;
      }
    });
  });
  return flashCount;
}

function step2(board) {
  const flashes = Array(board.length)
    .fill(0)
    .map((_) => Array(board[0].length).fill(0));

  // Increase energy by 1
  board.forEach((row, r) => {
    row.forEach((_, c) => {
      board[r][c] += 1;
    });
  });

  // Do all flashes
  flashAll(board, flashes);

  const isDone = isAllFlashing(flashes);

  // Reset levels
  flashes.forEach((row, r) => {
    row.forEach((col, c) => {
      if (col) {
        board[r][c] = 0;
      }
    });
  });

  return [board, isDone];
}

function isAllFlashing(flashes) {
  for (let r = 0; r < flashes.length; r++) {
    for (let c = 0; c < flashes[0].length; c++) {
      if (!flashes[r][c]) {
        return false;
      }
    }
  }
  return true;
}

function simulate(board, stepCount) {
  let totalSteps = 0;
  for (let i = 0; i < stepCount; i++) {
    totalSteps += step(board);
  }
  return totalSteps;
}

function print(board) {
  board.forEach((r) => {
    console.log(r.join(""));
  });
  console.log("_____");
}

function solvePart1(input) {
  const board = parseInput(input);
  const total = simulate(board, 100);
  return total;
}

function solvePart2(input) {
  const board = parseInput(input);
  let [_, isDone] = step2(board);
  let count = 0;
  while (!isDone) {
    const [_, nextIsDone] = step2(board);
    isDone = nextIsDone;
    count += 1;
  }
  return count + 1;
}

console.log(solvePart2(input2));
