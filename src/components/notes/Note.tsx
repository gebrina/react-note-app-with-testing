import { FaEdit, FaUserEdit } from "react-icons/fa";
import Form from "../form/Form";
import "./Note.scss";
import Card from "../card/Card";
import { getNotes } from "../../utils";
import { Fragment, useEffect, useState } from "react";

const Note = () => {
  const [notes, setNotes] = useState(getNotes());
  const [newNoteAdded, setNewNoteAdded] = useState(false);
  const [noteRemoved, setNoteRemoved] = useState(false);

  useEffect(() => {
    if (newNoteAdded || noteRemoved) {
      setNotes(getNotes());
      setNewNoteAdded(false);
      setNoteRemoved(false);
    }
  }, [newNoteAdded, noteRemoved]);

  return (
    <main>
      <h1>
        <FaEdit /> <span>Take you'r notes.</span>
        <FaUserEdit />
      </h1>
      <Form setNewNoteAdded={setNewNoteAdded} notes={notes} />

      <section className="notes">
        {notes.map((note) => (
          <Fragment key={note.id}>
            <Card setNoteRemoved={setNoteRemoved} note={note} />
          </Fragment>
        ))}
      </section>
    </main>
  );
};

export default Note;
