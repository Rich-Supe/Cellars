import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import Demo from './Demo'
import styles from '../LoginFormModal/LoginForm.module.css';

function DemoLoginModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <button className={styles.loginBtn} onClick={() => setShowModal(true)}>Demo</button> */}
      <div className={styles.btn} onClick={() => setShowModal(true)}>
                                    <i className="fas fa-user-slash"></i>
                                    Demo
                            </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <Demo />
        </Modal>
      )}
    </>
  );
}

export default DemoLoginModal;