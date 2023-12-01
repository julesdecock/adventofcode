const {input} = require("./input");

const onlyNumbers = input
  .map((elem) => {
    const noChar = elem.replace(/[a-z]/g, "");
    return `${[...noChar]?.[0]}${[...noChar]?.[noChar.length - 1]}`;
  })
  .reduce((acc, elem) => {
    return acc + +elem;
  }, 0);

console.log(onlyNumbers);
