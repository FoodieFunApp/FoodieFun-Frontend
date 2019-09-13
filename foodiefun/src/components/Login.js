import React from 'react';
import {Form, FormGroup, Label, Input, Button, FormText} from 'reactstrap';
import Navigation from './Navigation.js';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import jwt_decode from 'jwt-decode';

class Login extends React.Component {
    state = {
        username: "",
        password: "",
        loggedIn: false,
        error: false
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault();
        axios
            //.post('https://foodie-fun-backend.herokuapp.com/api/auth/login', {
            .post(`http://localhost:9000/api/auth/login`, {
                username: this.state.username,
                password: this.state.password
            })
            .then(res => {
                window.localStorage.setItem('token', res.data.token);
                const username = jwt_decode(localStorage.getItem('token')).username;
                window.localStorage.setItem('username', username);
                this.setState({
                    loggedIn: true
                })
            })
            .catch(err => this.setState({
                error: true
            }))
    }

    render() {
        if(this.state.loggedIn === true) {
            return <Redirect to='/dashboard'/>
        } else {
            return(
            <div className="login">
                <Navigation/>
                <h1>Login To Your Account</h1>
                <Form className="form login-form" onSubmit={this.submitHandler}>
                    <FormGroup>
                        <Label>Username</Label>
                        <Input type="string" name="username" value={this.state.username} onChange={this.changeHandler}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type="password" name="password" value={this.state.password} onChange={this.changeHandler}/>
                    </FormGroup>
                    <Button>Login</Button>
                </Form>
                <p>{this.state.error === true ? "Invalid Credentials" : ""}</p>
            </div>
            )
        }
    }     
}

export default Login;