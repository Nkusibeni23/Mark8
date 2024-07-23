import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "../app/cart/page";

describe("Page component", () => {
  it("renders My Cart with correct product count", () => {
    render(<Page />);
    const myCart = screen.getByText(/My Cart/i);
    expect(myCart).toHaveTextContent("My Cart (3)");
  });

  it("renders product names and prices", () => {
    render(<Page />);
    const product1 = screen.getByText(/Product 1/i);
    const product2 = screen.getByText(/Product 2/i);
    const product3 = screen.getByText(/Product 3/i);

    expect(product1).toBeInTheDocument();
    expect(product2).toBeInTheDocument();
    expect(product3).toBeInTheDocument();

    const price1 = screen.getByText(/12,000 Rwf/i);
    const price2 = screen.getByText(/18,000 Rwf/i);
    const price3 = screen.getByText(/15,000 Rwf/i);

    expect(price1).toBeInTheDocument();
    expect(price2).toBeInTheDocument();
    expect(price3).toBeInTheDocument();
  });

  it("renders total price correctly", () => {
    render(<Page />);
    const totalPrice = screen.getByText(/36,000 Rwf/i);
    expect(totalPrice).toBeInTheDocument();
  });

  it("handles cart actions", () => {
    render(<Page />);
    const saveCartButton = screen.getByText(/Save Cart For Later/i);
    const deleteCartButtons = screen.getAllByAltText(/Delete/i);

    fireEvent.click(saveCartButton);
    fireEvent.click(deleteCartButtons[0]);

    expect(saveCartButton).toBeInTheDocument();
    expect(deleteCartButtons[0]).toBeInTheDocument();
  });
});
