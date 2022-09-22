import React from 'react'
import './UserDashboard.scss'
import Navbar from '../Navbar/Navbar'
import AllRequests from '../AllRequests/AllRequests'
import NewRequest from '../../images/new_request.svg'
import { Link } from 'react-router-dom'


const UserDashboard = (props) => {
  const { setBg } = props
  return (
    <div className='user_dashboard--container'>
        <Navbar setBg={setBg}>
          <Link to ='/newrequest' className='left_nav--new_request'>
              <img src={NewRequest} className='left_nav--new_request--plus' alt='new request'></img>
              <p className='left_nav--new_request--text'>Create New Request</p>
          </Link>
        </Navbar>
        <AllRequests/>
    </div>
  )
}

export default UserDashboard