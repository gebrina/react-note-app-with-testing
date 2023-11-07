import { render, screen } from "@testing-library/react";
import Form, { FormProps } from "./Form";
import "@testing-library/jest-dom";

describe("Tests for Form Component", () => {
  const mockedSetNewNoteAdded = jest.fn((added: boolean) => added);
  const formProps: FormProps = {
    notes: [],
    setNewNoteAdded: mockedSetNewNoteAdded,
  };

  test("Form should be rendered", () => {
    render(<Form {...formProps} />);
    const titleField = screen.getByPlaceholderText(/title/i);
    const descriptionField = screen.getByPlaceholderText(/type something/i);

    expect(titleField).toBeInTheDocument();
    expect(descriptionField).toBeInTheDocument();
  });
});
