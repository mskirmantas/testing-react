test("Third A", () => {
  expect(2 + 3).toBe(5);
});

// test = it
it("Third B", () => {
  expect(2 + 3).toBe(5);
});

describe("Our described tests", () => {
  test("One", () => {
    expect(2 + 3).toBe(5);
  });

  it("Two", () => {
    expect(2 + 3).toBe(5);
  });
});
