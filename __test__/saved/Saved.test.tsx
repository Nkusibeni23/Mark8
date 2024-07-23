// __test__/Page.test.tsx

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Page from "../../app/saved/page"; // Adjust the import path according to your file structure
import Layout from "../../app/Components/Layout"; // Adjust the import path according to your file structure

// Mocking the Layout component
jest.mock("../../app/Components/Layout", () => {
  return ({ children }: { children: React.ReactNode }) => <div>{children}</div>;
});

describe("Product Page", () => {
  test("renders the saved products section correctly", () => {
    render(<Page />);

    // Check if the saved products heading is rendered
    expect(screen.getByText("Saved Products")).toBeInTheDocument();

    // Check if the saved products count is rendered
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

    // Verify product prices and discounts
    expect(screen.getByText("12,000 Rwf")).toBeInTheDocument();
    expect(screen.getByText("16,000 Rwf")).toBeInTheDocument();
  });

  test("renders call-to-action section correctly", () => {
    render(<Page />);

    // Check if the CTA text is rendered
    expect(screen.getByText("Open your Store")).toBeInTheDocument();

    // Check if the email input and submit button are rendered
    expect(screen.getByPlaceholderText("Enter your Email")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
  });
});
