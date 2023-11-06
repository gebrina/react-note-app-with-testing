import { ChangeEvent, useState } from "react";
import "./Form.scss";
import { FaSave } from "react-icons/fa";

const Form = () => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const handleNoteChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = event;
    setNote(value);
  };
  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    setTitle(value);
  };
  return (
    <form>
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={handleTitleChange}
        className="input-filed"
      />
      <textarea
        value={note}
        placeholder="Type something"
        rows={5}
        cols={40}
        onChange={handleNoteChange}
        className="input-filed"
      />
      <button className="btn">
        <FaSave /> Save
      </button>
    </form>
  );
};

export default Form;
