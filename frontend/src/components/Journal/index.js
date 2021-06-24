import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom'
import { Modal } from '../../context/Modal';
import EditJournalModal from './EditJournalModal';

import styles from './Journal.module.css'

const Journal = () => {
    const id = useParams();
    const history = useHistory();
    // const [showModal, setShowModal] = useState(false);

    // const handleOpenClose = (e) => {
    //     console.log('model was clicked')
    //     // if (e.target.getAttribute('id') === 'modal-background') {
    //     //     setShowModal(!showModal);
    //     if (e.target.getAttribute('data') === 'food') {
    //         console.log('modal was opened')
    //         setShowModal(!showModal);
    //     } 
    // }

    return (
        <>
            {/* <header>YOUR JOURNAL</header> */}
            <div className={styles.journal}>
                <div className={styles.journal__halfPage}>
                {/* {showModal && (
                    <Modal onClose={(e) => handleOpenClose(e)}>
                        <EditJournalModal />
                    </Modal>
                )} */}
                </div>
                <div className={styles.journal__page}>
                    <div className={styles.journal__newEntry}>
                        <div className={styles.text_box1} onClick={() => history.push('/journal/new')}>
                            <a href="#" className={`${styles.btn} ${styles.btn_white} ${styles.btn_animate}`}>New Entry</a>
                        </div>
                    </div>
                    <div className={styles.journal__editEntry}>
                        {/* <div className={styles.text_box2} onClick={(e)=> handleOpenClose(e)} data='food'> */}
                        <div className={styles.text_box2} onClick={(e)=> history.push('/journal/edit')} data='food'>
                            <a href="#" className={`${styles.btn} ${styles.btn_white} ${styles.btn_animate}`} data='food'>Edit Entry</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Journal;