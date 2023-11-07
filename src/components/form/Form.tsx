import { ChangeEvent, FC, FormEvent, useState } from "react";
import "./Form.scss";
import { FaSave } from "react-icons/fa";
import { addNote } from "../../utils";
import { Note } from "../../types/Note";

export type FormProps = {
  setNewNoteAdded: (added: boolean) => void;
  notes: Note[];
};
const Form: FC<FormProps> = ({ setNewNoteAdded, notes }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<Note>({
    title: null,
    description: null,
  });

  const titleError = "Title, for your note is required!";
  const descriptionError = "Description, for your note is required!";

  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = event;
    setDescription(value);
    value
      ? setErrors({ ...errors, description: null })
      : setErrors({ ...errors, description: descriptionError });
  };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setTitle(value);
    value
      ? setErrors({ ...errors, title: null })
      : setErrors({ ...errors, title: titleError });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title && description) {
      addNote({ id: notes.length + 1, title, description });
      setNewNoteAdded(true);
      setTitle("");
      setDescription("");
    } else if (!title) {
      setErrors({ ...errors, title: titleError });
    } else if (!description) {
      setErrors({
        ...errors,
        description: descriptionError,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} data-testid="form">
      <input
        type="text"
        aria-label="Insert your note's title"
        value={title}
        placeholder="Title"
        onChange={handleTitleChange}
        className="input-filed"
      />
      {errors.title && <p className="error">{errors.title}</p>}
      <textarea
        aria-label="Insert your note's main description."
        value={description}
        placeholder="Type something"
        rows={5}
        cols={40}
        onChange={handleDescriptionChange}
        className="input-filed"
      />
      {errors.description && <p className="error">{errors.description}</p>}
      <button className="btn">
        <FaSave /> Save
      </button>
    </form>
  );
};

export default Form;
