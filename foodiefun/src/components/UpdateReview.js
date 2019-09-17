import React from 'react';
import { Form, FormGroup, Label, Input, Button, FormText } from 'reactstrap';
import ProtectedNavigation from './ProtectedNavigation.js';
import {axiosWithAuth} from './axiosWithAuth.js';
import {Redirect} from 'react-router-dom';
import jwt_decode from 'jwt-decode';

class UpdateReview extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            review: {
                "restaurantName": "",
                "restaurantType": "",
                "itemName": "",
                "price": undefined,
                "visitDate": "",
                "waitTime": "",
                "rating": undefined,
                "comments": "",
                "photoUrl": "",
                "userId": jwt_decode(localStorage.getItem('token')).userId
            },
            userId: jwt_decode(localStorage.getItem('token')).userId,
            error: false,
            activeReviewId: undefined
        }
    }

    componentWillReceiveProps({activeReview}) {
        this.setState({
            review: {
                "restaurantName": activeReview.restaurantName,
                "restaurantType": activeReview.restaurantType,
                "itemName": activeReview.itemName,
                "price": activeReview.price,
                "visitDate": activeReview.visitDate,
                "waitTime": activeReview.waitTime,
                "rating": activeReview.rating,
                "comments": activeReview.comments,
                "photoUrl": activeReview.photoUrl
            },
            activeReviewId: activeReview.id
        })
      }

    handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth()
            .put(`https://foodie-fun-backend.herokuapp.com/api/users/${this.state.userId}/reviews/${this.state.activeReviewId}`, this.state.review)
            .then(res => {
                this.props.updateList(res.data.reviewList);
                const UpdateModal = document.querySelector('#update-review');
                UpdateModal.classList.toggle("hidden");
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    error: true
                })
            });
    }

    handleChange = event => {
        this.setState({
            review: {
                ...this.state.review,
                [event.target.name]: event.target.value
            }
        })
    }

    toggleModal = () => {
        const UpdateModal = document.querySelector('#update-review');
        UpdateModal.classList.toggle("hidden");
    }

    render() {
        return (
        <div className="update-review hidden" id="update-review">
            <p style={{textAlign: "right", marginRight: "10px"}} onClick={() => this.toggleModal()}>X</p>
            <h1>Update Review</h1>
            <Form className="form" onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>Restaurant Name</Label>
                    <Input type="string" name="restaurantName" onChange={this.handleChange} value={this.state.review.restaurantName} required/>
                </FormGroup>
                <FormGroup>
                    <Label>Restaurant Type</Label>
                    <Input type="select" name="restaurantType" onChange={this.handleChange} value={this.state.review.restaurantType} required>
                        <option selected disabled></option>
                        <option>Italian</option>
                        <option>Mexican</option>
                        <option>Japanese</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label>Item Name</Label>
                    <Input type="string" name="itemName" onChange={this.handleChange} value={this.state.review.itemName} required/>
                </FormGroup>
                <FormGroup>
                    <Label>Price</Label>
                    <Input type="number" name="price" onChange={this.handleChange} value={this.state.review.price}/>
                </FormGroup>
                <FormGroup>
                    <Label>Visit Date</Label>
                    <Input type="date" name="visitDate" onChange={this.handleChange} value={this.state.review.visitDate} required/>
                </FormGroup>
                <FormGroup>
                    <Label>Wait Time</Label>
                    <Input type="select" name="waitTime" onChange={this.handleChange} value={this.state.review.waitTime} required>
                        <option defaultValue>0min</option>
                        <option>15min</option>
                        <option>30min</option>
                        <option>>30min</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label>Rating</Label>
                    <Input type="select" name="rating" onChange={this.handleChange} value={this.state.review.rating}>
                        <option selected disabled></option>
                        <option>{0}</option>
                        <option>{1}</option>
                        <option>{2}</option>
                        <option>{3}</option>
                        <option>{4}</option>
                        <option>{5}</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label>Comments</Label>
                    <Input type="string" name="comments" onChange={this.handleChange} value={this.state.review.comments} required/>
                </FormGroup>
                <FormGroup>
                    <Label>Upload Photo</Label>
                    <Input type="file" name="photoUrl" onChange={this.handleChange} value={this.state.review.photoUrl}/>
                </FormGroup>
                <Button>Update Review</Button>
            </Form>
            <p>{this.state.error === true ? "Try Again" : ""}</p>
        </div>
    )}
}

export default UpdateReview;