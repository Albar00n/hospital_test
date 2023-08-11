import Link from 'next/link'
import React from 'react'
import { Container } from 'react-bootstrap'

const Maincover = (props) => {
    return (
        <div className='cover'>
            <img  className='coverimg' src='images/cover.png'/>
            <div className='covertext'>
                <div>
                    <p className='text-c-1'>Caring for Life</p>
                    <p className='text-c-2'>Leading the Way in Medical Excellence</p>
                    <Link href='/services'><div className='clickcover'>Our Services</div></Link>
                </div>
                        
            
                
            </div>
            <div  className='linkscover'>
                <div  className='d-flex justify-content-between' style={{width:'991px',height:'100px' ,position:'absolute',bottom:-50}}>
                <Link href='/appointement'>

                <div className='iconeone'>
                                    <div>Book an Appointment</div>
                                    <div><img src='/icons/calender-1.svg'/></div>
                                    
                                </div>

                </Link>
               
                <div className='icontwo'>   
                                <div>Book an Appointment</div>
                                    <div><img src='/icons/faces.svg'/></div>
                </div>
                <div className='iconthree'>
                                    <div>Book an Appointment</div>
                                    <div><img src='/icons/cashm.svg'/></div>
                </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Maincover
