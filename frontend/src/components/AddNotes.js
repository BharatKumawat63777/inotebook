import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
const AddNotes = (props) => {
  const context = useContext(noteContext);

  // eslint-disable-next-line
  const { addNotes } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNotes(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Your Notes Add ", "success");
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
            value={note.title}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            placeholder="Enter Description"
            value={note.description}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="tag">Tag</label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            placeholder="Enter Tag "
            value={note.tag}
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
