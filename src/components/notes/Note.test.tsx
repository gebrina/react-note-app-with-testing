import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Note from "./Note";
describe("Note Component Tests", () => {
  test("Note Should have nothing", () => {
    render(<Note />);
  });

  test("Note component must have a header", () => {
    render(<Note />);
    const notesHeading = screen.getByRole("heading", { level: 1 });
    expect(notesHeading).toBeInTheDocument();
  });
});
