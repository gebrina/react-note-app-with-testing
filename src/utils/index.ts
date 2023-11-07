import { Note } from "../types/Note";

export const addNote = (note: Note) => {
  const savedNotes = getNotes();

  const allNotes = [...savedNotes, note];
  localStorage.setItem("notes", JSON.stringify(allNotes));
};

export const getNotes = (): Note[] => {
  const notes = JSON.parse(localStorage.getItem("notes"));
  if (Array.isArray(notes)) return notes;
  return [];
};

export const deleteNote = (id: number) => {
  let notes = getNotes();
  notes = notes?.filter((note) => note.id !== id);
  localStorage.setItem("notes", JSON.stringify(notes));
};
