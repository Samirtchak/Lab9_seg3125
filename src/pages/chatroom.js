import {Button, Card, Form} from "react-bootstrap";
import React, { useState } from 'react';
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

import { useCollectionData } from 'react-firebase-hooks/firestore';
import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";

function Chatroom() {

    firebase.initializeApp({
        apiKey: "AIzaSyDKBbVh6pw1r9467k-5exonIYxSpsn5orA",
        authDomain: "seg3125lab9-f2e08.firebaseapp.com",
        databaseURL: "https://seg3125lab9-f2e08-default-rtdb.firebaseio.com",
        projectId: "seg3125lab9-f2e08",
        storageBucket: "seg3125lab9-f2e08.appspot.com",
        messagingSenderId: "582574170277",
        appId: "1:582574170277:web:20eec94dc806b46c652d4c",
        measurementId: "G-6PP8920J9H"
    });

    const firestore = firebase.firestore();
    const chatsRef = firestore.collection('chats');
    const query = chatsRef.orderBy('sent', 'desc').limit(25);

    const [chats] = useCollectionData(query, {idField: 'id'});

    const [msg, setMsg] = React.useState("");

    const newMsg = {
        content: msg,
        sent: new Date(),
        sender: "anonymous",
    }
    
    const sendMessage = async(event) => {
        event.preventDefault();
        await chatsRef.add({
            content: msg,
            sent: firebase.firestore.Timestamp.fromDate(new Date()),
            sender: "anonymous"
        });
        
        setMsg('');
    };
    
    return(
        <>
            <Form className="m-2" onSubmit={sendMessage}>
                <Form.Group className="mb-3">
                    <Form.Control value = {msg} type="text" placeholder="Enter a message" onChange={e => setMsg(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Send
                </Button>
            </Form> <br/>

            <div>
                {chats && chats.map(chat => <ChatMessage  key={chat.id} message={chat} />)}
            </div>
        </>

    );
}

function ChatMessage(props) {
    const { content, sent, sender } = props.message;
    return (
        <div>
            <Card className="mx-3 col-6">
                <Card.Body>
                    <p>{content}</p>
                    <footer className="blockquote-footer">{new Date(sent.seconds*1000).toUTCString() + " -- " + sender}</footer>
                </Card.Body>
            </Card>
            <br />
        </div>
    )
}

export default Chatroom;