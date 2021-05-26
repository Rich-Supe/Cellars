


const ReviewsBox = (props) => {
    const reviews = props.reviews
    const wine = props.wine

    return (
        <div className={styles.reviews}>
            <header className={styles.reviewHeader}>Reviews</header>
            <div className={styles.reviewBox}>
                {reviews?.map((review) => <p>{review.review}</p>)}
            </div>
            <div className={styles.footer}>
                <button className={styles.submitBtn}>Leave a review</button>
            </div>
        </div>
    )
}

export default ReviewsBox