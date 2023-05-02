const numOfDice = process.argv[2];
console.log(numOfDice);

if (!numOfDice || isNaN(numOfDice)) {
  console.log('Please provide a valid number of dice to roll.');
  process.exit(1);
}
if (numOfDice <= 0) {
  console.log('Please provide a positive integer of dice to roll.');
  process.exit(1);
}

const rollDice = function(num) {
  const out = [];
  for (let i = 0; i < num; i++) {
    out.push(Math.floor(Math.random() * 6) + 1);
  }
  return out;
};

console.log(`Rolled ${numOfDice} dice : ${rollDice(numOfDice).join(", ")}`);