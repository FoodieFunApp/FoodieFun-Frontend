import React from 'react';

function Review(props) {
    return (
        <div className="review">
            {props.review.restaurantName}
        </div>
    )
}

export default Review;