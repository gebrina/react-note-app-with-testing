import { ChangeEvent, FormEvent, useRef, useState } from "react";
import "./Form.scss";
import { FaSave } from "react-icons/fa";
import { addNote } from "../../utils";

const Form = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const errorsRef = useRef({ title: null, description: null });

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
    if (errorsRef.current.title && errorsRef.current.description) {
      addNote({ title, description });
    } else if (!errorsRef.current.title) {
      errorsRef.current.title = "Title, for your note is required!";
    } else {
      errorsRef.current.description = "Description for your note is required!";
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
      <textarea
        aria-label="Insert your note's main description."
        value={description}
        placeholder="Type something"
        rows={5}
        cols={40}
        onChange={handleDescriptionChange}
        className="input-filed"
      />
      <button className="btn">
        <FaSave /> Save
      </button>
    </form>
  );
};

export default Form;
