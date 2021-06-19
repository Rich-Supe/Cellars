import React from "react"
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import * as sessionActions from "../../store/session";
import styles from '../LoginFormModal/LoginForm.module.css';

function DemoModal() {
const dispatch = useDispatch();
const history = useHistory();
const credential = "Demo"
const password = "password"

const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sessionActions.login({ credential, password}))
    history.push('/wines')

};

    return (
        <>
            <div className={styles.loginBox3}>
                <h1>Continue as a demo user?</h1>
                <div className={styles.submitBtnDiv}>
                    <button className={styles.submitBtn} onClick={handleSubmit}>Yes!</button>
                </div>
            </div>
        </>
    )
}

export default DemoModal;