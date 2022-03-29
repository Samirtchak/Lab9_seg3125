import {Card, CardGroup} from "react-bootstrap";

function HomeCard({arr}){
    return(
      <>
          <CardGroup>
              {arr.map((e,idx) =>  (<Card>
                  <Card.Img variant="top" src={e.link} />
                  <Card.Body>
                      <Card.Title>{e.title}</Card.Title>
                      <Card.Text>
                          {e.text}
                      </Card.Text>
                  </Card.Body>
              </Card>
              ))}
          </CardGroup>
      </>
    );
}

export default HomeCard;