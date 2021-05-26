
import styles from './ReviewsBox.module.css'

const ReviewsBox = (props) => {
    const reviews = props.reviews
    const wine = props.wine
    console.log(`Reviews prop on Reviews Component`, reviews)

    const createReview = (e) => {
        e.preventDefault();
    }

    return (
        <div className={styles.reviews}>
            <header className={styles.reviewHeader}>Reviews</header>
            <div className={styles.reviewBox}>
                {reviews?.map((review) => <p>{review.review}</p>)}
            </div>
            <div className={styles.footer}>
                <button className={styles.submitBtn} onClick={createReview}>Leave a review</button>
            </div>
        </div>
    )
}

export default ReviewsBox