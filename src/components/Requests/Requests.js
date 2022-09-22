import { React, useState, useEffect } from 'react'
import './Requests.scss'
import Draft from '../../images/Draft.svg'
import Pending from '../../images/Pending.svg'
import Completed from '../../images/Completed.svg'
import Submitted from '../../images/Submitted_Status.svg'

const Requests = (props) => {
    const { accountName, product, statusOption, lastUpdate, submittedOn, message, messageStyle } = props;
    const [status, setStatus] = useState()

    useEffect(() => {
        switch(statusOption){
            case 'draft':
                setStatus(Draft)
                break;
            case 'pending':
                setStatus(Pending)
                break;
            case 'completed':
                setStatus(Completed)
                break;
            case 'submitted':
                setStatus(Submitted)
                break;
            default:
                break;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='request_wrap'>
            <div className='request_accountname--wrap'>
                <p>{accountName}</p>
            </div>
            <div className='request_product--wrap'>
                <p>{product}</p>
            </div>
            <div className='request_lastupdate--wrap'>
                <p>{lastUpdate}</p>
            </div>
            <div className='request_status--wrap'>
                <img src={status} className='request_status--img' alt='request status'></img>
            </div>
            <div className='request_submittedon--wrap'>
                <p>{submittedOn}</p>
            </div>
            <div className='request_message--wrap'>
                <p className='request_message' data-style={messageStyle}>{message}</p>
            </div>
        </div>
    )
}

export default Requests
