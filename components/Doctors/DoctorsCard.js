import React from 'react'
import { Button, Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { doctorsNames } from "../data/index";

const DoctorsCard = (props) => {
    return (
        
             <>
      <Container className="">
          <div className="card-doctor">
            <Row>
              {doctorsNames.map((item) => (
                <Col
                  xl={4}
                  md={12}
                  className="d-flex align-items-center justify-content-center p-2"
                  key={item.id}>
                  <Card>
                    <Card.Img variant="top" className="img-card" src="/images/photo2.png" />
                    <Card.Body className="body-card">
                      <Card.Text className="card-body">{item.name}</Card.Text>
                      <Card.Text className="card-body2">Neurology</Card.Text>
                      <Card.Text className="img-ss">
                          
                        <img src="/images/facebook.png" alt={item.name} />
                        <img src="/images/insta.png" alt={item.name} />
                      </Card.Text>
                    </Card.Body>
                    <div className="div-card">
                      <p className="text-style">View Profile</p>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
            {/* <div className="points">
              <img src="/images/G-62.png" />
            </div> */}
          </div>
        
      </Container>
    </>
  );
       
    
}

export default DoctorsCard
