import React from 'react'
import './Section4.scss'


const Section4 = () => {
    return(
        <div>
            <div className='section_4--1'>
                <label>Total Budget <span className='asterisk'>*</span></label>
                <input type='text' required className='section_4_1--input' />
            </div>
            <div className='section_4--2'>
                <label className='section_4_2--label'>Campaign Timeline <span className='asterisk'>*</span></label>
                <div className='section_4_2--container'>
                    <div className='section_4_2--start'>
                        <input placeholder='MM/DD/YYYY' type='text' required className='section_4_2--start_input'/>
                        <label for='section_4_2--start_input' className='section_4_2--start_label input_label'>Start Date</label>
                    </div>
                    <div className='section_4_2--end'>
                        <input placeholder='MM/DD/YYYY' type='text' required className='section_4_2--end_input'/>
                        <label for='section_4_2--end_input' className='section_4_2--end_label input_label'>End Date</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4