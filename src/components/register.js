import {Button, Form} from "react-bootstrap";
import "../App.css"
import React, { useState } from "react";
import { connect } from "react-redux";
import {validateEmail} from "../reducer/reducer";

function RegisterForm(props){
    const classes = ["Yoga","Pilates","Circuit Training","HIIT","Water Aerobics","Zumba"]
    const options = classes.map((item) => {
        return (
            <option key={item} value={item}>
                {item}
            </option>
        )
    })

    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState("");


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        addParticipantHandler(newParticip);
        event.preventDefault();
    };
    let i=0;
    const newParticip = {
        id:i++,
        mail: email
    }

    const addParticipantHandler = (participant) => {
      props.addParticipant(participant);
    }



    return(

        <div className="login">
            <Form  noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required type="email"
                                  isInvalid={(e) => validateEmail(e.target.value) == false}
                                  isValid={(e)=> validateEmail(e.target.value) == true}
                                  onChange={e => setEmail(e.target.value)}

                    />

                    <Form.Control.Feedback type="invalid">
                        Email is required
                    </Form.Control.Feedback>

                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label> Class</Form.Label>
                    <Form.Control value={props.title} disabled/>
                </Form.Group>

                <Form.Group controlId="doc">
                    <Form.Label>Select Date</Form.Label>
                    <Form.Control required type="date" name="doc" placeholder="Date of Class" />

                    <Form.Control.Feedback type="invalid">
                        You have to pick a date
                    </Form.Control.Feedback>
                </Form.Group>
                <br/>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>


    );
}

const mapStateToProps = state => ({
    loginForm: state.loginForm
});

export default connect(mapStateToProps)(RegisterForm);