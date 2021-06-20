import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const JournalForm = () => {
    const [value, setValue] = useState('');

    return (
        <div>
            <form>
                    <ReactQuill theme="snow" value={value} onChange={setValue}/>
            </form>
        </div>
    )
}

export default JournalForm;