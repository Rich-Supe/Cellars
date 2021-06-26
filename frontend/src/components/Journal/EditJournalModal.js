import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { getEntries, deleteEntry } from '../../store/entries'
import { editEntry } from '../../store/entries';
// import Quill from '../JournalForm/Quill'
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.bubble.css';
// import 'quill/dist/quill.snow.css'; // Add css for snow theme

import styles from '../JournalForm/JournalForm.module.css'
// import ReactQuill from 'react-quill';
import { MdDeleteForever } from 'react-icons/md'

const EditJournalModal = () => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const userId = sessionUser.id
    const entries = useSelector((state) => state.entries)
    const history = useHistory();
    const [wineName, setWineName] = useState('');
    const [rating, setRating] = useState('0')
    
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

    const wines = Object.values(entries).map((obj) => obj.Wine)

    const data = {
        rating,
        entry: value,
        userId: 1,
        wineName,
    }

    const wineStateChange = (e) => {
        setWineName(e.target.value)
    }

    useEffect(() => {
        dispatch(getEntries(userId))
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setValue('');
        const entry = await dispatch(editEntry(data, userId))
        if (entry){
            history.push('/journal')
        }
    }

    const handleCancel = (e) => {
        e.preventDefault();
        history.push('/journal')
    }

    let options = [];
    for (let i = 0; i < 11; i++) {
            options.push(<option value={i} id={i} key={i}>{i}</option>)
    }

    const deleteHandler = () => {
        dispatch(deleteEntry(userId, wineName))
        history.push('/journal')
    }

    return (
           <div className={styles.createPage}>
            <form className={styles.journalForm} onSubmit={handleSubmit}>
                <header className={styles.journalForm__header}>Pick a wine to Edit!</header>
                <div className={styles.journalForm__winesBar}>
                <input list="names" placeholder="Wine Name" onChange={wineStateChange} className={styles.journalForm__input}/>
                <div className={styles.deleteBtn}>
                <MdDeleteForever className={styles.deleteIcon} onClick={deleteHandler}/>
                <p id="deleteBtn">Delete entry instead?</p>
                </div>
                <datalist id="names" className={styles.journalForm__datalist} >
                {wines?.map(wine=>{
                    return <option value={wine.name} id={wines.id} key={wine.name}  className={styles.journalForm__datalist_options}/>
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
                    <button className={styles.button} type="submit">Edit</button>
                    <button className={styles.button2} onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EditJournalModal;