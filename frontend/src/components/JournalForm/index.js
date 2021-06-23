import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import styles from './JournalForm.module.css'
import { getWines } from '../../store/wines'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import WineModal from "../WineModal";

const JournalForm = ({id}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [value, setValue] = useState('');
    const [wineName, setWineName] = useState('');
    const [wineId, setWineId] = useState('')
    const wines = useSelector((state) => Object.values(state.wines))
    console.log('WineName: ', wineName)
    console.log('wineId: ', wineId)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submitted!')
        // dispatch()
        history.push('/journal')
    }

    const wineStateChange = (e) => {
        // console.log(`E target`, e.target.list)
        // console.log(`Other target`, e.target.list.options)
        setWineName(e.target.value)
        setWineId(e.target.id)
    }

    const handleCancel = (e) => {
        e.preventDefault();
        history.push('/journal')
    }

    useEffect(() => {
        dispatch(getWines())
    }, [])

    return (
        <div className={styles.createPage}>
            <form className={styles.journalForm} onSubmit={handleSubmit}>
                <header className={styles.journalForm__header}>Pick a wine and create an entry!</header>
                <div className={styles.journalForm__winesBar}>
                <input list="names" placeholder="Wine Name" onChange={wineStateChange} className={styles.journalForm__input}/>
                {/* <datalist id="names" onChange={(e) => setWineId(e.target.id)}> */}
                <datalist id="names" className={styles.journalForm__datalist} >
                {wines?.map(wine=>{
                    return <option data-value={wine.id} name={wine.id} id={wines.id} key={wine.id}  className={styles.journalForm__datalist_options}>
                        {wine.name}
                    </option>
                    // return <option value={wine.name} id={wines.id} key={wine.id}/>
                })}
                </datalist>
                </div>
                <div className={styles.journalForm__form}>
                        <ReactQuill theme="snow" value={value} onChange={setValue}/>
                </div>
                <div className={styles.wineForm__Btn}>
                    <button className={styles.button} type="submit">Submit</button>
                    <button className={styles.button2} onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default JournalForm;