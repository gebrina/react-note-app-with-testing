import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Note from "./Note";
import { Note as NoteType } from "../../types/Note";

const notes: NoteType[] = [
  {
    id: 1,
    title: "Learning",
    description: "Learn something to know something",
  },
];

jest.mock("../../utils", () => ({
  getNotes: jest.fn((): NoteType[] => notes),
}));

describe("Note Component Tests", () => {
  test("Note Should have nothing", () => {
    render(<Note />);
  });

  test("Note component must have a header", () => {
    render(<Note />);
    const notesHeading = screen.getByRole("heading", { level: 1 });
    expect(notesHeading).toBeInTheDocument();
  });

  test("handlePrevPage function should be called on clicking of prev page icon", () => {
    render(<Note />);
    const prevPageButton = screen.getByTestId("prev-btn");
    expect(prevPageButton).toBeInTheDocument();
    fireEvent.click(prevPageButton);
  });

  test("handleNextPage function should be called on clicking of next page icon", () => {
    render(<Note />);
    const nextPageButton = screen.getByTestId("next-btn");
    expect(nextPageButton).toBeInTheDocument();
    fireEvent.click(nextPageButton);
  });
});
