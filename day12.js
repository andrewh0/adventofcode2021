const input = `
start-A
start-b
A-c
A-b
b-d
A-end
b-end
`;

const input2 = `
dc-end
HN-start
start-kj
dc-start
dc-HN
LN-dc
HN-end
kj-sa
kj-HN
kj-dc
`;

const input3 = `
fs-end
he-DX
fs-he
start-DX
pj-DX
end-zg
zg-sl
zg-pj
pj-he
RW-he
fs-DX
pj-RW
zg-RW
start-pj
he-WI
zg-he
pj-fs
start-RW
`;

const input4 = `
ex-NL
ex-um
ql-wv
VF-fo
VF-ql
start-VF
end-tg
wv-ZQ
wv-um
NL-start
lx-ex
ex-wv
ex-fo
sb-start
um-end
fo-ql
NL-sb
NL-fo
tg-NL
VF-sb
fo-wv
ex-VF
ql-sb
end-wv
`;

function parseInput(input) {
  return input
    .trim()
    .split("\n")
    .map((s) => s.split("-"));
}

function makeGraph(edges) {
  const graph = {};
  edges.forEach(([start, end]) => {
    graph[start] ||= new Set();
    graph[start].add(end);

    graph[end] ||= new Set();
    if (start !== "start") {
      graph[end].add(start);
    }
  });
  return graph;
}

function isSmallCave(node) {
  return node.toLowerCase() === node;
}

function canExtend(currList, nextNode) {
  const visitedSmallCaves = new Set(currList.filter((n) => isSmallCave(n)));
  return !visitedSmallCaves.has(nextNode);
}

function uniquePaths(graph, canExtend) {
  const results = [];
  function extendPath(node, currList) {
    currList.push(node);
    if (node === "end") {
      results.push(currList);
      return;
    }
    graph[node].forEach((nextNode) => {
      if (canExtend(currList, nextNode)) {
        // Clone currList so that the next call doesn't mutate it
        extendPath(nextNode, currList.slice());
      }
    });
  }
  extendPath("start", []);
  return results;
}

function canExtend2(currList, nextNode) {
  if (!isSmallCave(nextNode)) {
    return true;
  }

  const smallCaveList = currList.filter((n) => isSmallCave(n));
  const occurrences = {};
  let hasTwo = null;
  for (let cave of smallCaveList) {
    occurrences[cave] ||= 0;
    if (occurrences[cave]) {
      hasTwo = cave;
    }
    occurrences[cave] += 1;
  }

  if (!occurrences[nextNode]) {
    return true;
  } else if (nextNode === "start" || nextNode === "end") {
    return false;
  } else {
    return !hasTwo;
  }
}

function solvePart1(input) {
  const edges = parseInput(input);
  const graph = makeGraph(edges);
  return uniquePaths(graph, canExtend).length;
}

function solvePart2(input) {
  const edges = parseInput(input);
  const graph = makeGraph(edges);
  return uniquePaths(graph, canExtend2).length;
}

console.log(solvePart2(input4));
