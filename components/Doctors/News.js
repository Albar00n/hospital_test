import React from 'react'
import { Col,Row, Container } from 'react-bootstrap'
import { smallNews } from '../data'

const News = (props) => {
    return (
        <>
            <Container>
                <div className='newss mb-5'>
                    <div className=''>
                        <p className='p-news'>Better information, Better health</p>
                        <h1 className='h1-news'>News</h1>
                    </div>
                    <div className='news-section'>
                        <div>
                        <Row className='rowClass'>
                            <Col xl={6} className='card-small'>
                                
                                    <div>   
                                    <img src='/images/img-small.png'/>
                                    </div>
                                    <div className='text-card'>
                                        <div className=''>
                                            <p className='dateInfo'>Monday 05, September 2021 | By Author</p>
                                            <p>This Article’s Title goes Here, but not too long.</p>         
                                        </div>
                                        <div className='icons'>
                                            <div className='view'>
                                            <img src="/icons/views.svg" alt="" className="mx-3" />
                                            <p>22</p>
                                            </div>
                                            <div className='likes'>
                                            <img src="/icons/likes.svg" alt="" className="mx-3" />
                                            <p>22</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                            </Col>   
                            <Col xl={6} className='card-small'>
                            <div>   
                                    <img src='/images/img-small.png'/>
                                    </div>
                                    <div className='text-card'>
                                        <div className=''>
                                            <p className='dateInfo'>Monday 05, September 2021 | By Author</p>
                                            <p>This Article’s Title goes Here, but not too long.</p>         
                                        </div>
                                        <div className='icons'>
                                            <div className='view'>
                                            <img src="/icons/views.svg" alt="" className="mx-3" />
                                            <p>22</p>
                                            </div>
                                            <div className='likes'>
                                            <img src="/icons/likes.svg" alt="" className="mx-3" />
                                            <p>22</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                            </Col> 
                            <Col xl={6} className='card-small'>
                            <div>   
                                    <img src='/images/img-small.png'/>
                                    </div>
                                    <div className='text-card'>
                                        <div className=''>
                                            <p className='dateInfo'>Monday 05, September 2021 | By Author</p>
                                            <p>This Article’s Title goes Here, but not too long.</p>         
                                        </div>
                                        <div className='icons'>
                                            <div className='view'>
                                            <img src="/icons/views.svg" alt="" className="mx-3" />
                                            <p>22</p>
                                            </div>
                                            <div className='likes'>
                                            <img src="/icons/likes.svg" alt="" className="mx-3" />
                                            <p>22</p>
                                                
                                            </div>
                                        </div>
                                    </div>
                            </Col>   
                            <Col xl={6} className='card-small'>
                            <div>   
                                    <img src='/images/img-small.png'/>
                                    </div>
                                    <div className='text-card'>
                                        <div className=''>
                                            <p className='dateInfo'>Monday 05, September 2021 | By Author</p>
                                            <p>This Article’s Title goes Here, but not too long.</p>         
                                        </div>
                                        <div className='icons'>
                                            <div className='view'>
                                            <img src="/icons/views.svg" alt="" className="mx-3" />
                                            <p>22</p>
                                            </div>
                                            <div className='likes'>
                                            <img src="/icons/likes.svg" alt="" className="mx-3" />
                                            <p>22</p>
                                                
                                            </div>
                                        </div>
                                    </div>  
                            </Col> 
                        </Row>
                        </div>
                    </div>
                </div>
                
            </Container>
        </>
    )
}

export default News
