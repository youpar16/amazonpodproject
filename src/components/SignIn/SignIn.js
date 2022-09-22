import React from 'react'
import './SignIn.scss'
import AmazonAds from '../../images/Amazon_Ads.svg'
import { Link } from 'react-router-dom'

const SignIn = (props) => {

    const { setBg } = props;

    const handleSignIn = (e) =>{
        setBg(false);
    }

    return(
        <div className='signin_container'>
            <img src={AmazonAds} className='amazon_logo' alt='amazon logo'/>
            <p className='amazon_description'>AMAZON'S BRAND INNOVATION LAB DASHBOARD</p>
            <div className='signin_inner--container'>
                <h1 className='signin_signin--text'>Sign In</h1>
                <p className='signin_description--text'>Sign in to track and manage your ad requests!</p>
                <div className='signin_form--container'>
                    <div className='signin_form--email_container'>
                        <label>Email</label>
                        <input type='text' className='signin_form--input' />
                    </div>
                    <div className='signin_form--password_container'>
                        <label>Password</label>
                        <input type='password' className='signin_form--input' />
                        <p className='forgot_password'>Forgot Password?</p>
                    </div>
                </div>
                <div className='signin--container'>
                    <Link to ='/userdashboard' className='signin_button' onClick={handleSignIn}>Sign In</Link>
                    <p className='signin_newuser'>New User? Create Account</p>
                </div>
            </div>
        </div>
    )
}

export default SignIn