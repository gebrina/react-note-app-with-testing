import { ChangeEvent, useState } from "react";
import "./Form.scss";

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
        rows={4}
        onChange={handleNoteChange}
        className="input-filed"
      />
    </form>
  );
};

export default Form;
