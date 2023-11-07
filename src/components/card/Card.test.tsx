import { render } from "@testing-library/react";
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
});
