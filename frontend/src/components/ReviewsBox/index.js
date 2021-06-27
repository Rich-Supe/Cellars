import { useSelector } from 'react-redux';
import styles from './ReviewsBox.module.css'

const ReviewsBox = ({props}) => {
    const sessionUser = useSelector(state => state.session.user);
    const userId = sessionUser.id
    const review = props.review
    const reviewUserId = props.review.userId
    // console.log(userId, reviewUserId)
    let conditionalEdit;

    if (userId === reviewUserId) {
        conditionalEdit = (
            <>
                <button>Edit</button>
            </>
        )
    }

    return (
        <>
        <div className={styles.reviewCard}>
            <p>{review.review}</p>
            <div className={styles.reviewCard__editBtn}>{conditionalEdit}</div>
            </div>
        </>
    )
}

export default ReviewsBox