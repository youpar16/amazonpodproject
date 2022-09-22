import React, { useState, createRef } from 'react'
import './NewRequest.scss'
import Navbar from '../Navbar/Navbar'
import FormSection from '../FormSection/FormSection'
import { Link } from 'react-router-dom'
import Submit from '../../images/Send.svg'
import Save from '../../images/Save.svg'
import Submitted from '../../images/submitted_.svg'
import Saved from '../../images/saved.svg'
import Section1 from '../Section1/Section1'
import Section2 from '../Section2/Section2'
import Section3 from '../Section3/Section3'
import Section4 from '../Section4/Section4'
import Section5 from '../Section5/Section5'
import Section6 from '../Section6/Section6'


const NewRequest = (props) => {
    const { setBg } = props;
    const submitRef = createRef()
    const saveRef = createRef()
    const [popUp, setPopUp] = useState(true)
    const [submitButton, setSubmitButton] = useState(true)
    const setClose = () => {
        setPopUp(false)
        saveRef.current.disabled = true
        console.log('done')
    }
    const [savePopUp, setSavePopUp] = useState(true)
    const setSaveClose = () => {
        setSavePopUp(false)
        submitRef.current.disabled = true
    }

    const [companyName, setCompanyName] = useState('')

    const newName = (e) => {
        setCompanyName(e.target.value)
    }

    const validateSubmit = (e) =>{
        if(e.target.value !== ''){
            setSubmitButton(false)
        }else{
            setSubmitButton(true)
        }
    }

  return (
    <div className='new_request'>
        <Navbar setBg = {setBg}>
            <button ref={saveRef} className='left_nav--save_progress' onClick={setSaveClose}>
                <img src={Save} className='left_nav--save_progress--img' alt='save progress'></img>
                <p className='left_nav--save_progress--text'>Save Progress</p>
            </button>
            <button id='submit_request--button' disabled={submitButton} ref={submitRef} className='left_nav--submit_request' onClick={setClose}>
                <img src={Submit} className='left_nav--submit_request--img' alt='submit request'></img>
                <p className='left_nav--submit_request--text'>Submit Request</p>
            </button>
        </Navbar>
        <div className='new_request--outer_container'>
            <div className='new_request--container'>
                <div className='new_request--upper_container'>
                    <div className='new_request--popup_container' data-hidden={popUp}>
                        <div className='popup--container'>
                            <div className='popup_top--container'>
                                <img src={Submitted} alt='submitted'/>
                                <h2 className='popup_header'>Your request has been submitted!</h2>
                                <p className='popup_text'>You will be notified when any action is taken and the status will be updated.</p>
                            </div>
                            <Link to='/newuserdashboard' className='return_button'>Return to All Requests</Link>
                        </div>
                    </div>
                    <div className='new_request--popup_container' data-hidden={savePopUp}>
                        <div className='popup--container'>
                            <div className='popup_top--container'>
                                <img src={Saved} alt='saved'/>
                                <h2 className='popup_header'>Your request has been saved!</h2>
                                <p className='popup_text'>It will be marked with the 'Draft' Status.</p>
                            </div>
                            <Link to='/userdashboard' className='return_button'>Return to All Requests</Link>
                        </div>
                    </div>
                    <h1 className='new_request--main_title'>20220815_{companyName}_00432</h1>
                    <p className='new_request--request_number'>Request No. 000432</p>
                </div>
                <div className='new_request--main_container'>   
                    <FormSection number='1' title='Company Information'>
                        <Section1>
                            <div className='section_1--pcn'>
                                <label for='section_1--pcn_input' className='section_1--pcn_label input_label'>Parent Company Name <span className='asterisk'>*</span></label>
                                <input type='text' required className='section_1--pcn_input' onChange={newName}/>
                            </div>  
                        </Section1>
                    </FormSection>
                    <FormSection number='2' title='Contact Information'>
                        <Section2 />
                    </FormSection>
                    <FormSection number='3' title='Campaign Information'>
                        <Section3 />
                    </FormSection>
                    <FormSection number='4' title='Budget and Schedule'>
                        <Section4 />
                    </FormSection>
                    <FormSection number='5' title='Target Audience'>
                        <Section5>
                            <div className='section_5_7--zipcode_container'>
                                <input type='text' required className='section_5_7--input' onBlur={validateSubmit}/>
                                <label className='input_label'>Zip Code</label>
                            </div>
                        </Section5>
                    </FormSection>
                    <FormSection number='6' title='Upload Files'>
                        <Section6 />
                    </FormSection>
                </div>
            </div>
        </div>
    </div>

  )
}

export default NewRequest