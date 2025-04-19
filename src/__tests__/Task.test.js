import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Add this import
import Task from "../components/Task";

describe("Task Component", () => {
  const mockTask = {
    text: "Buy groceries",
    category: "Shopping",
  };
  const mockOnDelete = jest.fn();

  test("displays the task text and category", () => {
    render(<Task task={mockTask} onDelete={mockOnDelete} />);

    expect(screen.getByText("Buy groceries")).toBeInTheDocument();
    expect(screen.getByText("Shopping")).toBeInTheDocument();
  });

  test("calls onDelete when delete button is clicked", () => {
    render(<Task task={mockTask} onDelete={mockOnDelete} />);

    const deleteButton = screen.getByRole("button", { name: "X" });
    fireEvent.click(deleteButton);

    expect(mockOnDelete).toHaveBeenCalledWith("Buy groceries");
  });
});
