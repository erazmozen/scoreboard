import { render, screen } from "@testing-library/react";
import App from "./App";
import LiveScore from "./components/LiveScore";
import Summary from "./components/Summary";

test("correct title for livescore", () => {
  render(<LiveScore />);
  const text = screen.getByText("LiveScore");
  expect(text).toBeInTheDocument();
});

test("correct title for summary", () => {
  render(<Summary />);
  const text = screen.getByText("Summary");
  expect(text).toBeInTheDocument();
});
