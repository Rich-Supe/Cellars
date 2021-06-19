import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';
import styles from '../LoginFormModal/LoginForm.module.css';

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <button className={styles.loginBtn} onClick={() => setShowModal(true)}>Sign Up</button> */}
      <div className={styles.btn} onClick={() => setShowModal(true)}>
                                <span>
                                    <i class="fas fa-user-plus"></i>
                                    Sign up
                                </span>
                            </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;