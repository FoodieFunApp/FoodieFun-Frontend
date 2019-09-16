import React from 'react';
import { Form, FormGroup, Label, Input, Button, FormText } from 'reactstrap';
import Navigation from './Navigation.js';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

export default class SignUp extends React.Component {

    state = {
        username: '',
        password: '',
        registered: false,
        error: false
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password
        }

        axios
            .post(`https://foodie-fun-backend.herokuapp.com/api/auth/register`, user)
            .then(res => 
                this.setState({
                    registered: true
                })
            )
            .catch(err => this.setState({
                error: true
            }))
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        if(this.state.registered === true) {
            return (
                <Redirect to="/login" />
            )
        } else {
            return (
            <div className="sign-up">
                <Navigation />
                <h1>Create Your Account To Get Started</h1>
                <Form className="form sign-up-form" onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>Username</Label>
                        <Input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button type="submit">Create Account</Button>
                </Form>
                <p>{this.state.error === true ? "Try Again" : ""}</p>
            </div>
        )
        }
        
    }
}

