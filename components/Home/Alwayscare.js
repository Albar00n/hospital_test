import React from 'react'
import { Row ,Col} from 'react-bootstrap'
import { num } from '../data'

const Alwayscare = (props) => {
    return (
        <>
            <div>
                <div className='text-part text-center'>
                    <p>Always Caring</p>
                    <p>Our Specialties</p>
                </div>
                <div className='table'>
                 
                    <Row className='d-flex justify-content-center align-items-center'>
                        {num.map((item)=>(
                            
                                <Col xl={3} style={{
                                    color:`${item.textcolor}`,
                                    width: "248px",
                                    height: "172px",
                                    background:`${item.bkcolor}`,
                                
                                }}>
                                    <div 
                                    
                                    >
                                        <p>
                                            <img src={item.icon}/>
                                        </p>

                                        <p>
                                            {item.name}
                                        </p>
                                          
                                    </div> 
                                </Col>
                                
                            

                        ))}
                        </Row>
                    
                    </div>

            
            </div>
        </>
    )
}

export default Alwayscare
