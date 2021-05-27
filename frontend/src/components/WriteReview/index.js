import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {createReview} from '../../store/wines'


import styles from './WriteReview.module.css'

const WriteReview = (wine) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [reviewInput, setReviewInput] = useState('');

    useEffect(() => {
        dispatch(createReview)
    }, [dispatch])
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/wines")
        alert('Submitted!')
    }

    return (
        <>
            <div className={styles.headerDiv}>
                        <header className={styles.reviewHeader}>Your Review Here:</header>
                    </div>
            <form>
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