import React from 'react';
import {Form, FormGroup, Label, Input, Button, FormText} from 'reactstrap';

function SignUp () {
    return(
        <div className="sign-up">
            <Form className="sign-up-form">
                <FormGroup>
                    <Label>Username</Label>
                    <Input type="string" name="username"/>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="string" name="password"/>
                </FormGroup>
            </Form>
        </div>
    )
}

export default SignUp;