import React from 'react';
import {Form, FormGroup, Label, Input, Button, FormText} from 'reactstrap';
import Navigation from './Navigation.js';

function AddReview () {
    return(
        <div className="login">
            <Navigation/>
            <h1>Login To Your Account</h1>
            <Form className="form">
                <FormGroup>
                    <Label>Username</Label>
                    <Input type="string" name="username"/>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="string" name="password"/>
                </FormGroup>
                <Button>Login</Button>
            </Form>
        </div>
    )
}

export default AddReview;