import React from 'react';
import {axiosWithAuth} from './axiosWithAuth.js';
import Review from './Review.js';
import jwt_decode from 'jwt-decode';
import UpdateReview from './UpdateReview.js';

class ReviewList extends React.Component {
    state = {
        reviewList: [],
        userId: jwt_decode(localStorage.getItem('token')).userId,
        activeReview: {}
    }

    updateList = newList => {
        this.setState({
            reviewList: newList
        })
    }

    openUpdateModal = review => {
        this.setState({
            activeReview: review
        });
        const UpdateModal = document.querySelector('#update-review');
        UpdateModal.classList.toggle("hidden");
    }

    updateReview = updatedReview => {
        this.setState({
            ...this.state,
            reviewList: this.state.reviewList.map(review => review.id === updatedReview.id ? updatedReview : review)
        })
    }

    componentDidMount() {
        axiosWithAuth()
            .get(`https://foodie-fun-backend.herokuapp.com/api/users/${this.state.userId}/reviews`)
            .then(res => this.setState({
                reviewList: res.data
            }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="review-list">
                {this.state.reviewList.map(review => {
                    return <Review
                                review={review}
                                reviewList={this.state.reviewList}
                                userId={this.state.userId}
                                updateList={this.updateList}
                                openUpdateModal={this.openUpdateModal}
                            />
                })}
                <UpdateReview activeReview={this.state.activeReview} updateReview={this.updateReview} updateList={this.updateList}/>
            </div>
        )
    }
    
}

export default ReviewList;