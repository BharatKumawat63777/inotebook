import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:4000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const getNotes = async () => {
    //API call

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkYzI5MDcxYzVlNjU1MmRhMzFmZmZjIn0sImlhdCI6MTcyNTcxMDUxM30.g-tXKSvnSm7hun1SzY_gP3sLVMUSLSKSszsLuw-hsUc",
      },
    });
    const json = await response.json();
    console.log("Hey ",json);
    setNotes(json);
  };

  // Add a Notes

  const addNotes = async (title, description, tag) => {
    //API call

    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkYzI5MDcxYzVlNjU1MmRhMzFmZmZjIn0sImlhdCI6MTcyNTcxMDUxM30.g-tXKSvnSm7hun1SzY_gP3sLVMUSLSKSszsLuw-hsUc",
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    console.log(json);

    const note = {
      _id: "66df13800561158cda4e159a",
      user: "66dc29071c5e6552da31fffc",
      title: title,
      description: description,
      tag: tag,
      data: "2024-09-09T15:25:52.185Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNotes = (id) => {
    console.log("Deleting the note with id", id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a Notes
  const editNotes = async (id, title, description, tag) => {
    //API call

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZkYzI5MDcxYzVlNjU1MmRhMzFmZmZjIn0sImlhdCI6MTcyNTcxMDUxM30.g-tXKSvnSm7hun1SzY_gP3sLVMUSLSKSszsLuw-hsUc",
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    console.log(json);

    // logic to edit in clint
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNotes, deleteNotes, editNotes,getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
