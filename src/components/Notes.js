import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNotes from "./AddNotes";

const Notes = () => {
  const context = useContext(noteContext);

  // eslint-disable-next-line
  const { notes, getNotes } = context;
  useEffect(() => {
    getNotes();
  }, []);
  return (
    <>
      <AddNotes />
      <div className="row my-3">
        <h1>Your Notes this</h1>

        {notes.map((note) => {
          return <Noteitem key={note._id} note={note} />;
        })}
      </div>
    </>
  );
};

export default Notes;
