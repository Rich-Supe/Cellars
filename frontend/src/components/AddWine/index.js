import { useState } from 'react';
import { useDispatch } from 'react-redux';
import AddWineForm from './AddWineForm';

import styles from './AddWine.module.css'

const AddWine = () => {
    

    return (
        <>
            <header>ADD WINES HERES</header>
            <AddWineForm />
        </>
    )
}

export default AddWine;