// SKIP, ONLY & TIMEOUT

let myValue = 1;

function add(a, b) {
  return a + b;
}

test("Fifth test 1", () => {
  expect(add(1, 2)).toBe(3);
});

//  ONLY ------------------------

// .only runs only that test from the test suite. Useful developing a test.
// It runs all the other tests from other suites though...

test.only("Fifth test 2", () => {
  expect(myValue).toBe(1);
  console.log("Inside Fifth 2 test");
});

//  SKIP ------------------------

// .skip runs all tests in the suite except for the skip one.

test.skip("Fifth test 3", () => {
  expect(myValue).toBe(1);
  console.log("Inside Fifth 2 test");
});

// TIMEOUT ------------------------

// adding 3rd argument to the test function - timeout in ms.

test("Fifth test 4", () => {
  expect(add(2, 2)).toBe(4);
}, 1000);
