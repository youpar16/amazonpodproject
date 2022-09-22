import React from 'react'
import './FormSection.scss'


const FormSection = (props) => {

    const { number, title, children } = props;

    return (
        <div className='form_container' data-number={number}>
            <div className='form_container--top_header'>
                <div className='top_header--number'>
                    {number}
                </div>
                <div className='top_header--title'>
                    {title}
                </div>
                <p className='required_field'><span className='asterisk'>*</span> Required Fields</p>
            </div>
            {children}
        </div>
    )
}

export default FormSection