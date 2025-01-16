import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

it("renders without crashing", function() {
  render(<Counter />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<Counter />);
  expect(asFragment()).toMatchSnapshot();
});

test('playing with queries', () => {
  const { getByText } = render(<Counter />)
  console.log(getByText("Let's count!"))
})