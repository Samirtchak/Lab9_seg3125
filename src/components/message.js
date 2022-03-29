import {Card} from "react-bootstrap";

function  message(props){
    return(
        <Card>
            <Card.Body>
                <p>{props.msg}</p>
                <footer>{}</footer>
            </Card.Body>
        </Card>
    )
}