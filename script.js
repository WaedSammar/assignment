// Task 2
function sumAndAvg(numbers) {
  if (numbers.length === 0) {
    return { sum: 0, average: 0 };
  }
  const sum = numbers.reduce(
    (accumulator, current) => accumulator + current,
    0
  );
  const average = sum / numbers.length;
  return { sum, average };
}
// Task 3
function removeDuplicate(strings) {
  const str = new Set(strings);
  return Array.from(str);
}
