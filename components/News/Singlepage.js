import React from 'react'
import BackgroundHeader from "../Global/backgroundHeader";
import { Row,Col, Container,Form } from 'react-bootstrap';
import { categoriesBar,RecentNews } from '../data';
import Contact from "../Global/Contact";



const Singlepage = (props) => {
    return (
        <div>
            <BackgroundHeader name='Single page'/>
            <Container>
                <Row className='mt-5 mb-5'>
                    <Col xl={6}>
                        <div>
                            <img src="/images/twowomen.png" width={'658px'} height={'400px'}/>
                        </div>
                        <div>
                            <p style={{color:'black', width:'658px' , fontFamily:'Work Sans',fontSize:'18px',marginTop:'32px',fontWeight:'400' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
                            </p>
                        </div>
                    </Col>
                    <Col className="a2">
                        <div>
                        <Form>
                        <Form.Control className="input" type="text" placeholder="Search" />
                        </Form>
                        <div className="dv">
                        <p className="textq">Recent Posts</p>
                        <div className="mininews">
                            {RecentNews.map((item) => (
                            <>
                                <div
                                key={item.id}
                                style={{
                                    display: "flex",
                                    width: "274px",
                                    height: "60px",
                                    justifyContent: "center",
                                    gap: "10px",
                                    marginBottom: "10px",
                                }}>
                                <img
                                    src={item.img}
                                    style={{ width: "60px", height: "60px", borderRadius: "5px" }}
                                />
                                <div style={{ width: "204px", height: "51px" }}>
                                    <p className="txt1">{item.dateInfo}</p>
                                    <p className="txt2">{item.content}</p>
                                </div>
                                </div>
                            </>
                            ))}
                        </div>
                        </div>
                        <div
                        style={{
                            width: "314px",
                            height: "303px",
                            border: "1px solid #d5cfcf",
                            padding: "10px",
                        }}>
                        <Container>
                            <p className="p2">Categories</p>
                            {categoriesBar.map((item) => (
                            <div
                                key={item.id}
                                style={{
                                width: "274px",
                                height: "50px",
                                display: "flex",
                                justifyContent: "space-between",
                                }}>
                                <p>{item.name}</p>
                                <div
                                style={{
                                    borderRadius: "50px",
                                    background: "#159EEC",
                                    width: "23px",
                                    height: "23px",
                                    textAlign: "center",
                                    color: "white",
                                }}>
                                {item.num}
                                </div>
                            </div>
                            ))}
                        </Container>
                        </div>
                    </div>
                    </Col>
                </Row>
                 <Contact/>
            </Container>
           
          
        </div>
    )
}

export default Singlepage
