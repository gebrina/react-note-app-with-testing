import { FC } from "react";
import { Note } from "../../types/Note";
import "./Card.scss";
import { FaTrash } from "react-icons/fa";
import { deleteNote } from "../../utils";

export type CardProps = {
  note: Note;
  setNoteRemoved: (removed: boolean) => void;
};

const Card: FC<CardProps> = ({ note, setNoteRemoved }) => {
  const { id, title, description } = note;

  const handleDelete = () => {
    deleteNote(id);
    setNoteRemoved(true);
  };

  return (
    <div className="card">
      <button onClick={handleDelete} className="delete-btn">
        <FaTrash data-testid="delete-btn" />
      </button>
      <h3 className="title">{title.substring(0, 20)}</h3>
      <p className="body">{description}</p>
    </div>
  );
};

export default Card;
