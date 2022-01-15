// LOOPS

let myValue = 1;

let numbers = [1, 2, 3];

function add(a, b) {
  return a + b;
}

test.each(numbers)("Add 2 to %i", (myNum) => {
  expect(add(2, myNum)).toBe(myNum + 2);
});

let numbers2 = [
  [1, 2, 3],
  [2, 2, 4],
  [4, 5, 9],
];

test.only.each(numbers2)("Add %i to %i should be %i", (a, b, total) => {
  //will display name as "Add 1 to 2 should be 3"
  expect(add(a, b)).toBe(total);
});
