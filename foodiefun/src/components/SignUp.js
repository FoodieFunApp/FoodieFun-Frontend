import React from 'react';
import {Form, FormGroup, Label, Input, Button, FormText} from 'reactstrap';
import Navigation from './Navigation.js';

function SignUp () {
    return(
        <div className="sign-up">
            <Navigation/>
            <h1>Create Your Account To Get Started</h1>
            <Form className="form sign-up-form">
                <FormGroup>
                    <Label>Username</Label>
                    <Input type="string" name="username"/>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="string" name="password"/>
                </FormGroup>
                <Button>Create Account</Button>
            </Form>
        </div>
    )
}

export default SignUp;