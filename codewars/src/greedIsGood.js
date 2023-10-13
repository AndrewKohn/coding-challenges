function score(dice) {
  const rolls = [[], [], [], [], [], []];

  dice.filter(roll => rolls[roll - 1].push(true));

  const rollCount = rolls.map(value => (value.length > 0 ? value.length : 0));
  const result = rollCount.reduce((acc, val, i) => {
    let count = val,
      value = 0;

    if (count >= 3) value = (i + 1) * 100;

    if (i + 1 === 1) {
      count >= 3
        ? (value = 1000 + (count % 3) * 100)
        : (value = (count % 3) * 100);
    }

    if (i + 1 === 5) {
      count >= 3
        ? (value = 500 + (count % 3) * 50)
        : (value = (count % 3) * 50);
    }

    return acc + value;
  }, 0);

  return result;
}
