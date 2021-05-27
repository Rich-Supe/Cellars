import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';


import styles from './WriteReview.module.css'

const WriteReview = (wine) => {
    const history = useHistory();
    const [reviewInput, setReviewInput] = useState('');
    

    console.log('HELLO. Review MODAL IS WORKING')
    
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/wines")
    }

    return (
        <>
            <label>
                Leave your review
            </label>
            <textarea
             onChange={(e) => setReviewInput(e.target.value)}
             ></textarea>
        </>
    )
}

export default WriteReview;