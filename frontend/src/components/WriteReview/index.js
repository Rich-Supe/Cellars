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