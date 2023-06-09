import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import App from "../src/App";
import React from "react";

describe("App Test", () => {
  it("renders headline", () => {
    render(<App />);
    const headline = screen.getByText(/It works and you found me!/i);
    expect(headline).toBeInTheDocument();
  });
});
