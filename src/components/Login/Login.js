import React from "react";

import
{
  Form,
  FormGroup,
  TextInput,
  Button,

} from "carbon-components-react";
import { useHistory } from "react-router-dom";

export default function Login ( props )
{
  let history = useHistory();

  const LoginSubmit = ( e ) =>
  {

    e.preventDefault();
    console.log( "submitted" );
    //do your task here before redirect
    //...
    history.push( '/dashboard' );



  }
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
          cols={ 50 }
          helperText="Enter password"
          id="password"
          invalidText="Invalid error message."
          labelText="Password"
          placeholder="Password"
          rows={ 4 }
        />
      </FormGroup>

      <Button kind="primary" tabIndex={ 0 } type="submit" onClick={ LoginSubmit }>
        Submit
        </Button>
    </Form>
  );

}
