// import { Modal } from '../../context/Modal';
// import {useState} from 'react'

// import WriteReview from '../WriteReview'
// import styles from './WriteReviewModal.module.css'


// const WriteReviewModal = (wine) => {
//     const [showReviewModal, setShowReviewModal] = useState(false);

//     const handleClose = () => {
//         setShowReviewModal(false);
//     }

//     console.log(`IS THE MODAL OPEN?`, showReviewModal)

//     return (
//         <>
//             <button className={styles.footerP} onClick={() => setShowReviewModal(true), console.log('This was pressed')}>Tell others how you feel! Click here to write your own review.</button>
//             {showReviewModal && (
//                 <Modal onClose={() => handleClose()}>
//                     <WriteReview props={wine}/>
//                 </Modal>
//             )}
//         </>
//     )
// }

// export default WriteReviewModal;