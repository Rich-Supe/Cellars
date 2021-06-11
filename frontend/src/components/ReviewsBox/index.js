
import styles from './ReviewsBox.module.css'

const ReviewsBox = ({props}) => {

    const review = props.review.review

    return (
        <>
        <div className={styles.reviewCard}>{review}</div>
        </>
    )
}

export default ReviewsBox