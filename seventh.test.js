// MATCHERS

let myValue = 1;
let myName = "Mantas";
let animals = ["lion", "zebra", "snake"];

test("Matchers test", () => {
  expect(myValue).toBe(1);
  expect(myValue).toEqual(1);

  expect(myValue).toBeGreaterThan(0);
  expect(myValue).toBeLessThan(10);
  expect(myValue).toBeGreaterThanOrEqual(1);
  expect(myValue).toBeLessThanOrEqual(3);

  expect(myName).toMatch(/Mant/);
  expect(myName).not.toMatch(/mant/);
  expect(myName).toMatch(/mant/i); // case insensitive

  expect(animals).toContain("zebra");
});

// TRUTHY & FALSY

// falsy --->  false,0, null, undefined, NaN, ""

let someValue = null;

test("Null value test", () => {
  expect(someValue).toBeNull();
  expect(someValue).toBeDefined(); // will pass as value is defined = null
  expect(someValue).toBeFalsy();
  expect(someValue).not.toBeTruthy();
  expect(someValue).not.toBeUndefined();
});

//  TESTING ERRORS

function check() {
  throw new Error("Fatal mistake");
}

test("Test error check", () => {
  expect(check).toThrow(); //less specific
  expect(check).toThrow(Error); //more specific
  expect(check).toThrow("Fatal mistake"); //most specific

  expect(check).toThrow(/fatal/i); //checking if any message with word "fatal" is being thrown
});
