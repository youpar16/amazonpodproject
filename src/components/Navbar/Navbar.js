import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import AmazonLogo from '../../images/amz_ads_logo.svg'
import AllRequests from '../../images/AllRequest_t.svg'
import BackAllRequests from '../../images/backar.svg'
import Messages from '../../images/messages.svg'
import JohnDoe from '../../images/john_doe_avatar.svg'

const Navbar = (props) => {

  const { children, setBg, allrequest } = props;

  const handleSignOut = () =>{
    setBg(true)
  }

  return (
    <div className='left_nav'>
      <div className='left_nav--container'>
        <div className='left_nav--top'>
          <img src={AmazonLogo} className='left_nav--amz_logo' alt='amz-logo'></img>
          <div className='left_nav--tabs'>
              <Link to ='/newuserdashboard' className='left_nav--all_requests'>
                  <img src={allrequest ? BackAllRequests : AllRequests} className='left_nav--logo' alt='all requests'/>
              </Link>
              <Link to ='/?' className='left_nav--messages'>
                  <img src={Messages} className='left_nav--logo' alt='messages'/>
                  <p className='left_nav--description'>Messages</p>
              </Link>
          </div>
        </div>
        <div className='left_nav--bottom'>
          {children}
          <div className='break-line'/>
          <div className='left_nav--avatar'>
            <img src={JohnDoe} className='left_nav--avatar_photo' alt='avatar'/>
            <p className='left_nav--avatar_name'>John Doe</p>
          </div>
          <div className='left_nav--sign_out--button'>
            <Link to ='/' className='left_nav--sign_out' onClick={handleSignOut}>
              Sign Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar