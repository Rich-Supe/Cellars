import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import styles from './JournalForm.module.css'
import { getWines } from '../../store/wines'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import WineModal from "../WineModal";

const JournalForm = ({id}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [value, setValue] = useState('');
    const [wineName, setWineName] = useState('');
    const wines = useSelector((state) => Object.values(state.wines))
    console.log(wineName)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submitted!')
        // dispatch()
        history.push('/journal')
    }

    useEffect(() => {
        dispatch(getWines())
    }, [dispatch])
    return (
        <div className={styles.createPage}>
            <form className={styles.journalForm} onSubmit={handleSubmit}>
                <header className={styles.journalForm__header}>Write new entry here</header>
                <input list="names" onChange={(e) => setWineName(e.target.value)}/>
                <datalist id="names">
                {wines?.map(wine=>{
                    return <option value={wine.id, wine.name} key={wine.id}/>
                })}
                </datalist>
                <div className={styles.journalForm__form}>
                        <ReactQuill theme="snow" value={value} onChange={setValue}/>
                </div>

                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}

export default JournalForm;