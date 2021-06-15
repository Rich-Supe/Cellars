import { useState } from 'react';
import { useDispatch } from 'react-redux';
import AddWineForm from './AddWineForm';

import styles from './AddWine.module.css'

const AddWine = () => {
    

    return (
        <div className={styles.winePage}>
            {/* <header>ADD WINES HERES</header> */}
            <AddWineForm />
        </div>
    )
}

export default AddWine;