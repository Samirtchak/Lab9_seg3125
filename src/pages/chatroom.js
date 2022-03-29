import {Button, Card, Form} from "react-bootstrap";
import React, { useState } from 'react';
import {validateEmail} from "../reducer/reducer";


function Chatroom() {
    const messages = [
    {
        content: "Hey guys, loving the new gym!",
        sent: new Date(),
        sender: "Jimmy Johns",
    },
    {
        content: "What time does the gym usually open?!?",
        sent: new Date(),
        sender: "Donald Duck",
    }

    ];

    const [msg, setMsg] = React.useState("");

    const newMsg = {
        content: msg,
        sent: new Date(),
        sender: "anonymous",
    }

    const [forum, setForum] = React.useState(messages);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        event.preventDefault();
        if(msg != ""){
            setForum(prevForum => prevForum.concat(newMsg));
        }


    };


    return(
        <>
        <Form className="m-2" onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Enter a message"
                              onChange={e => setMsg(e.target.value)}/>
            </Form.Group>


            <Button variant="primary" type="submit">
                Send
            </Button>
        </Form> <br/>
            { forum.map((e,index) =>(
                <div>
                <Card className=" mx-3 w-25">
                    <Card.Body>
                        <p>{e.content}</p>
                        <footer className="blockquote-footer">{e.sent + "--"+ e.sender}</footer>
                    </Card.Body>
                </Card>
                 <br/>
                </div>
                ))}

        </>

    );
}

export default Chatroom;