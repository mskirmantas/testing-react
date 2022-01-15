import React from "react";
import Hello from "./Hello";
import { render, screen, fireEvent } from "@testing-library/react";

test("Component should display Hello text", () => {
  const { debug } = render(<Hello />);
  const helloText = screen.getByText("Hello");

  // debug();

  expect(helloText).toBeTruthy();

  // console.log(helloText.tagName); // H1
  expect(helloText.tagName).toBe("H1");

  // console.log(helloText.textContent); // Hello
  expect(helloText.textContent).toBe("Hello");

  // Getting elements:
  // getBy - if element is not there, the test will fail right there on the line
  // queryBy - this is better option then, which will allow to check if something if falsy if not on the page
  // findBy - if you need to wait for elements to be displayed, working with asynchronous code - use this!
});

test("Component should display World text", () => {
  render(<Hello />);
  const worldText = screen.getByTestId("my-heading");

  // debug();

  expect(worldText).toBeTruthy();

  expect(worldText.tagName).not.toBe("H1");
  expect(worldText.tagName).toBe("H2");

  expect(worldText.textContent).not.toBe("World");
  expect(worldText.textContent).toBe("world");
});

test("Button renders and works", () => {
  render(<Hello />);
  const myButton = screen.getByRole("button");

  expect(myButton).toBeTruthy();

  fireEvent.click(myButton);
});

test("Testing input field", () => {
  render(<Hello />);
  let myInput = screen.getByRole("textbox"); // role is textbox,not input
  let myName = "Mantas";

  expect(myInput).toHaveValue("");

  fireEvent.change(myInput, { target: { value: myName } });
  expect(myInput).not.toHaveValue("");
  expect(myInput).toHaveValue(myName);
});
