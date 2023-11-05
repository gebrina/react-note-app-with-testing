import { FC } from "react";
import { Note } from "../../types/Note";
import "./Card.scss";

type CardProps = {
  note: Note;
};
const Card: FC<CardProps> = ({ note }) => {
  const { description, title } = note;
  return (
    <div className="card">
      <h3 className="title">{title}</h3>
      <p className="body">{description}</p>
    </div>
  );
};

export default Card;
