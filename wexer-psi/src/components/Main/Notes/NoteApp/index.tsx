import { useState } from "react";

function NoteComp(props:any) {
  const [noteText, setNoteText] = useState("");

  const handleNoteTextChange = (event:any) => {
    setNoteText(event.target.value);
  };

  const handleAddNoteClick = () => {
    if (noteText) {
      props.addNoteHandler(noteText);
      setNoteText("");
    }
  };

  return (
    <div>
      <textarea value={noteText} onChange={handleNoteTextChange} />
      <button onClick={handleAddNoteClick}>Add Note</button>
    </div>
  );
}

function NoteApp() {
  const [notes, setNotes] = useState([]);

  const addNote = (noteText) => {
    setNotes([...notes, noteText]);
  };

  return (
    <div>
      <h1>My Notes</h1>
      <NoteComp addNoteHandler={addNote} />
      {notes.map((note, index) => (
        <div key={index}>
          <p>{note}</p>
        </div>
      ))}
    </div>
  );
}

export default NoteApp;
