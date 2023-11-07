import { Note } from "../types/Note";

export const addNote = (note: Note) => {
  const savedNotes = JSON.parse(localStorage.getItem("notes"));
  if (savedNotes !== "undefined" && savedNotes) {
    const allNotes = [...savedNotes, note];
    localStorage.setItem("notes", JSON.stringify(allNotes));
  }
};

export const getNotes = (): Note[] => JSON.parse(localStorage.getItem("notes"));

export const deleteNote = (id: number) => {
  let notes = getNotes();
  notes = notes?.filter((note) => note.id !== id);
  localStorage.setItem("notes", JSON.stringify(notes));
};
