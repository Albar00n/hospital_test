import React from 'react'
import { Container, Row ,Col, Button, Form} from 'react-bootstrap'
import Link from 'next/link'

const Artical = (props) => {
    return (
        <Container>
            <Row className='r mt-5  mb-5'>
                <Col className='a1'>
                    <img src='images/twowomen.png' style={{width:"658px",height:"400px",marginBottom:'20px'}}/>
                    <div className='details d-flex '>
                        <div className='d-flex' style={{gap:'10px'}}>
                            <img src='icons/calender.svg'/>
                            <p>Monday 05, September 2021</p>
                        </div>
                        <div className='d-flex' style={{gap:'10px'}}>
                            <img src='icons/author.svg'/>
                            <p>By Author</p>
                        </div>
                        <div className='d-flex' style={{gap:'10px'}}>
                            <img src='icons/views.svg'/>
                            <p>68</p>
                        </div>
                        <div className='d-flex' style={{gap:'10px'}}    >
                            <img src='icons/likes.svg'/>
                            <p>86</p>
                        </div>


                    </div>
                    <div className='cc mt-3  mb-3'> 
                    A passion for putting patients first
                    </div>
                    <div className='part1 mb-3'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et....</p>
                    </div>
                    <div style={{width:'155px',
                                 height:'45px',
                                 display:'flex',
                                 justifyContent:'center',
                                 alignItems:'center',
                                 borderRadius:'50px',
                                 background:'#BFD2F8'}}>
                        <Link href='/'style={{ 
                                    color:'#1F2B6C',
                                    fontFamily:'Work Sans',
                                    fontSize:'16px',
                                    lineHeight:'normal',
                                    fontWeight:'500',        

                        }}  >Read More</Link>
                    </div>
                </Col>
                <Col className='a2'>
                    <Form>
                        <Form.Control className='input' type="text" placeholder="Search" />
                    </Form>
                    <div className='dv'>
                        <p className='textq'>Recent Posts</p>
                        <div className='mininews'>
                        <div style={{display:'flex',width:'274px',height:'60px',justifyContent:'center', gap:'10px'}}>
                            <img src='images/twowomen.png' style={{width:'60px',height:'60px',borderRadius:'5px'}}/>
                            <div style={{width:'204px', height:'51px'}}>
                                    <p className='txt1'>Monday 05, September 2021</p>
                                   <p className='txt2'>This Article’s Title goes Here, but not too long.</p>
                            </div>
                           
                        </div>
                    </div>
                    </div>
                    
                </Col>
            </Row>
        </Container>
      
    )
}

export default Artical
