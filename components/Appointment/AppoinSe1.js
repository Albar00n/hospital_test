import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { AppointmentTime,linksCall } from '../data'

const AppoinSe1 = (props) => {
    const data = linksCall
    return (
        <>
        <Row className='mt-5 mb-5'>
            <Col xl={6}>
                <div className='g-50'>
                    <p className='g-50-1'>Book an Appointment</p>
                    <p className='g-50-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
                </div>
                <Form className='formApp'>
                    <div className=''>
                        <div className='d-flex'>
                            <input type='text' placeholder='Name' className='inputForm'/>
                            <select name="Gender" id="Gender" className='inputFormGender'>
                                <option >Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                
                            </select>
                        </div>
                        <div className='d-flex'>
                            <input type='email' placeholder='Email' className='inputFormE'/>
                            <input type='text' placeholder='phone' className='inputFormP'/>
                        </div>
                        <div className='d-flex'>
                            <select name="Date" id="date" className='inputFormP'>
                                <option >Date</option>
                                <option value="12/10/2023">12/10/2023</option>
                                <option value="15/10/2023">15/10/2023</option>
                                <option value="20/10/2023">20/10/2023</option>
                            </select>
                            <select name="Time" id="time" className='inputFormP'>
                                <option>Time</option>
                                <option value="10:00 AM">10:00 AM</option>
                                <option value="11:00 AM">11:00 AM</option>
                                <option value="9:00 AM">9:00 AM</option>
                            </select>
                        </div>
                        <div className='d-flex'>
                            <select name="Doctor" id="Doctor" className='inputFormP'>
                                <option >Doctor</option>
                                <option value="Dr.Ali">Dr.Ali</option>
                                <option value="Dr.Moahmed">Dr.Moahmed</option>
                                <option value="Dr.Osama">Dr.Osama</option>
                            </select>
                            <select name="Department" id="Department" className='inputFormP'>
                                <option>Department</option>
                                <option value="Emergency Department">Emergency Department</option>
                                <option value="Surgery Department">Surgery Department</option>
                                <option value="Outpatient Department">Outpatient Department</option>
                            </select>
                        </div>
                        <div>
                            <input type='text' placeholder='Message' className='inputFormM'/>
                        </div>
                        <div>
                        <input type="submit" value="Submit" className='input2'/>
                        </div>
                    </div>
                    
                </Form>
            </Col>
            <Col xl={6}>
                <div className='S-time'>
                    <div>
                        <p className='s-text'>Shedule hours</p>
                    </div>
                    {AppointmentTime.map((item) => (
                        <div className='s-sheduale' key={item.id}>
                            <p>{item.date}</p>   
                            <p>-</p>
                            <p>{item.time}</p>
                      </div>
                    ))}
                   <div className='d-flex justify-content-center align-item-center m-2'>
                        <img src='/icons/bar.svg'/>
                   </div>
                   <div className='emergency mt-4   '>
                            <div style={{width:'285px'}}>
                                <img src='/icons/Phome.svg'/>
                                <p className='ll-1'>
                                Emergency
                                </p>
                                <p className='ll-2'>(237) 681-812-255</p>
                            </div>
                   </div>

                </div>
            </Col>
        </Row>
        </>
    )
}

export default AppoinSe1
