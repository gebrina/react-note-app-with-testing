import { FaArrowLeft, FaArrowRight, FaEdit, FaUserEdit } from "react-icons/fa";
import Form from "../form/Form";
import "./Note.scss";
import Card from "../card/Card";
import { getNotes } from "../../utils";
import { Fragment, useEffect, useState } from "react";

const Note = () => {
  const itemsPerpage = 2;
  const [noteIndex, setNoteIndex] = useState({ start: 0, end: itemsPerpage });

  const [notes, setNotes] = useState(getNotes());
  const [newNoteAdded, setNewNoteAdded] = useState(false);
  const [noteRemoved, setNoteRemoved] = useState(false);

  const paginatedNotes = notes.slice(noteIndex.start, noteIndex.end);

  useEffect(() => {
    if (newNoteAdded || noteRemoved) {
      setNewNoteAdded(false);
      setNoteRemoved(false);
      setNotes(getNotes());
      noteRemoved &&
        setNoteIndex({ start: noteIndex.start - 1, end: noteIndex.end - 1 });
      newNoteAdded &&
        setNoteIndex({ start: notes.length - 1, end: getNotes().length });
    }
  }, [newNoteAdded, noteRemoved, notes, noteIndex]);

  const handleNextPage = () => {
    if (noteIndex.end <= notes.length - 1) {
      setNoteIndex((noteIndex) => ({
        start: noteIndex.start + itemsPerpage,
        end: noteIndex.end + itemsPerpage,
      }));
    }
  };

  const handlePrevPage = () => {
    if (noteIndex.start > 0) {
      setNoteIndex((noteIndex) => ({
        start: noteIndex.start - itemsPerpage,
        end: noteIndex.end - itemsPerpage,
      }));
    }
  };

  return (
    <main>
      <h1>
        <FaEdit /> <span>Take you'r notes.</span>
        <FaUserEdit />
      </h1>
      <Form setNewNoteAdded={setNewNoteAdded} notes={notes} />

      <section className="notes">
        {paginatedNotes.map((note) => (
          <Fragment key={note.id}>
            <Card setNoteRemoved={setNoteRemoved} note={note} />
          </Fragment>
        ))}
      </section>
      <div className="paginator">
        <FaArrowLeft onClick={handlePrevPage} />
        <FaArrowRight onClick={handleNextPage} />
      </div>
    </main>
  );
};

export default Note;
