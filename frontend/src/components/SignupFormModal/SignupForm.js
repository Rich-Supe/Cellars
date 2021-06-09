import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import styles from '../LoginFormModal/LoginForm.module.css';
import './SignupForm.css';


function SignupForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, name, birthday, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>

        <div className={styles.loginBox2}>
        <h1 className={styles.loginHeader}>Signup</h1>
        <div className={styles.textBox2}>
            {/* <i class="far fa-envelope"></i> */}
            <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        </div>
        <div className={styles.textBox2}>
            <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
            />
        </div>
        <div className={styles.textBox2}>
            <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            required
            />
        </div>
        <div className={styles.textBox2}>
            <input
            type="date"
            placeholder='birthday'
            onChange={(e) => setBirthday(e.target.value)}
            required
            />
        </div>
        <div className={styles.textBox2}>
            <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            />
        </div>
        <div className={styles.textBox2}>
            <input
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            />
        </div>
            <button className={styles.submitBtn} type="submit">Sign Up</button>
        </div>
    </form>
  );
}

export default SignupForm;