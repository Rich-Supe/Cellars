import React, {useState, useEffect} from 'react';
// import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {createReview} from '../../store/wines'


import styles from './WriteReview.module.css'

const WriteReview = ({props}) => {

    const {wine, setShowReview} = props;
    // const history = useHistory();
    const dispatch = useDispatch();
    const [reviewInput, setReviewInput] = useState('');
    const user = useSelector(state => state.session.user)
    if (!user) return null
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(createReview({review: reviewInput, wineId: wine.id, userId:user.id}))
        setShowReview(false)
    }

    return (
        <>
            <div className={styles.headerDiv}>
                        <header className={styles.reviewHeader}>Enter Your Review Here:</header>
                    </div>
            <form className={styles.reviewForm}>
                <textarea
                className={styles.reviewCard}
                onChange={(e) => setReviewInput(e.target.value)}
                ></textarea>
                <footer className={styles.footer}>
                <button className={styles.footerP} onClick={handleSubmit}>Submit</button>
                </footer>
            </form>
        </>
    )
}

export default WriteReview;