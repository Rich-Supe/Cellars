import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import styles from './JournalForm.module.css'
import { getWines } from '../../store/wines'
import { createEntry } from '../../store/entries'

import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.bubble.css';
// import 'quill/dist/quill.snow.css';


const JournalForm = ({id}) => {
    const sessionUser = useSelector(state => state.session.user);
    const userId = sessionUser.id
    const dispatch = useDispatch();
    const history = useHistory();
    const [wineName, setWineName] = useState('');
    const [rating, setRating] = useState('0')
    const wines = useSelector((state) => Object.values(state.wines))

    ////////////////////////////////////////////////////////////////////
    const [value, setValue] = useState('');
    const [textValue, setTextValue] = useState('')
    const theme = 'bubble';
    // const theme = 'snow';
    const { quill } = useQuill();
    const { quillRef } = useQuill({theme})

    // console.log(`QUILLL::::`, quill);    // undefined > Quill Object
    // console.log(quillRef); // { current: undefined } > { current: Quill Editor Reference }
    console.log(`VALUE======== `, value)
    console.log(`textValue`, textValue)
    useEffect(() => {
        if (quill) {
            quill.on('text-change', () => {
                const delta = quill.getContents()
                setValue(delta)
                setTextValue(delta)
                console.log(`Delta ====== `, delta)
                });
        }
    }, [quill])

    /////////////////////////////////////////////////////////////////////

    const data = {
        rating,
        entry: value,
        userId,
        wineName,
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        const entry = await dispatch(createEntry(data))
        if (entry){
            history.push('/journal')
        }
    }

    const wineStateChange = (e) => {
        setWineName(e.target.value)
    }

    const handleCancel = (e) => {
        e.preventDefault();
        history.push('/journal')
    }

    let options = [];
    for (let i = 0; i < 11; i++) {
            options.push(<option value={i} id={i} key={i}>{i}</option>)
    }

    console.log(rating)

    useEffect(() => {
        dispatch(getWines())
    }, [])

    return (
        <div className={styles.createPage}>
            <form className={styles.journalForm} onSubmit={handleSubmit}>
                <header className={styles.journalForm__header}>Pick a Wine and Create an Entry!</header>
                <div className={styles.journalForm__winesBar}>
                <input list="names" placeholder="Wine Name" onChange={wineStateChange} className={styles.journalForm__input}/>
                <datalist id="names" className={styles.journalForm__datalist} >
                {wines?.map(wine=>{
                    return <option value={wine.name} id={wines.id} key={wine.id}  className={styles.journalForm__datalist_options}/>
                })}
                </datalist>
                </div>
                <div className={styles.journalForm__form}>
                    <div className={styles.quill}>
                        <div style={{ width: 900, height: 250, border: '3px solid black' }}>
                            <div ref={quillRef}
                                placeholder="Enter content here" />
                        </div>
                    </div>
                        {/* <ReactQuill theme="snow" value={value} onChange={setValue}/> */}
                        <div className={styles.ratingDiv}>
                        <label list="rating" placeholder="Wine Rating" className={styles.custom_selector}>
                            How would you rate this wine?</label>
                            <select id="rating" className={styles.journalForm__datalist} onChange={(e) => {setRating(e.target.value)}}>
                            {options.map((option) => {return option})}
                            </select>
                        </div>
                </div>
                <div className={styles.wineForm__Btn}>
                    <button className={styles.button} type="submit">Add Entry</button>
                    <button className={styles.button2} onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default JournalForm;