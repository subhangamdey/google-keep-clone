import React, { useState } from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';

import CreateArea from './CreateArea';

// function createNote(note){

//     return(<Note title={note.title} content={note.content} key={note.key}/>);
// }

function App(){
    
    const [notes,setNotes]=useState([]);

    function addnote(note){

      setNotes(prevNotes => {
        return [...prevNotes,note]
      }); 

    }
    function deleteItems(id){
      setNotes(prevNotes => {
        return prevNotes.filter((noteItems,index)=>{
          return index!==id;
        })
      })
    }

    return(<div>

    <Header/> 
    <CreateArea onSubmit={addnote}/>
    {notes.map((noteItems,index) => {
        return [<Note 
        id={index}
        key={index}
        title={noteItems.title} 
        content={noteItems.content}
        onDelete={deleteItems}
        />]
    })}
    
    <Footer/></div>);
}

export default App;