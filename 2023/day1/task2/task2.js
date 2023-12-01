const {input} = require("./input");

// const input = [
//   "two1nine",
//   "eightwothree",
//   "abcone2threexyz",
//   "xtwone3four",
//   "4nineeightseven2",
//   "zoneight234",
//   "7pqrstsixteen",
// ];

const mappingArray = [
    ["one", 1],
    ["two", 2],
    ["three", 3],
    ["four", 4],
    ["five", 5],
    ["six", 6],
    ["seven", 7],
    ["eight", 8],
    ["nine", 9],
  ],
  mappingMap = new Map(mappingArray);

console.clear();

const result = input.reduce((acc, line) => {
  const firstText = line.match(
    /(\d|one|two|three|four|five|six|seven|eight|nine)/
  )[0];

  const firstDigit =
    firstText.length > 1 ? mappingMap.get(firstText) : firstText;

  const lastText = line.match(
    /.*(\d|one|two|three|four|five|six|seven|eight|nine).*/
  )[1];
  const lastDigit = lastText.length > 1 ? mappingMap.get(lastText) : lastText;
  const number = `${firstDigit}${lastDigit}`;

  return acc + +number;
}, 0);

console.log(result);
