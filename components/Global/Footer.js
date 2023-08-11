import Link from 'next/link'
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
                            <p><Link  style={{color:'white'}} href="/appointement">Appointment</Link></p>
                            <p><Link  style={{color:'white'}} href="/doctors">Doctors</Link></p>
                            <p><Link  style={{color:'white'}} href="/services">Services</Link></p>
                            <p><Link  style={{color:'white'}} href="/about">About Us</Link></p>
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
                            <img src='/icons/arrow1.svg'/>
                        </div>
                        
                    </div>

                </div>
                <div>
                    <hr className='line'></hr>
                </div>
                <div className='lfooter'>
                    <div>
                        <p className='bbs'>© 2021 Hospital’s name All Rights Reserved by PNTEC-LTD</p>
                    </div>
                    <div className='iconfooter'>
                        <div className='icf'><img src='/icons/linkin.svg'/></div>
                        <div className='icf'><img src='/icons/face.svg'/></div>
                        <div className='icf'><img src='/icons/insta.svg'/></div>
                    </div>
                    
                </div>
            </Container>    
                
        </div>
    )
}

export default Footer
