import { set } from 'js-cookie'
import { useState } from 'react'

import styles from './AddWine.module.css'

const AddWineForm = () => {
    const [ name, setName ] = useState('')
    const [ grape, setGrape ] = useState('')
    const [ color, setColor ] = useState('Red')
    const [ year, setYear ] = useState('')
    const [ country, setCountry ] = useState('')
    const [ region, setRegion ] = useState('')
    const [ rating, setRating ] = useState('')
    const [ price, setPrice ] = useState('')
    const [ labelUrl, setLabelUrl ] = useState('')

    return (
        <div className={styles.wineForm}>
            <header className={styles.wineForm__header}>Add Your Wine!</header>
            <form>
                <div className={styles.wineForm__name}>
                    <label>Wine Name:</label>
                    <input
                    id='name'
                    type='text'
                    onChange={(e)=>setName(e.target.value)}
                    value={name}/>
                </div>
                <div className={styles.wineForm__type}>
                    <label>Grape:</label>
                    <input
                    id='grape'
                    type='text'
                    onChange={(e)=>setGrape(e.target.value)}
                    value={grape}/>

                    <label>Color:</label>
                    <input
                    id='color'
                    type='text'
                    onChange={(e)=>setColor(e.target.value)}
                    value={color}/>
                </div>
                <div className={styles.wineForm__location}>
                    <label>Country:</label>
                    <input
                    id='country'
                    type='text'
                    onChange={(e)=>setCountry(e.target.value)}
                    value={country}/>
                
                    <label>Region:</label>
                    <input
                    id='region'
                    type='text'
                    onChange={(e)=>setRegion(e.target.value)}
                    value={region}/>
                </div>
                <div className={styles.wineForm__numInputs}>
                    <label>Year:</label>
                    <input
                    id='year'
                    type='number'
                    onChange={(e)=>setYear(e.target.value)}
                    value={year}/>
                
                    <label>Rating:</label>
                    <input
                    id='rating'
                    type='number'
                    onChange={(e)=>setRating(e.target.value)}
                    value={rating}/>
                
                    <label>Price:</label>
                    <input
                    id='price'
                    type='number'
                    onChange={(e)=>setPrice(e.target.value)}
                    value={price}/>
                </div>
                <div className={styles.wineForm__labelUrl}>
                    <label>LabelUrl:</label>
                    <input
                    id='labelUrl'
                    type='url'
                    onChange={(e)=>setLabelUrl(e.target.value)}
                    value={labelUrl}/>
                </div>
                <div className={styles.wineForm__submitBtn}>
                    <button type="submit">Submit Wine</button>
                </div>
            </form>
        </div>
    )
}

export default AddWineForm;