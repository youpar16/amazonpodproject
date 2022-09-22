import React from 'react'
import Navbar from '../Navbar/Navbar'
import './SubmittedRequest.scss'
import Section1 from '../../images/C_S1.svg'
import Section2 from '../../images/C_S2.svg'
import Section3 from '../../images/C_S3.svg'
import Section4 from '../../images/C_S4.svg'
import Section5 from '../../images/C_S5.svg'
import Section6 from '../../images/C_S6.svg'
import Edit from '../../images/Edit.svg'


const SubmittedRequest = (props) => {
    const { setBg } = props;

  return (
    <div className='new_request'>
        <Navbar setBg = {setBg} allrequest={true} >
            <div className='nav_overview--container'>
                <p className='overview_header'>Adidas Originals</p>
                <p className='overview_description'>Budget: $60,000 - $100,000</p>
                <p className='overview_description'>Custom Advertising Solution</p>
                <p className='overview_submit'>Submitted On: 08/15/2022</p>
            </div>
            <div className='nav_edit--container'>
                <button className='nav_edit--button'>
                    <img src={Edit} alt='edit'/>
                    <p className='nav_edit--text'>Edit Request</p>
                </button>
                <p className='edit_note'>NOTE: Only edittable until before request is under review</p>
            </div>
        </Navbar>
        <div className='new_request--outer_container'>
            <div className='new_request--container'>
                <div className='new_request--upper_container'>
                    <h1 className='new_request--main_title'>20220815_Adidas_00432</h1>
                    <p className='new_request--request_number'>Request No. 000432</p>
                </div>
                <div className='new_request--main_container'>   
                    <div className='submitted_section1'>
                        <img src={Section1} className='submitted_section--img' alt=''/>
                    </div>
                    <div className='submitted_section2'>
                        <img src={Section2} className='submitted_section--img'alt=''/>
                    </div>
                    <div className='submitted_section3'>
                        <img src={Section3} className='submitted_section--img' alt=''/>
                    </div>
                    <div className='submitted_section4'>
                        <img src={Section4} className='submitted_section--img' alt=''/>  
                    </div>
                    <div className='submitted_section5'>
                        <img src={Section5} className='submitted_section--img' alt=''/>
                    </div>
                    <div className='submitted_section6'>
                        <img src={Section6} className='submitted_section--img' alt=''/>
                    </div>
                        
                </div>
            </div>
        </div>
    </div>

  )
}

export default SubmittedRequest