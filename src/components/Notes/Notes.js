import React, { useState } from "react";
import Arrow from "../../assets/arrow-left.svg";
import { nanoid } from "nanoid";
import Sidebar from "../Sidebar/Sidebar";
import Editor from "../Editor/Editor";
import "./Notes.css"

export default function Notes() {
  const [arrowToggled, setArrowToggled] = useState(false);
  const [notes, setNotes] = React.useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );
  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
  );

  React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function toggleArrow() {
    setArrowToggled((prevValue) => !prevValue);
  }

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      title: "Title test",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu dui. ",
      creationDate: new Date().toLocaleDateString("pt-PT"),
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }

  function updateNote(text) {
    // Put the most recently-modified note at the top
    setNotes((oldNotes) => {
      const newArray = [];
      for (let i = 0; i < oldNotes.length; i++) {
        const oldNote = oldNotes[i];
        if (oldNote.id === currentNoteId) {
          newArray.unshift({ ...oldNote, body: text });
        } else {
          newArray.push(oldNote);
        }
      }
      return newArray;
    });
  }

  function deleteNote(event, noteId) {
    event.stopPropagation();
    setNotes((allNotes) => allNotes.filter((note) => note.id !== noteId));
  }

  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId;
      }) || notes[0]
    );
  }

  return (
    <main className="note-container">
      {notes.length > 0 ? (
        <div className="notes-container">
          {!arrowToggled && (
            <Sidebar
              notes={notes}
              currentNote={findCurrentNote()}
              setCurrentNoteId={setCurrentNoteId}
              newNote={createNewNote}
              deleteNote={deleteNote}
            />
          )}

          {currentNoteId && notes.length > 0 && (
            <div>
              <img
                onClick={toggleArrow}
                className={arrowToggled ? "arrow arrow-active" : "arrow"}
                alt="arrow"
                src={Arrow}
              />
              <Editor currentNote={findCurrentNote()} updateNote={updateNote} />
            </div>
          )}
        </div>
      ) : (
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button className="first-note" onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </main>
  );
}
