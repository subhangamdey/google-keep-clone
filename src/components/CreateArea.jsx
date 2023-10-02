import React, { useState } from "react";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import { Fab } from "@mui/material";




function CreateArea(props) {
  
  const [expand, setExpand]=useState(false);
  const [note,setNote]=useState({
    title:"",
    content:""
  })

  function handleChange(event){
    const {name,value}=event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]:value
      };
    })
    
  }

  function handleClick(event){
      props.onSubmit(note);
      event.preventDefault();
      setNote({
        title:"",
        content:""
      });
  }
  
  function openArea(){
    setExpand(true);
  }
  
  
  return (
    <div>
      <form class="create-note" onClick={openArea}>
      {expand && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea 
        onChange={handleChange} 
        value={note.content} 
        name="content" 
        placeholder="Take a note..." 
        rows={expand?3:1} />
        
        <Fab onClick={handleClick}>
          <AddRoundedIcon color="disabled" />
        </Fab>
        
      </form>
    </div>
  );
}

export default CreateArea;
