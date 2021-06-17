import { set } from 'js-cookie'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { createWine } from '../../store/wines'

import styles from './AddWine.module.css'

const AddWineForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [ name, setName ] = useState('')
    const [ grape, setGrape ] = useState('')
    const [ color, setColor ] = useState('Red')
    const [ year, setYear ] = useState('')
    const [ country, setCountry ] = useState('')
    const [ region, setRegion ] = useState('')
    const [ rating, setRating ] = useState('')
    const [ price, setPrice ] = useState('')
    const [ labelUrl, setLabelUrl ] = useState('')

    console.log(`Grape:`,grape, `     color:`,color, `     country:`,country)
    console.log(`year:`, year, `      name:`, name)
    console.log(region, rating, price, labelUrl)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            name,
            grape,
            color,
            year,
            country,
            region,
            rating,
            price,
            labelUrl
        };

        const wine = await dispatch(createWine(payload));
        if (wine) {
            history.push('/wines')
        }
    }

    const handleCancel = (e) => {
        e.preventDefault();
        history.push('/wines')
    }

    return (
        <div className={styles.wineForm}>
            <header className={styles.wineForm__header}>Create Your Wine</header>
            <form className={styles.wineForm__form}>
                <div className={styles.wineForm__name}>
                    <label>Wine Name:</label>
                    <input
                    id='name'
                    type='text'
                    onChange={(e)=>setName(e.target.value)}
                    value={name}/>
                </div>
                <div className={styles.wineForm__type}>
                    <div>
                        <label htmlFor='grape'>Grape:</label>
                        <select id='grape' name='grape' onChange={(e) => setGrape((e.target.value))}>
                            <option>Sauvignon Blanc</option>
                            <option>Cabernet Sauvignon</option>
                            <option>Pinot Noir</option>
                            <option>Merlot</option>
                            <option>Chardonnay</option>
                            <option>Riesling</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='color'>Color:</label>
                        <select id='color' onChange={(e) => setColor((e.target.value))}>
                            <option>Red</option>
                            <option>White</option>
                        </select>
                    </div>
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
                <div className={styles.wineForm__Btn}>
                    {/* <button type="submit" className={styles.wineForm__Btn_submit} onClick={handleSubmit}>Submit Wine</button>
                    <button type="button" className={styles.wineForm__Btn_cancel} onClick={handleCancel}>Cancel</button> */}
                    <button className={styles.button} onClick={handleSubmit}>Submit</button>
                    <button className={styles.button2} onClick={handleCancel}>Cancel</button>
                </div>
                </form>
            </div>
    )
}

export default AddWineForm;