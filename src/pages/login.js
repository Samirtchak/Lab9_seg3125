import {Button, Form} from "react-bootstrap";
import "../App.css"
import React, { useState } from "react";
import { connect } from "react-redux";

function Login(props){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
      <div className="login">
          <Form>
              <h2>Signup</h2>
              <hr />
              <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                      type="email"
                      placeholder="Enter email"
                      isInvalid={props.loginForm.errors.email.length > 0}
                      isValid={
                          props.loginForm.values.email &&
                          props.loginForm.errors.email.length === 0

                      }
                      onChange={e => setEmail(e.target.value)}
                  />

                  <Form.Control.Feedback type="invalid">
                      {props.loginForm.errors.email}
                  </Form.Control.Feedback>

                  <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                  </Form.Text>

              </Form.Group>


              <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                      type="password"
                      placeholder="Password"
                      isInvalid={props.loginForm.errors.password.length > 0}
                      isValid={
                          props.loginForm.values.password &&
                          props.loginForm.errors.password.length === 0
                      }
                      onChange={e => setPassword(e.target.value)}
                  />

                  <Form.Control.Feedback type="invalid">
                      {props.loginForm.errors.password}
                  </Form.Control.Feedback>

              </Form.Group>
              <br/>
              <Button
                  variant="primary"
                  type="button"
                  onClick={() =>
                      props.dispatch({ type: "FORM_SUBMIT", payload: { email, password } })
                  }
              >
                  Submit
              </Button>
          </Form>
      </div>

    );
}

const mapStateToProps = state => ({
    loginForm: state.loginForm
});


export default connect(mapStateToProps)(Login);