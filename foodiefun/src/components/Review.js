import React from 'react';
import {Link} from 'react-router-dom';
import { axiosWithAuth } from './axiosWithAuth';

function Review(props) {
    const {restaurantName, restaurantType, photoUrl} = props.review

    const deleteReview = (userId, reviewId) => {
        axiosWithAuth()
            //.delete('https://foodie-fun-backend.herokuapp.com/api/users/${userId}/reviews/${reviewId}`)
            .delete(`http://localhost:9000/api/users/${userId}/reviews/${reviewId}`)
            .then(res => props.updateList(res.data.reviewList))
            .catch(err => console.log(err))
    }

    return (
        <div className="review">
            <p>{restaurantName}</p>
            <p>{restaurantType}</p>
            <img src={photoUrl} />
            <Link to="/update-review">Update Review</Link>
            <button onClick={() => deleteReview(props.userId, props.review.id)}>Delete Review</button>
        </div>
    )
}

export default Review;