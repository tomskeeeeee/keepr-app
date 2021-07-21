import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const blankNote = {title: "", content: ""};
    const[note, setNote] = useState(
        {title: "",
        content: ""}
    );

    function updateNote(event){
        const {name, value} = event.target;
        setNote((prevNote) =>{
          return{
            ...prevNote, //keep previous typing
            [name] : value //update just part that was changed
          };
          //my original code - the 3 lines above replace all this
        // if(name === "title"){
        //     return {
        //         title: value,
        //         content: prevValue.content
        //     }
        // }
        // else if (name === "content"){
        //     return {
        //         title: prevValue.title,
        //         content: value
        //     }
        // }
    });
    };

function submitNote(event){
  //this function is triggered by the click (add) button event
  props.onAdd(note); //call the addNote function sent in from App
  //send over the current note just written in this component
  setNote(blankNote);
  event.preventDefault(); //prevent  automatic re-rendering

};

const [isExpanded, setExpanded] = useState(false);

function expand(){
  setExpanded(true);
}

  return (
    <div>
      <form className="create-note">

      {isExpanded ? 
     
        <input 
        onChange = {updateNote} 
        name="title" 
        placeholder="Title" 
        value={note.title}/>
         : null}

        <textarea 
        onClick={expand}
        onChange={updateNote} 
        name="content" 
        value={note.content} 
        placeholder="Take a note..." 
        rows={isExpanded ? "3" : "1"} />
        <Zoom in={isExpanded ? true : false}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab> 
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
