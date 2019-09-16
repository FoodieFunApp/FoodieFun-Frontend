import React from 'react';
import { Form, FormGroup, Label, Input, Button, FormText } from 'reactstrap';
import ProtectedNavigation from './ProtectedNavigation.js';
import {axiosWithAuth} from './axiosWithAuth.js';
import {Redirect} from 'react-router-dom';
import jwt_decode from 'jwt-decode';

class AddReview extends React.Component {
    state = {
        review: {
            "restaurantName": "",
            "restaurantType": "",
            "itemName": "",
            "price": 0,
            "visitDate": "",
            "waitTime": "0min",
            "rating": 0,
            "comments": "",
            "photoUrl": "",
            "userId": jwt_decode(localStorage.getItem('token')).userId
        },
        userId: jwt_decode(localStorage.getItem('token')).userId,
        error: false,
        redirect: false
    }

    handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth()
            .post('https://foodie-fun-backend.herokuapp.com/api/users/${this.state.userId}/reviews', this.state.review)
            .then(res => this.setState({
                redirect: true
            }))
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

    render() {
        if(this.state.redirect === true) {
            return <Redirect to="/dashboard" />            
        } else {
            return (
            <div className="add-review">
                <ProtectedNavigation />
                <h1>Add A Review</h1>
                <Form className="form" onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>Restaurant Name</Label>
                        <Input type="string" name="restaurantName" onChange={this.handleChange} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Restaurant Type</Label>
                        <Input type="select" name="restaurantType" onChange={this.handleChange} required>
                            <option selected disabled></option>
                            <option>Italian</option>
                            <option>Mexican</option>
                            <option>Japanese</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Item Name</Label>
                        <Input type="string" name="itemName" onChange={this.handleChange} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Price</Label>
                        <Input type="number" name="price" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Visit Date</Label>
                        <Input type="date" name="visitDate" onChange={this.handleChange} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Wait Time</Label>
                        <Input type="select" name="waitTime" onChange={this.handleChange} required>
                            <option defaultValue>0min</option>
                            <option>15min</option>
                            <option>30min</option>
                            <option>>30min</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Rating</Label>
                        <Input type="select" name="rating" onChange={this.handleChange}>
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
                        <Input type="string" name="comments" onChange={this.handleChange} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Upload Photo</Label>
                        <Input type="file" name="photoUrl" onChange={this.handleChange} />
                    </FormGroup>
                    <Button>Add Review</Button>
                </Form>
                <p>{this.state.error === true ? "Try Again" : ""}</p>
            </div>
        )
        }
        
    }
    
}

export default AddReview;