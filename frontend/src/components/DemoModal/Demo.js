import React from "react"
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import styles from '../LoginFormModal/LoginForm.module.css';

function DemoModal() {
const dispatch = useDispatch();
const credential = "Demo"
const password = "password"

const handleSubmit = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.login({ credential, password}))
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