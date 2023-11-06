import { FC } from "react";
import { Note } from "../../types/Note";
import "./Card.scss";
import { FaTrash } from "react-icons/fa";

type CardProps = {
  note: Note;
};
const Card: FC<CardProps> = ({ note }) => {
  const { description, title } = note;
  return (
    <div className="card">
      <FaTrash />
      <h3 className="title">{title.substring(0, 20)}</h3>
      <p className="body">{description}</p>
    </div>
  );
};

export default Card;
