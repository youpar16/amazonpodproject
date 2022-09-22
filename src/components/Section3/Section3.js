import React, {useState} from 'react'
import './Section3.scss'
import classNames from 'classnames'


const Section3 = () => {
    const [isChecked, setIsChecked] = useState({
        product_1: false,
        product_2: false,
        product_3: false,
        product_4: false,
        product_5: false,
        product_6: false,
    })

    const checkHandler = (e) =>{
        Object.keys(isChecked).forEach(product => isChecked[product] = false)
        setIsChecked({...isChecked, [e.target.id]: !isChecked[e.target.id]})
    }

    return(
        <div>
            <div className='section_3--1'>
                <label>Campaign Information <span className='asterisk'>*</span></label>
                <textarea type='text' required className='section_3_1--input' />
            </div>
            <div className='section_3--2'>
                <label>Messaging/Tone <span className='asterisk'>*</span></label>
                <input type='text' required className='section_3_2--input' />
            </div>
            <div className='section_3--3'>
                <label>Product Interested In <span className='asterisk'>*</span></label>
                <div className='section_3_3--container'>
                    <div id='product_1' onClick={checkHandler} className={classNames("product_choice" , {"active" : isChecked.product_1})}>Amazon DSP</div>
                    <div id='product_2' onClick={checkHandler} className={classNames("product_choice" , {"active" : isChecked.product_2})}>Amazon Marketing Cloud</div>
                    <div id='product_3' onClick={checkHandler} className={classNames("product_choice" , {"active" : isChecked.product_3})}>Audio Ads</div>
                    <div id='product_4' onClick={checkHandler} className={classNames("product_choice" , {"active" : isChecked.product_4})}>Custom Advertising Solution</div>
                    <div id='product_5' onClick={checkHandler} className={classNames("product_choice" , {"active" : isChecked.product_5})}>Sizmek Ad Suite</div>
                    <div id='product_6' onClick={checkHandler} className={classNames("product_choice" , {"active" : isChecked.product_6})}>Streaming TV Ads</div>
                </div>
                <div className='section_3--4'>
                    <label>KPIs (For ex. Grow brand searches) <span className='asterisk'>*</span></label>
                    <input type='text' required className='section_3_4--input' />
                </div>
            </div>
        </div>
    )
}

export default Section3
