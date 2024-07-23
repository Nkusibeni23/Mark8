import React, { ReactNode } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Page from "../../app/product/page"; // Adjust the import path according to your file structure

jest.mock("../../app/Components/Layout", () => {
  return ({ children }: { children: ReactNode }) => <div>{children}</div>;
});

describe("Product Page", () => {
  test("renders product details correctly", () => {
    render(<Page />);

    expect(screen.getByText("Product 1")).toBeInTheDocument();

    expect(screen.getByText("9,000 Rwf")).toBeInTheDocument();
    expect(
      screen.getByText(
        "A cozy boutique offering a curated selection of unique, high-quality clothing and accessories for fashion-forward individuals."
      )
    ).toBeInTheDocument();

    expect(screen.getByText("(123 Reviews)")).toBeInTheDocument();

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(12);
    expect(screen.getByText("Add To Cart")).toBeInTheDocument();
  });

  test("handles quantity change correctly", () => {
    render(<Page />);

    const increaseButton = screen.getAllByRole("button", { name: "+" })[0];
    const decreaseButton = screen.getAllByRole("button", { name: "-" })[0];
    const quantity = screen.getByText("1");

    expect(quantity).toBeInTheDocument();

    fireEvent.click(increaseButton);
    expect(screen.getByText("1")).toBeInTheDocument();

    fireEvent.click(decreaseButton);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("renders related products correctly", () => {
    render(<Page />);
    expect(screen.getByText("Product 2")).toBeInTheDocument();
    expect(screen.getByText("Product 3")).toBeInTheDocument();
    expect(screen.getByText("Product 4")).toBeInTheDocument();
    expect(screen.getByText("Product 5")).toBeInTheDocument();
  });
});
