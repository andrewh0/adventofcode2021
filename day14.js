const input = `
NNCB

CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C
`;

const input2 = `
BSONBHNSSCFPSFOPHKPK

PF -> P
KO -> H
CH -> K
KN -> S
SS -> K
KB -> B
VS -> V
KV -> O
KP -> B
OF -> C
HB -> C
NP -> O
NS -> V
VO -> P
VF -> H
CK -> B
PC -> O
SK -> O
KF -> H
FV -> V
PP -> H
KS -> B
FP -> N
BV -> V
SB -> F
PB -> B
ON -> F
SF -> P
VH -> F
FC -> N
CB -> H
HP -> B
NC -> B
FH -> K
BF -> P
CN -> N
NK -> H
SC -> S
PK -> V
PV -> C
KC -> H
HN -> K
NO -> H
NN -> S
VC -> P
FF -> N
OO -> H
BK -> N
FS -> V
BO -> F
SH -> S
VK -> F
OC -> F
FN -> V
OV -> K
CF -> F
NV -> V
OP -> K
PN -> K
SO -> P
PS -> S
KK -> H
HH -> K
NH -> O
FB -> K
HS -> B
BB -> V
VB -> O
BH -> H
OK -> C
CC -> B
FK -> N
SN -> V
HK -> N
KH -> F
OS -> O
FO -> P
OH -> B
CP -> S
BN -> H
OB -> B
BP -> B
CO -> K
SP -> K
BS -> P
VV -> N
VN -> O
NF -> F
CV -> B
HC -> B
HV -> S
BC -> O
HO -> H
PO -> P
CS -> B
PH -> S
SV -> V
VP -> C
NB -> K
HF -> C
`;

function parseInput(input) {
  const [template, rulesList] = input.trim().split("\n\n");

  const rules = rulesList.split("\n").map((r) => r.split(" -> "));
  const ruleMap = {};
  rules.forEach(([elements, between]) => {
    ruleMap[elements] = between;
  });

  return [template.split(""), ruleMap];
}

function step(template, ruleMap) {
  const nextTemplate = [];
  let i = 0;
  while (i < template.length - 1) {
    const currentItem = template[i];
    const itemToInsert = ruleMap[`${template[i]}${template[i + 1]}`];
    nextTemplate.push(currentItem);
    if (ruleMap[`${template[i]}${template[i + 1]}`]) {
      nextTemplate.push(itemToInsert);
    }
    i += 1;
  }
  nextTemplate.push(template[i]);

  return nextTemplate;
}

function countOccurrences(template) {
  const occurrences = {};
  for (let i = 0; i < template.length; i++) {
    occurrences[template[i]] ||= 0;
    occurrences[template[i]] += 1;
  }
  return occurrences;
}

function countPairOccurrences(template) {
  const occurrences = {};
  for (let i = 0; i < template.length - 1; i++) {
    const pair = `${template[i]}${template[i + 1]}`;
    occurrences[pair] ||= 0;
    occurrences[pair] += 1;
  }
  return occurrences;
}

function getLeastMostFromOccurrences(occurrences) {
  let least = Infinity;
  let most = -Infinity;
  for (let k in occurrences) {
    if (occurrences[k] < least) {
      least = occurrences[k];
    }
    if (occurrences[k] > most) {
      most = occurrences[k];
    }
  }
  return [least, most];
}

function solvePart1(input) {
  const [template, ruleMap] = parseInput(input);
  let currTemplate = template;
  for (let i = 0; i < 10; i++) {
    currTemplate = step(currTemplate, ruleMap);
  }
  const letterOccurrences = countOccurrences(currTemplate);
  const [least, most] = getLeastMostFromOccurrences(letterOccurrences);
  return most - least;
}

function step2(pairOccurrences, letterOccurrences, ruleMap) {
  const nextPairOccurrences = Object.assign({}, pairOccurrences);
  const nextLetterOccurrences = Object.assign({}, letterOccurrences);

  for (let pair in pairOccurrences) {
    if (ruleMap[pair]) {
      const insertedLetter = ruleMap[pair];
      nextLetterOccurrences[insertedLetter] ||= 0;
      nextLetterOccurrences[insertedLetter] += pairOccurrences[pair];
      nextPairOccurrences[`${pair[0]}${insertedLetter}`] ||= 0;
      nextPairOccurrences[`${pair[0]}${insertedLetter}`] +=
        pairOccurrences[pair];
      nextPairOccurrences[`${insertedLetter}${pair[1]}`] ||= 0;
      nextPairOccurrences[`${insertedLetter}${pair[1]}`] +=
        pairOccurrences[pair];
      nextPairOccurrences[pair] = Math.max(
        nextPairOccurrences[pair] - pairOccurrences[pair],
        0
      );
    }
  }

  return [nextPairOccurrences, nextLetterOccurrences];
}

function solvePart2(input) {
  // Keep track of counts of pairs and counts of letters
  // to avoid repeating work. The template has a ton of
  // repeated pairs; no need to create each template to
  // count letters.
  const [template, ruleMap] = parseInput(input);

  // Make pair occurrences
  let pairOccurrences = countPairOccurrences(template);
  // Make letter occurrences
  let letterOccurrences = countOccurrences(template);
  for (let i = 0; i < 40; i++) {
    let [nextPairOccurrences, nextLetterOccurrences] = step2(
      pairOccurrences,
      letterOccurrences,
      ruleMap
    );
    pairOccurrences = nextPairOccurrences;
    letterOccurrences = nextLetterOccurrences;
  }
  const [least, most] = getLeastMostFromOccurrences(letterOccurrences);
  return most - least;
}

console.log(solvePart2(input2));
