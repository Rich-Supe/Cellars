import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import styles from './LoginForm.module.css';

function LoginForm() {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
        async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
        }
    );
    };

    return (
    <form onSubmit={handleSubmit}>
        <ul>
        {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
        ))}
        </ul>

        <div className={styles.loginBox}>
        <h1 className={styles.loginHeader}>Login</h1>
            <div className={styles.textBox}>
                <i className="fas fa-user"></i>
                <input
                    // className={styles.textBox}
                    type="text"
                    placeholder="Username"
                    // value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    required
                />
            </div>
            <div className={styles.textBox}>
                <i className="fas fa-lock"></i>
                <input
                    className={styles.textBoxInput}
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
            </div>
            <div className={styles.submitBtnDiv}>
            <button className={styles.submitBtn} type="submit">Sign In</button>
            </div>
        </div>
    </form>
    );
}

export default LoginForm;