// frontend/src/components/LoginFormModal/index.js
import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import styles from './LoginForm.module.css';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <button className={styles.loginBtn} onClick={() => setShowModal(true)}>Log In</button> */}
      <div className={styles.btn} onClick={() => setShowModal(true)}>
                                <span>
                                    <i class="fas fa-sign-in-alt"></i>
                                    Log In
                                </span>
                            </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;