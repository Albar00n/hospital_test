import React from 'react'
import { Container, Row ,Col, Button, Form} from 'react-bootstrap'
import Link from 'next/link'
import { RecentNews ,newsCard,categoriesBar } from '../data'



const Artical = (props) => {
    return (
    <div>
        <Container>
            <Row className='r mt-5  mb-5'>
                <Col className='a1'>
                    {newsCard.map((item) => (
                    <>
                        <div style={{marginBottom:'20px'}}>
                        <img src={item.img} style={{width:"658px",height:"400px",marginBottom:'20px'}}/>
                        <div className='details d-flex '>
                            <div className='d-flex' style={{gap:'10px'}}>
                                <img src={item.calenderIcon}/>
                                <p>{item.calenderText}</p>
                            </div>
                            <div className='d-flex' style={{gap:'10px'}}>
                                <img src={item.authorIcon}/>
                                <p>{item.authorText}</p>
                            </div>
                            <div className='d-flex' style={{gap:'10px'}}>
                                <img src={item.viewIcon}/>
                                <p>{item.viewText}</p>
                            </div>
                            <div className='d-flex' style={{gap:'10px'}}    >
                                <img src={item.likeIcon}/>
                                <p>{item.likeText}</p>
                            </div>
    
    
                        </div>
                        <div className='cc mt-3  mb-3'> 
                        {item.textOne}
                        </div>
                        <div className='part1 mb-3'>
                            <p>{item.textTwo}</p>
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
                        </div>
                        </>
                    ))}
                    
                </Col>
                <Col className='a2'>
                    <Form>
                        <Form.Control className='input' type="text" placeholder="Search" />
                    </Form>
                    <div className='dv'>
                        <p className='textq'>Recent Posts</p>
                        <div className='mininews'>
                           {RecentNews.map((item) => (
                                <>
                            
                                    <div style={{display:'flex',width:'274px',height:'60px',justifyContent:'center', gap:'10px', marginBottom:'10px'}}>
                                        <img src={item.img} style={{width:'60px',height:'60px',borderRadius:'5px'}}/>
                                         <div style={{width:'204px', height:'51px'}}>
                                             <p className='txt1'>{item.dateInfo}</p>
                                             <p className='txt2'>{item.content}</p>
                                        </div>
                                     </div>
                            
                                </>
                             

                           ))} 
                        </div>
                    </div>
                    <div style={{width:'314px',height:'303px',border:'1px solid #d5cfcf',padding:'10px'}}>
                        <Container>
                            <p className='p2'>Categories</p>
                            {categoriesBar.map((item) => (
                                <div style={{width:'274px',height:'50px',display:'flex',justifyContent:'space-between'}}>
                                <p>{item.name}</p>
                                <div style={{borderRadius:'50px',background:'#159EEC',width:'23px',height:'23px',textAlign:'center', color:'white'}}>{item.num}</div>
                            </div>
                            ))}
                        </Container>
                            
                        </div>
                    
                </Col>
            </Row>
        </Container>
    </div>
  
      
    )
}

export default Artical
