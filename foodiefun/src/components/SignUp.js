import React from 'react';
import { Form, FormGroup, Label, Input, Button, FormText } from 'reactstrap';
import Navigation from './Navigation.js';
import axios from 'axios';

export default class SignUp extends React.Component {
    // constructor(args) {
    //     super(args);
    //     this.state = {
    //         username: '',
    //         password: ''
    //     }
    // }
    state = {
        username: '',
        password: ''
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password
        }

        axios
            .post(`https://foodie-fun-backend.herokuapp.com/api/auth/register`, user)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
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
                            type="text"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button type="submit">Create Account</Button>
                </Form>
            </div>
        )
    }
}

