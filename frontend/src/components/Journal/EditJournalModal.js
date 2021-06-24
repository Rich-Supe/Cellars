import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { getEntries, deleteEntry } from '../../store/entries'
import { editEntry } from '../../store/entries';

// import styles from "./JournalForm.module.css"
import styles from '../JournalForm/JournalForm.module.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { MdDeleteForever } from 'react-icons/md'

const EditJournalModal = () => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch()
    const userId = sessionUser.id
    const entries = useSelector((state) => state.entries)
    const history = useHistory();
    const [value, setValue] = useState('');
    const [wineName, setWineName] = useState('');
    const [rating, setRating] = useState('0')

    console.log('entries:',entries)
    const wines = Object.values(entries).map((obj) => obj.Wine)
    console.log(`WINES:`, wines)
    const entryId = Object.values(entries).map((obj) => obj.id)
    console.log(`entryID`, entryId)

    
    const data = {
        rating,
        entry: value,
        userId: 1,
        wineName,
    }

    // console.log(data)

    const wineStateChange = (e) => {
        setWineName(e.target.value)
    }

    useEffect(() => {
        dispatch(getEntries(userId))
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const entry = await dispatch(editEntry(data))
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
        console.log('deleted!')
        dispatch(deleteEntry(userId, wineName))
    }

    return (
           <div className={styles.createPage}>
            <form className={styles.journalForm} onSubmit={handleSubmit}>
                <header className={styles.journalForm__header}>Pick a wine to Edit!</header>
                <div className={styles.journalForm__winesBar}>
                <input list="names" placeholder="Wine Name" onChange={wineStateChange} className={styles.journalForm__input}/>
                <div className={styles.deleteBtn}>
                <MdDeleteForever className={styles.deleteIcon}/>
                <p id="deleteBtn">Delete entry instead?</p>
                </div>
                <datalist id="names" className={styles.journalForm__datalist} >
                {wines?.map(wine=>{
                    return <option value={wine.name} id={wines.id} key={wine.name}  className={styles.journalForm__datalist_options}/>
                })}
                </datalist>
                </div>
                <div className={styles.journalForm__form}>
                        <ReactQuill theme="snow" value={value} onChange={setValue}/>
                        <div className={styles.ratingDiv}>
                        <label list="rating" placeholder="Wine Rating" className={styles.custom_selector}>
                            How would you rate this wine?</label>
                            {/* {(function () {let selector = document.querySelector('.custom_selector');
                                selector.addEventListener('change', e => {
                                console.log('changed', e.target.value)
                                })

                                selector.addEventListener('mousedown', e => {
                                if(window.innerWidth >= 420) {// override look for non mobile
                                    e.preventDefault();
                                    
                                    const select = selector.children[0];
                                    const dropDown = document.createElement('ul');
                                    dropDown.className = "selector-options";
                                    
                                    [...select.children].forEach(option => {
                                    const dropDownOption = document.createElement('li');
                                    dropDownOption.textContent = option.textContent;
                                    
                                    dropDownOption.addEventListener('mousedown', (e) => {
                                        e.stopPropagation();
                                        select.value = option.value;
                                        selector.value = option.value;
                                        select.dispatchEvent(new Event('change'));
                                        selector.dispatchEvent(new Event('change'));
                                        dropDown.remove();
                                    });

                                    dropDown.appendChild(dropDownOption);   
                                    });

                                    selector.appendChild(dropDown);
                                    
                                    // handle click out
                                    document.addEventListener('click', (e) => {
                                    if(!selector.contains(e.target)) {
                                        dropDown.remove();
                                    }
                                    });
                                }
                                });
                            })()} */}
                            <select id="rating" className={styles.journalForm__datalist} onChange={(e) => {setRating(e.target.value)}}>
                            {options.map((option) => {return option})}
                            </select>
                        </div>
                </div>
                <div className={styles.wineForm__Btn}>
                    <button className={styles.button} type="submit">Submit</button>
                    <button className={styles.button2} onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EditJournalModal;