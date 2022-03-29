import {Button, Card, Col, Modal, Row} from "react-bootstrap";
import React, { useState } from 'react';
import '../App.css'
import RegisterForm from "../components/register";
import {createStore} from "redux";


function Classe(){
    let someClass = [
        {
        title:"Yoga",
        resume:"Yoga is our most commonly requested group fitness class, and most people are already familiar with the concept of it. This type of exercise has nearly a dozen variations of its own, with the most popular styles including Hot Yoga, to Vinyasa Flow, and Gentle Yoga. The exercise itself consists of deliberate, concentrated movements and postures designed to promote flexibility, tone and strengthen muscles, and align the body. Most often, breathing techniques are also encompassed along with the movements, allowing participants a relaxing experience.",
        link:"https://www.ubuy.mg/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvQTFFLVQyMERtdUwuX0FDX1NMMTUwMF8uanBn.jpg"
        },
        {
            title:"Pilates",
            resume:"Pilates is commonly compared for it’s similarities to Yoga. While Yoga focuses on strength and flexibility through long held, swift-moving postures and “grounding” positions to help you feel centered and balanced, Pilates brings a heavier element of core focus, with repetitive and small movements of isolated or full body muscle groups. In addition, PIlates tones the full body and promotes endurance. This routine uses movements like planks, side planks, and core exercises to enhance your muscles and core strength, all while promoting relaxation with integrated breathing.",
            link: "https://acewebcontent.azureedge.net/expert-articles/2017/05/2017-05-11-pilates-ball-core-strengthening-workout-leg-circles.png"
        },
        {
            title:"Circuit Training",
            resume: "Circuit Training classes are typically an interval-style, fast paced, shorter routine that does exactly as its name implies – a series of exercises that complete a circuit. Normally in this class setting, you complete one exercise (usually in a station) for anywhere from 30 seconds to a minute, and then move on to the next station/exercise for another 30 seconds to a minute, typically with a brief break in the routine once you complete one full circuit. Circuits can average 5-6 different exercises.",
            link:"https://post.greatist.com/wp-content/uploads/sites/2/2015/05/GRT-weight-strength-training-kettlebell-732x549-thumbnail.jpg" ,
        },
        {
            title:"HIIT",
            resume:"HIIT stands for High-Intensity Interval Training, and is an exercise strategy that alternates short periods of intense exercise movements, followed by less intense, but still active “recovery” periods. The goal with a HIIT class is to reach a sustained target heart rate for exercise, allowing you to quickly burn fat in a brief amount of time. This class is ideal for someone looking to burn serious calories through intense cardio movements, and work up a sweat!",
            link:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/701/2018/01/04/1-fitness-trends-2018-hiit-1519767156.jpg?crop=0.638xw:1.00xh;0.221xw,0&resize=480:*"
        },
        {
            title:"Water Aerobics",
            resume: "Water Aerobics can be a fun way to engage muscle endurance and strength in a low-impact setting. This aerobic-style class usually involves light dumbbells and movements designed to get your heart pumping at a steady, consistent pace. Because of the lower intensity, classes are most effective in about an hour length time span. Normally, when you attend this type of class, you can expect a warm-up, a period of cardio, and some strength-training with smaller weights and a cool-down period. This workout is ideal for anyone who is looking for a steady, longer, low-impact routine that is exciting and unconventional from standard routines.",
            link:"https://gwrymca.org/sites/default/files/2019-10/fitness_myth_image_1.png"
        },
        {
            title:"Zumba",
            resume:"There is no doubt in the fact that Zumba takes a spin on conventional ideas of exercise and converts it to to an upbeat form of aerobic movement that disguises the effort of regular workouts! A Zumba class offers a series of energetic dance routines that provide a great cardio exertion by mixing low intensity and high intensity moves for an interval-style, calorie burning, dance fitness party. The biggest key to joining a Zumba class is to not be worried about your dance moves, because everyone else is on the same boat! Anyone who loves to dance and is looking for a fun routine that trades traditional, mundane workouts for music-inspired movement.",
            link:"https://cdn.shopify.com/s/files/1/0062/4875/9343/products/wm_Zumba-Fitness_1500x.jpg?v=1594761304"
        }
    ]

    let i =0;


    const [modalShow, setModalShow] = React.useState(false);
    const [head, setHead] = React.useState("");
    const[isRegister, setIsRegister] = React.useState(true);


    return(
        <>
        <div className="classe">
            <Row xs={1} md={2} className="g-4">
                {someClass.map((e, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={e.link} />
                            <Card.Body>
                                <Card.Title>{e.title}</Card.Title>
                                <Card.Text>
                                    {e.resume}
                                </Card.Text>
                                <div className="d-flex justify-content-between">
                                <Button className="m-2" variant="dark" onClick={() => {setIsRegister(true); setHead(e.title); setModalShow(true)}}>Register</Button>
                                <Button onClick={()=>{setIsRegister(false); setModalShow(true)}}>Participants</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>

            <Register
                isRegister={isRegister}
                headTitle ={head}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

        </>
    );
}

function Register(props) {

    const [participants, setParticipants] = React.useState([]);


    const addParticipantHandler = (participant) => {
        setParticipants((previousParticipants) => previousParticipants.concat(participant));
        console.log(participants);
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.headTitle}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                { props.isRegister ? <RegisterForm addParticipant={addParticipantHandler} title={props.headTitle}/> : participants.map((e, index)=>(<ul><li>{e.mail}</li></ul>))}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Classe;