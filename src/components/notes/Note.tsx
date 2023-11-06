import { FaEdit, FaUserEdit } from "react-icons/fa";
import Form from "../form/Form";
import "./Note.scss";
import { notes } from "../../data";
import Card from "../card/Card";

const Note = () => {
  return (
    <main>
      <h1>
        <FaEdit /> <span>Take you'r notes.</span>
        <FaUserEdit />
      </h1>
      <Form />

      <section className="notes">
        {notes.map((note) => (
          <Card note={note} />
        ))}
      </section>
    </main>
  );
};

export default Note;
