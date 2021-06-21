import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styles from './JournalForm.module.css'


const JournalForm = ({id}) => {
    const [value, setValue] = useState('');
    console.log(id)

    return (
        <>
        <div className={styles.journalForm}>
            <header className={styles.journalForm__header}>Write new entry here</header>
            <form className={styles.journalForm__form}>
                    <ReactQuill theme="snow" value={value} onChange={setValue}/>
            </form>
        </div>
        </>
    )
}

export default JournalForm;