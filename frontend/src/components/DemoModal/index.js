import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import Demo from './Demo'
import styles from '../LoginFormModal/LoginForm.module.css';

function DemoLoginModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className={styles.loginBtn} onClick={() => setShowModal(true)}>Demo</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <Demo />
        </Modal>
      )}
    </>
  );
}

export default DemoLoginModal;