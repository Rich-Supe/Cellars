import { Modal } from '../../context/Modal';
import {useState} from 'react'

import WriteReview from '../WriteReview'
import styles from './WriteReviewModal.module.css'


const WriteReviewModal = (wine) => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    }

    console.log(`IS THE MODAL OPEN?`, showModal)

    return (
        <>
            <button className={styles.footerP} onClick={(e) => setShowModal(true)}>Tell others how you feel! Click here to write your own review.
                </button>
                {showModal && (
                    <Modal onClose={() => handleClose()}>
                        <WriteReview props={wine}/>
                    </Modal>
                )}
        </>
    )
}

export default WriteReviewModal;