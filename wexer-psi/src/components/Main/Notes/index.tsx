import { useState } from "react"
import NoteApp from "./NoteApp"

const Notes = () => {
    const [note, addNoteHandler] = useState("")
  return (
    <>
        <NoteApp addNoteHandler={addNoteHandler}/>
        {note}
    </>
  )
}

export default Notes