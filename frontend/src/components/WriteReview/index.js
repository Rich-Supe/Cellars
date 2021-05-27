import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';


import styles from './WriteReview.module.css'

const WriteReview = () => {
    const history = useHistory();
    const [reviewInput, setReviewInput] = useState('');
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
             type="submit" 
             value={submit}
             onChange={(e) => setReviewInput(e.target.value)}
             ></textarea>
        </>
    )
}