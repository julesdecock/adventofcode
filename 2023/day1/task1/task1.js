const {input} = require("./input");

const onlyNumbers = input.reduce((acc, elem) => {
  const noChar = elem.replace(/[a-z]/g, "");
  const number = `${[...noChar]?.[0]}${[...noChar]?.[noChar.length - 1]}`;
  return acc + +number;
}, 0);

console.log(onlyNumbers);
