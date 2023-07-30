import React from 'react'
import { Button, Container } from 'react-bootstrap'

const Footer = (props) => {
    return (
        <div className='footer'>
            <Container>
                <div className='di-1 mt-5 mb-5'>
                    <div className='f1'>
                        <p className='pf1'>Meddical</p>
                        <p className='pf2'>Leading the Way in Medical Execellence, Trusted Care.</p>
                    </div>
                    <div className='f2'>
                        <p className='hf'>
                        Important Links
                        </p>
                        <div className='f2-1'>
                            <p><a href=''>Appointment</a></p>
                            <p><a href=''>Doctors</a></p>
                            <p><a href=''>Services</a></p>
                            <p><a href=''>About Us</a></p>
                        </div>
                    </div>
                    <div className='f2'>
                        <p className='hf'>Contact Us</p>
                        <div className='f2-1'>
                            <p>Call: (237) 681-812-255</p>
                            <p>Email: fildineesoe@gmail.com</p>
                            <p>Address: 0123 Some place</p>
                            <p>Some country</p>
                        </div>
                    </div>
                    <div className='f2'>
                        <p className='hf'>Newsletter</p>
                        <div className='box1'>
                            <p className='tbb m-1'>Enter your email address</p>
                            <img src='icons/arrow1.svg'/>
                        </div>
                        
                    </div>

                </div>
                <div>
                    <hr className='line'></hr>
                </div>
                <div className='lfooter'>
                    <div>
                        <p className='bb'>© 2021 Hospital’s name All Rights Reserved by PNTEC-LTD</p>
                    </div>
                    <div className='iconfooter'>
                        <div className='icf'><img src='icons/linkin.svg'/></div>
                        <div className='icf'><img src='icons/face.svg'/></div>
                        <div className='icf'><img src='icons/insta.svg'/></div>
                    </div>
                    
                </div>
            </Container>    
                
        </div>
    )
}

export default Footer
