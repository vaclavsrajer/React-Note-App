import React from "react";

export default function Sidebar(props) {
  const noteElements = props.notes.map((note, index) => (
    <div className="sidebar-notes" key={note.id}>
      <div
        className={`title ${
          note.id === props.currentNote.id ? "selected-note" : ""
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        <div className="sidebar-text">
          <h1>{note.title}</h1>
          <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>
          <p>{note.creationDate}</p>
        </div>
        <button
          className="delete-btn"
          onClick={(event) => props.deleteNote(event, note.id)}
        >
          <i className="gg-trash trash-icon"></i>
        </button>
      </div>
    </div>
  ));

  return (
    <section className="pane sidebar">
      <div className="button-container">
        <button className="new-note" onClick={props.newNote}>
          Create Note
        </button>
      </div>
      <div className="title-container">
        <h3>Notes</h3>
      </div>
      {noteElements}
    </section>
  );
}
