import React, { useContext, useState } from 'react';
import NoteContext from '../context/notes/NoteContext';

const AddNote = () => {
    const context = useContext(NoteContext);
    const {addNote} = context;
    const [note, setNote] = useState({title: "", description: "", tag: ""});

    const onChange = (e)=>{
        setNote({...note, [e.target.name] : e.target.value})
    }

    const clickHandler = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }

    return (
        <div>
            <h2>Add a Note</h2>
            <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" name="description" id="description" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" name="tag" id="tag" onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={clickHandler}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote