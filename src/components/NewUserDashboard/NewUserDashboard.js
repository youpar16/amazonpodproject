import React from 'react'
import './NewUserDashboard.scss'
import Navbar from '../Navbar/Navbar'
import Requests from '../Requests/Requests'
import AllRequests from '../AllRequests/AllRequests'
import NewRequest from '../../images/new_request.svg'
import { Link } from 'react-router-dom'


const NewUserDashboard = (props) => {
  const { setBg } = props
  return (
    <div className='user_dashboard--container'>
        <Navbar setBg={setBg}>
          <Link to ='/newrequest' className='left_nav--new_request'>
              <img src={NewRequest} className='left_nav--new_request--plus' alt='new request'></img>
              <p className='left_nav--new_request--text'>Create New Request</p>
          </Link>
        </Navbar>
        <Link to='/submittedrequest' className='hidden_submitted_request'/>
        <AllRequests>
            <Requests 
                accountName='Adidas_000432' 
                product='Custom Ad Solutions' 
                lastUpdate='08/08/2022' 
                statusOption='submitted' 
                submittedOn='0 days ago' 
                message='Awaiting response' 
                messageStyle='1'
            />
        </AllRequests>
    </div>
  )
}

export default NewUserDashboard