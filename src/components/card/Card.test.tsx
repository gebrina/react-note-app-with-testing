import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card, { CardProps } from "./Card";
import { Note } from "../../types/Note";

describe("Tests for Card Component", () => {
  const setNoteRemoved = jest.fn((removed: boolean) => removed);
  const note: Note = {
    title: "What is something",
    description: "Something is just something better than nothing",
  };
  const cardProps: CardProps = {
    note,
    setNoteRemoved,
  };

  test("Card  should be renderd", () => {
    render(<Card {...cardProps} />);
  });

  test("Passed note should rendered", () => {
    render(<Card {...cardProps} />);

    const noteTitle = screen.getByText(note.description);
    const noteDescription = screen.getByText(note.description);

    expect(noteTitle).toBeInTheDocument();
    expect(noteDescription).toBeInTheDocument();
  });

  test("delete button should delete a note", () => {
    render(<Card {...cardProps} />);
    const deleteButton = screen.getByTestId("delete-btn");
    expect(deleteButton).toBeInTheDocument();
    fireEvent.click(deleteButton);
  });
});
