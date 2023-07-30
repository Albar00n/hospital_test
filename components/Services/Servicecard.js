import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Servicescard } from '../data'
import Link from 'react-router-dom';


const Servicecard = (props) => {
    return (
        <div>
            <Container>
                <div className='d-flex justify-content-center align-items-center mt-5   '>

                    <Row  className='se-card'>
                        {Servicescard.map((item)=>(
                                <Col className='se1-card'>
                                 <Card className='se2-card'>
                                 <div className='ic'>
                                     <img src='icons/g2.svg'/>
                                  </div>
                                 <Card.Img variant="top" className="img-card-se" src={item.pic}/>
                                 <Card.Body className="b-7">
                                     <div className='text-left mt-5'>
                                        <p className='t-01'>{item.name}</p>
                                        <p className='t-02'>{item.text}</p>
                                        <a className='t-03' href='\about'>Learn More -</a>
                                     </div>
 
                                    </Card.Body>
                                    </Card>
                                 </Col>


                        ))}
                     </Row>
                </div>
                </Container>
        </div>
    )
}

export default Servicecard
