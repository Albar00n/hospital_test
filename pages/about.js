import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';





const about = () => {
  return <>
  
      <Container className="div-com1">
          <div>
          <Row>
            
              <Col>
              
                <img className="img-about1" src="/images/about-img.png" style={{width:"100%",height:"auto"}} alt="imgs"/>
                  
              </Col>
              <Col>
                <div className="div-com2">
                    <p className="p-style1">
                    Welcome to Hospital name
                    </p>
                    <h1 className="p-style2">
                    Best Care for Your Good Health
                    </h1>
                    
                </div>
                <div className="div-com3">
                    <Row>
                        <Col>
                            <div className="div-com4">
                                <p className="point"></p>
                                <p className="text">A Passion for Healing</p>
                            </div>
                            <div className="div-com4">
                                <p className="point"></p>
                                <p className="text">All our best</p>
                            </div>
                            <div className="div-com4">
                                <p className="point"></p>
                                <p className="text">Always Caring</p>
                            </div>
                        </Col>
                        <Col>
                            <div className="div-com4">
                                    <p className="point"></p>
                                    <p className="text">5-Star Care</p>
                                </div>
                                <div className="div-com4">
                                    <p className="point"></p>
                                    <p className="text">Believe in Us</p>
                                </div>
                                <div className="div-com4">
                                    <p className="point"></p>
                                    <p className="text">A Legacy of Excellence</p>
                                </div>
                    
                        </Col>
                    </Row>
                </div>
                <div className="div-com5">
                    <p className="p-style3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
                </div>
                <div className="div-com5">
                    <p className="p-style3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque. Convallis felis vitae tortor augue. Velit nascetur proin massa in.</p>
                </div>
              </Col>
          </Row>
          </div>
          <div className="div-sec2">
            <div className="div-com6">
                <p className="p-style6">Trusted Care</p>
                <p className="p-style4">Our Doctors</p>
            </div>
            <div className="div-com7">
                <Row>
                    <Col xl={4}>
                    <Card style={{ width: '317px',height:'538px' }}>
                     <Card.Img variant="top" className="img-card" src="C:\Users\سالم الحمادي\Downloads\hostpitl\hospital_test\public\img\photo1.png" />
                      <Card.Body className="body-card">
                     <Card.Text className="card-body">
                     Doctor’s Name
                    </Card.Text>
                    <Card.Text className="card-body2">
                    Neurology
                    </Card.Text>
                    <Card.Text className="img-ss">
                        <img src="C:\Users\سالم الحمادي\Downloads\hostpitl\hospital_test\public\img\linkin.png"/>
                        <img src="C:\Users\سالم الحمادي\Downloads\hostpitl\hospital_test\public\img\linkin.png"/>
                        <img src="C:\Users\سالم الحمادي\Downloads\hostpitl\hospital_test\public\img\linkin.png"/>
                    </Card.Text>
                      </Card.Body>
                      <div className="div-card">
                            <p className="text-style">View Profile</p>
                      </div>
                         </Card>
                    </Col>
                    <Col xl={4}>
                    <Card style={{ width: '317px',height:'538px' }}>
                     <Card.Img variant="top" className="img-card" src="C:\Users\سالم الحمادي\Downloads\hostpitl\hospital_test\public\img\photo1.png" />
                      <Card.Body className="body-card">
                     <Card.Text className="card-body">
                     Doctor’s Name
                    </Card.Text>
                    <Card.Text className="card-body2">
                    Neurology
                    </Card.Text>
                    <Card.Text className="img-ss">
                        <img src="C:\Users\سالم الحمادي\Downloads\hostpitl\hospital_test\public\img\linkin.png"/>
                        <img src="C:\Users\سالم الحمادي\Downloads\hostpitl\hospital_test\public\img\linkin.png"/>
                        <img src="C:\Users\سالم الحمادي\Downloads\hostpitl\hospital_test\public\img\linkin.png"/>
                    </Card.Text>
                      </Card.Body>
                      <div className="div-card">
                            <p className="text-style">View Profile</p>
                      </div>
                         </Card>
                    </Col>
                    <Col xl={4}>
                    <Card style={{ width: '317px',height:'538px' }}>
                     <Card.Img variant="top" className="img-card" src="C:\Users\سالم الحمادي\Downloads\hostpitl\hospital_test\public\img\photo1.png" />
                      <Card.Body className="body-card">
                     <Card.Text className="card-body">
                     Doctor’s Name
                    </Card.Text>
                    <Card.Text className="card-body2">
                    Neurology
                    </Card.Text>
                    <Card.Text className="img-ss">
                        <img src="C:\Users\سالم الحمادي\Downloads\hostpitl\hospital_test\public\img\linkin.png"/>
                        <img src="C:\Users\سالم الحمادي\Downloads\hostpitl\hospital_test\public\img\linkin.png"/>
                        <img src="C:\Users\سالم الحمادي\Downloads\hostpitl\hospital_test\public\img\linkin.png"/>
                    </Card.Text>
                      </Card.Body>
                      <div className="div-card">
                            <p className="text-style">View Profile</p>
                      </div>
                         </Card>
                    </Col>
                </Row>
                <div className="points">
                    <img src="../public/imges/G-62.png"/>
                </div>
            </div>
          </div>
      </Container>
  
  





  </>;
};

export default about;
