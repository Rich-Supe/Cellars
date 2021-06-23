// import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom'
import { Modal } from '../../context/Modal';
import JournalForm from '../JournalForm'

import styles from './Journal.module.css'

const Journal = () => {
    const id = useParams();
    const history = useHistory();


    return (
        <>
            {/* <header>YOUR JOURNAL</header> */}
            <div className={styles.journal}>
                <div className={styles.journal__halfPage}></div>
                <div className={styles.journal__page}>
                    <div className={styles.journal__newEntry}>
                        <div className={styles.text_box1} onClick={() => history.push('/journal/new')}>
                            <a href="#" className={`${styles.btn} ${styles.btn_white} ${styles.btn_animate}`}>New Entry</a>
                        </div>
                    </div>
                    <div className={styles.journal__editEntry}>
                        <div className={styles.text_box2}>
                            <a href="#" className={`${styles.btn} ${styles.btn_white} ${styles.btn_animate}`}>Edit Entry</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Journal;