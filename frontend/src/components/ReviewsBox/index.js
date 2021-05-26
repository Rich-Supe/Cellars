
import styles from './ReviewsBox.module.css'

const ReviewsBox = ({props}) => {
    // console.log(`PROPS:`, props)
    const review = props.review.review
    // console.log(`Review prop on Reviews Component`, review)

    // const createReview = (e) => {
    //     e.preventDefault();
        
    // }

    return (
        <div>{review}</div>
    )
}

export default ReviewsBox