import React from 'react';
import {axiosWithAuth} from './axiosWithAuth.js';
import Review from './Review.js';
import jwt_decode from 'jwt-decode';

class ReviewList extends React.Component {
    state = {
        reviewList: [],
        userId: jwt_decode(localStorage.getItem('token')).userId,
    }

    componentDidMount() {
  
        axiosWithAuth()
            //.get(`https://foodie-fun-backend.herokuapp.com/api/users/${this.state.userId}/reviews`)
            .get(`http://localhost:9000/api/users/${this.state.userId}/reviews`)
            .then(res => this.setState({
                reviewList: res.data
            }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="review-list">
                {this.state.reviewList.map(review => {
                    return <Review review={review}/>
                })}
            </div>
        )
    }
    
}

export default ReviewList;