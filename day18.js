const input = `
[[[0,[5,8]],[[1,7],[9,6]]],[[4,[1,2]],[[1,4],2]]]
[[[5,[2,8]],4],[5,[[9,9],0]]]
[6,[[[6,2],[5,6]],[[7,6],[4,7]]]]
[[[6,[0,7]],[0,9]],[4,[9,[9,0]]]]
[[[7,[6,4]],[3,[1,3]]],[[[5,5],1],9]]
[[6,[[7,3],[3,2]]],[[[3,8],[5,7]],4]]
[[[[5,4],[7,7]],8],[[8,3],8]]
[[9,3],[[9,9],[6,[4,9]]]]
[[2,[[7,7],7]],[[5,8],[[9,3],[0,2]]]]
[[[[5,2],5],[8,[3,7]]],[[5,[7,5]],[4,4]]]
`;

const input2 = `
[[[1,4],[1,6]],[0,[5,[6,3]]]]
[[[8,2],5],[[[9,8],[3,5]],[2,1]]]
[[[[6,2],[0,6]],[[9,8],[7,8]]],[[6,3],[[8,8],3]]]
[[[1,[2,1]],[5,7]],[[[3,1],[3,1]],[[8,4],[8,5]]]]
[[[[6,4],7],[[1,6],5]],[7,[9,5]]]
[[7,[[5,3],[0,9]]],[[[6,2],[6,8]],[5,[5,7]]]]
[9,5]
[[[[7,8],[8,0]],[[3,8],[0,7]]],[[1,[1,2]],2]]
[[[4,[5,5]],[[6,8],[4,3]]],[[9,9],[4,[3,6]]]]
[[[[2,8],7],[[6,1],[1,0]]],[[6,2],9]]
[[[8,1],3],[9,[[1,4],[4,1]]]]
[[[[0,1],[3,9]],[[4,3],6]],[[[4,8],8],[[8,3],[9,5]]]]
[[[[7,3],7],[[5,9],0]],7]
[[[5,[1,6]],3],[[3,5],9]]
[[[[2,5],[1,8]],[[6,5],[0,1]]],[[[4,1],1],[0,[9,6]]]]
[[[4,8],[[3,6],[3,8]]],[[[2,3],3],[[9,8],[7,9]]]]
[[[[5,6],0],[9,[4,4]]],[[[3,1],[3,6]],[[6,0],3]]]
[[[[4,3],4],4],[[[1,6],7],[8,[6,0]]]]
[[[0,2],1],5]
[[[[7,2],[9,0]],[8,[0,1]]],2]
[[[1,6],[[6,2],5]],[[1,[8,2]],[[9,8],7]]]
[[[8,1],9],[[[4,3],2],[[2,9],6]]]
[[[[9,4],0],[4,0]],4]
[[[5,[2,8]],[[5,3],[6,4]]],[8,3]]
[[0,5],[[[3,4],7],[[0,2],[9,1]]]]
[[[8,[7,9]],[[1,8],6]],[[4,[6,0]],0]]
[[[1,0],[[6,7],4]],[[[2,5],[9,7]],[[7,8],0]]]
[[9,[[7,1],3]],[[[9,2],[4,3]],[2,[1,8]]]]
[[[5,[9,6]],4],[1,[[9,2],[6,8]]]]
[6,[[[6,1],7],6]]
[[4,[[5,6],9]],[[9,[6,6]],[[6,1],[8,2]]]]
[[1,[9,5]],[[[5,8],9],5]]
[[[[6,6],[1,8]],6],[[[4,9],4],[8,[9,8]]]]
[[[[6,5],[4,4]],[[0,2],8]],[[[0,6],[4,5]],3]]
[[[1,[6,9]],[9,[5,8]]],[5,2]]
[[2,[[2,8],[3,3]]],[[[1,9],9],6]]
[[3,2],[9,[2,2]]]
[4,[3,[6,[2,0]]]]
[[[[1,0],4],3],[[0,9],[[9,8],[7,1]]]]
[[[2,6],[3,8]],[[5,5],[2,3]]]
[6,[[[8,8],4],[[8,1],[6,6]]]]
[[[5,9],[5,3]],7]
[[[5,[1,2]],[6,[7,2]]],[[[0,5],3],3]]
[[8,[[7,3],[9,7]]],[[2,[3,9]],[[1,7],[5,7]]]]
[8,[4,6]]
[[[4,4],[[4,5],[2,5]]],[[[9,1],0],[[2,9],1]]]
[[[2,[2,8]],9],[5,[6,9]]]
[[[[4,1],5],[6,[2,7]]],[1,2]]
[[[6,[3,5]],0],[[0,3],4]]
[[[[3,2],[8,0]],[5,1]],[[[9,7],3],[[6,5],[2,6]]]]
[[1,[0,[1,4]]],[[[8,6],[6,9]],[[4,9],8]]]
[[[[5,2],[4,3]],[0,[3,5]]],[0,[1,7]]]
[[[8,1],[3,[8,1]]],[[[7,9],[6,2]],[[0,8],2]]]
[[[2,[9,7]],[[6,6],[2,7]]],[[8,[6,4]],0]]
[[3,0],[[6,3],1]]
[[[[5,5],2],[9,7]],[[0,[3,5]],7]]
[[[[4,8],2],0],[[4,[7,9]],[6,6]]]
[[[1,0],[[9,4],[8,8]]],2]
[[[6,1],9],[5,2]]
[[[7,[0,3]],[[5,5],7]],[5,[[0,5],[5,3]]]]
[[[[8,0],4],[[5,5],[9,4]]],[[[9,0],[2,5]],[6,[8,1]]]]
[[[7,8],[0,[5,4]]],[[[7,6],[0,9]],[7,2]]]
[[[4,[0,2]],[3,[4,9]]],[[[4,7],8],3]]
[[1,[5,[7,3]]],8]
[[[[1,3],[6,8]],3],[[6,1],8]]
[[[[7,9],5],[[6,2],4]],[[5,[6,9]],1]]
[[2,[3,[9,3]]],[[6,[2,7]],[4,8]]]
[7,[[6,2],[[6,7],[5,0]]]]
[[[9,[8,6]],1],[[4,8],[[6,1],[0,1]]]]
[[[[4,6],[4,0]],[[2,4],0]],[[[0,5],[9,8]],[[3,4],[2,5]]]]
[9,[3,[[5,5],[3,1]]]]
[[[5,[7,1]],3],[[[8,2],5],[[2,8],[0,0]]]]
[[[[8,3],0],[[5,0],5]],[[3,[8,2]],[[8,2],3]]]
[[4,[[9,4],5]],[[[1,6],[0,2]],[0,8]]]
[[[0,0],[[1,8],2]],[[[1,8],1],[0,[0,8]]]]
[[[6,[1,5]],5],[[2,[0,1]],9]]
[[7,[2,[2,8]]],[4,[[1,1],5]]]
[1,[[4,[0,5]],4]]
[[3,[[3,1],[1,2]]],[[[5,3],8],[5,2]]]
[[[3,[2,0]],6],[[9,3],[[3,0],[1,6]]]]
[4,[[6,[5,9]],[[4,1],[6,6]]]]
[8,[3,0]]
[[[[5,3],[8,8]],[[5,1],4]],[[6,6],[8,2]]]
[[1,[[7,1],5]],[[[2,3],7],[[7,6],0]]]
[9,[[4,3],[[6,2],0]]]
[[[[4,0],4],[1,7]],[[[3,8],8],[[9,1],1]]]
[[[0,1],[9,9]],7]
[[[[1,7],0],[1,5]],[1,[2,2]]]
[[[[6,1],[3,3]],[6,[9,0]]],[[7,0],3]]
[[[[6,1],[9,8]],[[2,2],2]],[8,[3,6]]]
[[6,[5,0]],[7,[1,7]]]
[[4,[[6,1],6]],[[2,5],7]]
[8,[8,[[6,4],1]]]
[[[[0,2],4],[[2,6],2]],0]
[[2,[[6,1],9]],[[7,[0,5]],[5,[9,4]]]]
[3,[[8,7],[[8,9],6]]]
[[[[7,8],[1,1]],[[2,6],[3,7]]],4]
[[[[6,1],1],5],5]
[[9,[4,[6,6]]],[[5,1],[8,2]]]
[[5,[[7,3],4]],9]
`;

function parseInput(input) {
  return input
    .trim()
    .split("\n")
    .map((s) => eval(s));
}

/*

{
  parent: node } null
  value: number | null
  left: node | null
  right : node | null
}
*/
function makeTree(snailNum, parent) {
  const result = {};
  if (typeof snailNum === "number") {
    result.parent = parent;
    result.left = null;
    result.right = null;
    result.value = snailNum;
    return result;
  }
  result.parent = parent;
  result.left = makeTree(snailNum[0], result);
  result.right = makeTree(snailNum[1], result);

  return result;
}

function treeToSnailNum(snailTree) {
  if (!snailTree) {
    return null;
  }
  if (typeof snailTree.value === "number") {
    return snailTree.value;
  }
  return [treeToSnailNum(snailTree.left), treeToSnailNum(snailTree.right)];
}

function reduceSnailNum(snailNum) {
  const tree = makeTree(snailNum, null);
  let prevSnailTreeStr = null;
  let currSnailTreeStr = JSON.stringify(treeToSnailNum(tree));

  while (currSnailTreeStr !== prevSnailTreeStr) {
    prevSnailTreeStr = currSnailTreeStr;
    explode(tree);
    currSnailTreeStr = JSON.stringify(treeToSnailNum(tree));
    if (currSnailTreeStr !== prevSnailTreeStr) {
      continue;
    }
    prevSnailTreeStr = currSnailTreeStr;
    split(tree);
    currSnailTreeStr = JSON.stringify(treeToSnailNum(tree));
  }
  return treeToSnailNum(tree);
}
function explode(snailTree) {
  const deepNodes = [];
  function findDeepNodes(node, depth) {
    if (
      depth > 3 &&
      typeof node?.left?.value === "number" &&
      typeof node?.right?.value === "number"
    ) {
      deepNodes.push(node);
    }
    if (node.left) {
      findDeepNodes(node.left, depth + 1);
    }
    if (node.right) {
      findDeepNodes(node.right, depth + 1);
    }
  }
  findDeepNodes(snailTree, 0);
  const deepestNode = deepNodes[0];
  if (!deepestNode) return;

  function findLeft(node) {
    let currNode = node;
    if (!currNode) {
      return;
    }
    while (currNode.parent !== null && currNode === currNode.parent.left) {
      currNode = currNode.parent;
    }
    if (!currNode.parent) {
      return;
    }
    currNode = currNode.parent;
    currNode = currNode.left;
    while (currNode.right) {
      currNode = currNode.right;
    }
    return currNode;
  }

  function findRight(node) {
    let currNode = node;
    if (!currNode) {
      return;
    }
    while (currNode.parent !== null && currNode !== currNode.parent.left) {
      currNode = currNode.parent;
    }
    if (!currNode.parent) {
      return;
    }
    currNode = currNode.parent;
    currNode = currNode.right;
    while (currNode.left) {
      currNode = currNode.left;
    }
    return currNode;
  }

  const leftDeepestNode = findLeft(deepestNode);
  if (leftDeepestNode) {
    leftDeepestNode.value += deepestNode.left.value;
  }
  const rightDeepestNode = findRight(deepestNode);
  if (rightDeepestNode) {
    rightDeepestNode.value += deepestNode.right.value;
  }

  const zero = {
    parent: null,
    value: 0,
    left: null,
    right: null,
  };
  if (deepestNode.parent.left === deepestNode) {
    const temp = deepestNode.parent;
    deepestNode.parent.left = zero;
    zero.parent = temp;
  }
  if (deepestNode.parent.right === deepestNode) {
    const temp = deepestNode.parent;
    deepestNode.parent.right = zero;
    zero.parent = temp;
  }
  return snailTree;
}

function split(snailTree) {
  const result = [];
  function helper(node) {
    if (node.value && node.value >= 10) {
      result.push(node);
    }

    if (node.left) {
      helper(node.left);
    }
    if (node.right) {
      helper(node.right);
    }
  }
  helper(snailTree);
  const node = result[0];
  if (node) {
    const left = Math.floor(node.value / 2);
    const right = Math.ceil(node.value / 2);
    node.value = null;
    node.left = {
      parent: node,
      value: left,
      left: null,
      right: null,
    };
    node.right = {
      parent: node,
      value: right,
      left: null,
      right: null,
    };
  }
  return snailTree;
}

function add(snailNum1, snailNum2) {
  return reduceSnailNum([snailNum1, snailNum2]);
}

function sum(snailNums) {
  return snailNums.reduce((acc, curr) => add(acc, curr));
}

function findMagnitude(snailNum) {
  if (typeof snailNum === "number") {
    return snailNum;
  }
  return (
    3 *
      (typeof snailNum[0] === "number"
        ? snailNum[0]
        : findMagnitude(snailNum[0])) +
    2 *
      (typeof snailNum[1] === "number"
        ? snailNum[1]
        : findMagnitude(snailNum[1]))
  );
}

function solvePart1(input) {
  return findMagnitude(sum(parseInput(input)));
}

function solvePart2(input) {
  const nums = parseInput(input);
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;
      max = Math.max(findMagnitude(add(nums[i], nums[j])), max);
    }
  }
  return max;
}

console.log(solvePart2(input2));
