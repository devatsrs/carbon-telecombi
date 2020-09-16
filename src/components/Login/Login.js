import React, { Component } from "react";

import {
  Form,
  FormGroup,
  TextInput,
  Button,
  FormLabel,
} from "carbon-components-react";

export default class Login extends Component {
  render() {
    return (
      <Form>
        <h1>Login</h1>
        <FormGroup>
          <TextInput
            helperText="Enter username or email address"
            id="username"
            invalidText="Invalid error message."
            labelText="Username"
            placeholder="Enter Email Address"
          />
        </FormGroup>
        <FormGroup>
          <TextInput.PasswordInput
            cols={50}
            helperText="Enter password"
            id="password"
            invalidText="Invalid error message."
            labelText="Password"
            placeholder="Password"
            rows={4}
          />
        </FormGroup>

        <Button kind="primary" tabIndex={0} type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
