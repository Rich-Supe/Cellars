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
                    <label for='grape'>Grape:</label>
                    {/* <input
                    id='grape'
                    type='text'
                    onChange={(e)=>setGrape(e.target.value)}
                    value={grape}/> */}
                    <select id='grape' name='grape'>
                        <option onClick={(e) => setGrape('Sauvignon Blanc')}>Sauvignon Blanc</option>
                        <option onClick={(e) => setGrape('Cabernet Sauvignon')}>Cabernet Sauvignon</option>
                        <option onClick={(e) => setGrape('Pinot Noir')}>Pinot Noir</option>
                        <option onClick={(e) => setGrape('Merlot')}>Merlot</option>
                        <option onClick={(e) => setGrape('Chardonnay')}>Chardonnay</option>
                        <option onClick={(e) => setGrape('Riesling')}>Riesling</option>
                    </select>
                    

                    <label for='color'>Color:</label>
                    {/* <input
                    id='color'
                    type='text'
                    onChange={(e)=>setColor(e.target.value)}
                    value={color}/> */}
                    <select id='color'>
                        <option value="red">Red</option>
                        <option value="white">White</option>
                    </select>
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
                    <button type="submit" className={styles.wineForm__Btn_submit} onClick={handleSubmit}>Submit Wine</button>
                    <button type="button" className={styles.wineForm__Btn_cancel} onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default AddWineForm;