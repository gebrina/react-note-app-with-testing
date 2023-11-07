import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Form, { FormProps } from "./Form";
import "@testing-library/jest-dom";

describe("Tests for Form Component", () => {
  const mockedSetNewNoteAdded = jest.fn((added: boolean) => true);
  const formProps: FormProps = {
    notes: [],
    setNewNoteAdded: mockedSetNewNoteAdded,
  };

  test("Form should be rendered", () => {
    render(<Form {...formProps} />);
  });

  test("form fileds should be rendered", () => {
    render(<Form {...formProps} />);
    const titleField = screen.getByPlaceholderText(/title/i);
    const descriptionField = screen.getByPlaceholderText(/type something/i);

    expect(titleField).toBeInTheDocument();
    expect(descriptionField).toBeInTheDocument();
  });

  test("handleTitleChange function  should be called when user type on title input field", async () => {
    render(<Form {...formProps} />);
    const titleField: HTMLInputElement = screen.getByPlaceholderText(/title/i);
    expect(titleField).toBeInTheDocument();
    fireEvent.change(titleField, { target: { value: "new title" } });

    await waitFor(() => {
      expect(titleField.value).toBe("new title");
    });
  });

  test("handleDescriptionChange should be when user types on description input field", async () => {
    render(<Form {...formProps} />);

    const descriptionField: HTMLTextAreaElement =
      screen.getByPlaceholderText(/type something/i);
    fireEvent.change(descriptionField, {
      target: { value: "new description" },
    });

    await waitFor(() => {
      expect(descriptionField.value).toBe("new description");
    });
  });

  test("Save button shoud submit when clicking on it", async () => {
    render(<Form {...formProps} />);
    const saveButton = screen.getByRole("button");
    expect(saveButton).toBeInTheDocument();
    const titleField: HTMLInputElement = screen.getByPlaceholderText(/title/i);
    const descriptionField: HTMLTextAreaElement =
      screen.getByPlaceholderText(/type something/i);

    fireEvent.change(titleField, { target: { value: "new title" } });
    fireEvent.change(descriptionField, {
      target: { value: "new description" },
    });
    fireEvent.click(saveButton);
  });

  test("If form is submitted with empty title, error message should be displayed", () => {
    render(<Form {...formProps} />);
    const savebutton = screen.getByRole("button");
    fireEvent.click(savebutton);

    const titleErrorMessage = screen.getByText(
      /Title, for your note is required!/i
    );
    expect(titleErrorMessage).toBeInTheDocument();
  });

  test("If form is submitted with valid title only, description error should be displayed", () => {
    render(<Form {...formProps} />);
    const saveButton = screen.getByRole("button");
  });
});
