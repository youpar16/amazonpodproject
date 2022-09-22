import React from 'react'
import './AllRequests.scss'
import TotalRequests from '../../images/total_requests.svg'
import FilterBoth from '../../images/filter_both.svg'
import FilterDown from '../../images/filter_down.svg'
import Requests from '../Requests/Requests'

const AllRequests = (props) => {
    const { children } = props
    return (
        <div className='all_request--outer_container'>
            <div className='all_request--container'>
                <div className='all_request--upper_container'>
                    <h1 className='all_request--main_title'>All Requests</h1>
                    <div className='all_request--total_requests'>
                        <img src={TotalRequests} className='total_requests--img' alt='3 total requests'/>
                        <p className='total_requests--text'>Total Requests</p>
                    </div>
                </div>
                <div className='all_request--main_container'>
                    <div className='main_container--header'>
                        <div className='selected'>
                            <p className='header_titles bold'>All</p>
                        </div>
                        <p className='header_titles'>Draft</p>
                        <p className='header_titles'>Submitted</p>
                        <p className='header_titles'>Pending</p>
                        <p className='header_titles'>Accepted</p>
                        <p className='header_titles'>In Progress</p>
                        <p className='header_titles'>Completed</p>
                    </div>
                    <div className='all_request--filter_container'>
                        <div className='accountname--container'>
                            <p className='filter_name'>Account Name</p>
                        </div>
                        <div className='product--container'>
                            <p className='filter_name'>Product</p>
                            <img src={FilterBoth} className='filter_img' alt='filter'/>
                        </div>
                        <div className='lastupdated--container'>
                            <p className='filter_name'>Last Updated</p>
                            <img src={FilterDown} className='filter_img' alt='filter'/>
                        </div>
                        <div className='status--container'>
                            <p className='filter_name'>Status</p>
                        </div>
                        <div className='submittedon--container'>
                            <p className='filter_name'>Submitted On</p>
                            <img src={FilterBoth} className='filter_img' alt='filter'/>
                        </div>
                        <div className='message--container'>
                            <p className='filter_name'>Message</p>
                        </div>
                    </div>
                    {children}
                    <Requests 
                        accountName='Adidas_000433' 
                        product='Custom Ad Solutions' 
                        lastUpdate='08/08/2022' 
                        statusOption='draft' 
                        submittedOn='1 days ago' 
                        message='--' 
                    />
                    <Requests 
                        accountName='Adidas_000434' 
                        product='Custom Ad Solutions' 
                        lastUpdate='08/13/2022' 
                        statusOption='pending' 
                        submittedOn='3 days ago' 
                        message='Awaiting response' 
                        messageStyle='1'
                    />
                    <Requests 
                        accountName='Adidas_000435' 
                        product='Custom Ad Solutions' 
                        lastUpdate='08/23/2022' 
                        statusOption='completed' 
                        submittedOn='7 days ago' 
                        message='View Thread'
                        messageStyle='2' 
                    />

                </div>
            </div>
        </div>
    )
}

export default AllRequests