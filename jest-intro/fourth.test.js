let myValue = 1;

test("Fourth", () => {
  expect(myValue).toBe(1);
});

function add(a, b) {
  return a + b;
}

beforeAll(() => {
  console.log("Before all test functions");
});

beforeEach(() => {
  console.log("Before test function");
  //   myValue = 1;
});

afterEach(() => {
  console.log("After test function");
});

test("Add function 1", () => {
  expect(add(1, 2)).toBe(3);
});

test("Add function 2", () => {
  expect(add(4, 5)).toBe(9);
  console.log("Inside add function 2 test");
});

test("Add function 3", () => {
  expect(add(2, 2)).toBe(4);
  console.log("Inside add function 3 test");
});
