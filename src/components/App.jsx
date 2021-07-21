import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [notes, setNotes] = useState([{title:"To Delete any note" , content:"just click the trash can"}]);
    
    function deleteNote(id){
        console.log("Delete triggered");
        setNotes((prevNotes) => {
          return (prevNotes.filter((noteItem, index) => {
            return index !== id;
          })
          )
        });
    };

    function addNote(newNote){
      setNotes((prevNotes) => {
        return [...prevNotes,newNote]; //keep all old notes
      });
    };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((note, index) => {
          return (
          <Note 
            key = {index}
            id = {index}
            onDelete={deleteNote}  
            title = {note.title} 
            content = {note.content}
             />)

      })}
      
    <Footer />
    </div>
  );
}

export default App;
