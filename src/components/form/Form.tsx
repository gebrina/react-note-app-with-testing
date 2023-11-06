import { ChangeEvent, FormEvent, useState } from "react";
import "./Form.scss";
import { FaSave } from "react-icons/fa";
import { addNote } from "../../utils";
import { Note } from "../../types/Note";

const Form = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<Note>({
    title: null,
    description: null,
  });

  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = event;
    setDescription(value);
  };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    setTitle(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (errors.title && errors.description) {
      addNote({ title, description });
    } else if (!errors.title) {
      setErrors({ ...errors, title: "Title, for your note is required!" });
    } else {
      setErrors({
        ...errors,
        description: "Description for your note is required!",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
