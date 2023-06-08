import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet Component Tests", () => {
  it("Greet renders correctly!", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  it("Greet renders with a name", () => {
    render(<Greet name="Vishwas" />);
    const textElement = screen.getByText(/Hello Vishwas/i);
    expect(textElement).toBeInTheDocument();
  });
});
