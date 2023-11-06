import { useEffect } from "react";
import { FaEdit, FaUserEdit } from "react-icons/fa";
import Form from "../form/Form";
import "./Note.scss";
import Card from "../card/Card";
import { getNotes } from "../../utils";

const Note = () => {
  const notes = getNotes();

  return (
    <main>
      <h1>
        <FaEdit /> <span>Take you'r notes.</span>
        <FaUserEdit />
      </h1>
      <Form />

      <section className="notes">
        {notes.map((note) => (
          <Card key={note.id} note={note} />
        ))}
      </section>
    </main>
  );
};

export default Note;
