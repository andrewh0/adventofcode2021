const input = `8A004A801A8002F478`;
const input1 = `620080001611562C8802118E34`; // 12
const input2 = `C0015000016115A2E0802F182340`;
const input3 = `A0016C880162017C3686B18A3D4780`;
const input4 = `38006F45291200`; // operator, lengthTypeId 0
const input5 = `EE00D40C823060`; // operator, lengthTypeId 1
const input6 = `D2FE28`; // literal

const input7 = `620D79802F60098803B10E20C3C1007A2EC4C84136F0600BCB8AD0066E200CC7D89D0C4401F87104E094FEA82B0726613C6B692400E14A305802D112239802125FB69FF0015095B9D4ADCEE5B6782005301762200628012E006B80162007B01060A0051801E200528014002A118016802003801E2006100460400C1A001AB3DED1A00063D0E25771189394253A6B2671908020394359B6799529E69600A6A6EB5C2D4C4D764F7F8263805531AA5FE8D3AE33BEC6AB148968D7BFEF2FBD204CA3980250A3C01591EF94E5FF6A2698027A0094599AA471F299EA4FBC9E47277149C35C88E4E3B30043B315B675B6B9FBCCEC0017991D690A5A412E011CA8BC08979FD665298B6445402F97089792D48CF589E00A56FFFDA3EF12CBD24FA200C9002190AE3AC293007A0A41784A600C42485F0E6089805D0CE517E3C493DC900180213D1C5F1988D6802D346F33C840A0804CB9FE1CE006E6000844528570A40010E86B09A32200107321A20164F66BAB5244929AD0FCBC65AF3B4893C9D7C46401A64BA4E00437232D6774D6DEA51CE4DA88041DF0042467DCD28B133BE73C733D8CD703EE005CADF7D15200F32C0129EC4E7EB4605D28A52F2C762BEA010C8B94239AAF3C5523CB271802F3CB12EAC0002FC6B8F2600ACBD15780337939531EAD32B5272A63D5A657880353B005A73744F97D3F4AE277A7DA8803C4989DDBA802459D82BCF7E5CC5ED6242013427A167FC00D500010F8F119A1A8803F0C62DC7D200CAA7E1BC40C7401794C766BB3C58A00845691ADEF875894400C0CFA7CD86CF8F98027600ACA12495BF6FFEF20691ADE96692013E27A3DE197802E00085C6E8F30600010882B18A25880352D6D5712AE97E194E4F71D279803000084C688A71F440188FB0FA2A8803D0AE31C1D200DE25F3AAC7F1BA35802B3BE6D9DF369802F1CB401393F2249F918800829A1B40088A54F25330B134950E0`;

function hexToBinary(hexStr) {
  const h = {
    0: "0000",
    1: "0001",
    2: "0010",
    3: "0011",
    4: "0100",
    5: "0101",
    6: "0110",
    7: "0111",
    8: "1000",
    9: "1001",
    A: "1010",
    B: "1011",
    C: "1100",
    D: "1101",
    E: "1110",
    F: "1111",
  };
  return hexStr
    .split("")
    .map((c) => h[c])
    .join("");
}

/*
// Operator
{
  version: number,
  typeId: not 4,
  lengthTypeId: 0 | 1,
  children: []
}

// Literal
{
  version: number,
  typeId: 4
  literal: number
}
*/

function parsePacket(binStr, startIndex) {
  let i = startIndex;
  const result = {
    version: parseInt(binStr.slice(i, i + 3), 2),
    typeId: parseInt(binStr.slice(i + 3, i + 6), 2),
  };
  i += 6;

  // This is a literal
  if (result["typeId"] === 4) {
    const [literal, literalBodyLength] = parseLiteral(binStr, i);
    result["literal"] = literal;
    i += literalBodyLength;
    return [result, i];
  }

  // This is an operator
  const lengthTypeId = binStr[i];
  i += 1;
  result["lengthTypeId"] = lengthTypeId;
  // Next 15 bits represent total length in bits of sub-packets
  if (lengthTypeId === "0") {
    const totalSubPacketLength = parseInt(binStr.slice(i, i + 15), 2);
    i += 15;
    let packetIndex = i;
    let children = [];
    while (packetIndex < i + totalSubPacketLength) {
      let [child, nextIndex] = parsePacket(binStr, packetIndex);
      children.push(child);
      packetIndex = nextIndex;
    }
    result["children"] = children;
    i += totalSubPacketLength;

    // Next 11 bits are a number that represents number of sub-packets immediately contained by this packet
  } else {
    const totalSubPacketCount = parseInt(binStr.slice(i + 1, i + 11), 2);
    i += 11;
    let children = [];
    while (children.length < totalSubPacketCount) {
      let [child, nextIndex] = parsePacket(binStr, i);
      children.push(child);
      i = nextIndex;
    }
    result["children"] = children;
  }

  return [result, i];
}

function parseLiteral(binStr, startIndex) {
  let i = startIndex;
  let digits = [];
  while (binStr[i] === "1") {
    let currDigit = "";
    i += 1;
    for (let j = i; j < i + 4; j++) {
      currDigit += binStr[j];
    }
    digits.push(currDigit);
    i += 4;
  }
  i += 1;
  digits.push(binStr.slice(i, i + 4));
  i += 4;

  return [parseInt(digits.join(""), 2), i - startIndex];
}

function getVersionSum(parsedPackets) {
  const [data, _packetLength] = parsedPackets;
  function helper(d) {
    if (!d.children) {
      return d.version;
    } else {
      return (
        d.version + d.children.reduce((acc, child) => acc + helper(child), 0)
      );
    }
  }

  return helper(data);
}

function solvePart1(input) {
  return getVersionSum(parsePacket(hexToBinary(input), 0));
}

function evaluate(expression) {
  if (expression.typeId === 4) {
    return expression.literal;
  } else if (expression.typeId === 0) {
    // +
    return expression.children.reduce((acc, child) => acc + evaluate(child), 0);
  } else if (expression.typeId === 1) {
    // *
    return expression.children.reduce((acc, child) => acc * evaluate(child), 1);
  } else if (expression.typeId === 2) {
    // min
    return expression.children.reduce(
      (acc, child) => Math.min(acc, evaluate(child)),
      Infinity
    );
  } else if (expression.typeId === 3) {
    // max
    return expression.children.reduce(
      (acc, child) => Math.max(acc, evaluate(child)),
      -Infinity
    );
  } else if (expression.typeId === 5) {
    // >
    const children = expression.children;
    return evaluate(children[0]) > evaluate(children[1]) ? 1 : 0;
  } else if (expression.typeId === 6) {
    // <
    const children = expression.children;
    return evaluate(children[0]) < evaluate(children[1]) ? 1 : 0;
  } else if (expression.typeId === 7) {
    // ===
    const children = expression.children;
    return evaluate(children[0]) === evaluate(children[1]) ? 1 : 0;
  } else {
    console.log("invalid type", expression.typeId);
  }
}

function solvePart2(input) {
  const [data, _length] = parsePacket(hexToBinary(input), 0);
  return evaluate(data);
}

console.log(solvePart2(input7));
