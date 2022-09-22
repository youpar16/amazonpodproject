import React from 'react'
import './Section6.scss'
import Plus from '../../images/plus.svg'

const Section6 = () => {

    const hiddenFile = React.useRef(null)
    const clickFile = () =>{
        hiddenFile.current.click()
    }

    return(
        <div>
            <div className='section_6_1'>
                <label>Upload References or Campaign Inspiration</label>
                <input placeholder='Attach URL here' type='text' required className='section_6_1--input' />
            </div>
            <div className='section_6_2'>
                <input placeholder='Upload File Here' type='text' required className='section_6_1--input' />
                <input type='file' ref={hiddenFile} className='hidden'/>
                <div onClick={clickFile} className='upload_file'>
                    <img src={Plus} alt='plus'/>
                </div>
                <label className='input_label'>Upload up to 3 Files. Max file size: 5MB each.</label>
            </div>
        </div>
    )
}
export default Section6