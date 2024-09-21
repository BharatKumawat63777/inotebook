import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
const AddNotes = () => {
  const context = useContext(noteContext);

  // eslint-disable-next-line
  const { addNotes } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "default",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNotes(note.title, note.description, note.tag);
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="container my-3">
      <h1>Add a Note</h1>

      <form className="my-3">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="title"
            className="form-control"
            id="title"
            name="title"
            aria-describedby="title"
            placeholder="Enter Title"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            placeholder="Description"
            onChange={onChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary mb-3"
          onClick={handleClick}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddNotes;
