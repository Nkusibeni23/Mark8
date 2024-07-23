import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Page from "../../app/saved/page";
import Layout from "../../app/Components/Layout";

jest.mock("../../app/Components/Layout", () => {
  return ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
});

describe("Product Page", () => {
  test("renders the saved products section correctly", () => {
    render(<Page />);

    expect(screen.getByText("Saved Products")).toBeInTheDocument();

    expect(screen.getByText("6 Saved")).toBeInTheDocument();
  });

  test("renders all products with correct details", () => {
    render(<Page />);

    const products = [
      "Product 1",
      "Product 2",
      "Product 3",
      "Product 4",
      "Product 5",
      "Product 6",
      "Product 7",
      "Product 8",
    ];

    products.forEach((productName) => {
      expect(screen.getByText(productName)).toBeInTheDocument();
    });

    expect(screen.getByText("12,000 Rwf")).toBeInTheDocument();
    expect(screen.getByText("16,000 Rwf")).toBeInTheDocument();
  });

  test("renders call-to-action section correctly", () => {
    render(<Page />);

    expect(screen.getByText("Open your Store")).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Enter your Email")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
  });
});
