import React from 'react'
import './Section1.scss'
import Select, { components } from 'react-select'
import Instagram from '../../images/Instagram.svg'
import Facebook from '../../images/Facebook.svg'
import Twitter from '../../images/Twitter.svg'
import Tiktok from '../../images/Tiktok.svg'
import Dropdown from '../../images/dropdown.svg'
import Dropup from '../../images/dropup.svg'

const Section1 = (props) => {
    
    const DownIcon = () => {
        return <img src={Dropdown} alt='dropdown'/>
    }
    const UpIcon = () => {
        return <img src={Dropup} alt='dropup'/>
    }

    let dropped = false

    const DropdownIndicator = props => {
        return (
            <components.DropdownIndicator {...props}>
                {dropped ? <UpIcon /> : <DownIcon />}
            </components.DropdownIndicator>
        )
    }

    const customStyles = {
        container: (provided, state) => ({
            ...provided,
            width: 350,
            borderRadius: 10,
            marginTop: 4,
        }),
        control: (provided, state) => ({
            ...provided,
            height: 54,
            borderRadius: 10,
            border: state.isFocused ? '1px solid #232f3e80' : '1px solid #80828580',
            boxShadow: 'none',  
            '&:hover':{
                boxShadow: 'none'
            }
        }), 
        menu: (provided, state) => ({
            ...provided,
            borderRadius: 10,
            border: '1px solid #80828580',
        }),

        menuList: (provided, state) => ({
            ...provided,
            borderRadius: 10,
        }),

        option: (provided, state) => ({
            ...provided,
            '&:hover': {
                backgroundColor: '#ff990033'
            },
            backgroundColor: state.isSelected ? '#ff990033' : 'white',
            color: state.isSelected ? ' black' : 'black'
        }),

        indicatorsContainer: (provided, state) => ({
            ...provided,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            width: 50,
            height: 54,
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            padding: 0,
            '& img':{
                marginLeft: 4,
                height: 10
            }
        }),

        indicatorSeparator: (provided, state) => ({
            ...provided,
            height: 52,
            marginTop: -0.25
        })
    }

    const { children } = props

    return(
        <div>
            <div className='section_1--1'>
                <label className='section_1--label'>Industry <span className='asterisk'>*</span></label>
                <Select 
                    onMenuOpen={() => (dropped = true)}
                    onMenuClose={() => (dropped = false)}
                    styles={customStyles} 
                    components = {{DropdownIndicator}}
                    placeholder='Select Industry' 
                    label="Industry" 
                    options={
                        [
                            {value: 'Industries', label: 'Industries'},
                            {value: 'Automotive', label: 'Automotive'},
                            {value: 'Consumer Electronics', label: 'Consumer Electronics'},
                            {value: 'Entertainment', label: 'Entertainment'},
                            {value: 'Fashion', label: 'Fashion'},
                            {value: 'Financial Services', label: 'Financial Services'},
                            {value: 'Grocery', label: 'Grocery'},
                            {value: 'Hospitality', label: 'Hospitality'},
                            {value: 'Publishing', label: 'Publishing'},
                            {value: 'Telecom', label: 'Telecom'},
                            {value: 'Toys and Games', label: 'Toys and Games'},
                            
                        ]
                } />
            </div>
            <div className='section_1--2'>
                {/* <div className='section_1--pcn'>
                    <label for='section_1--pcn_input' className='section_1--pcn_label input_label'>Parent Company Name <span className='asterisk'>*</span></label>
                    <input type='text' required className='section_1--pcn_input'/>
                </div> */}
                {children}
                <div className='section_1--scn'>
                    <label for='section_1--scn_input' className='section_1--scn_label input_label'>Subsidiary Company Name</label>
                    <input type='text' required className='section_1--scn_input'/>
                </div>

            </div>
            <div className='section_1--3'>
                <div className='section_3--cw'>
                    <label for='section_3--cw_input' className='section_3--cw_label input_label'>Company Website <span className='asterisk'>*</span></label>
                    <input type='text' required className='section_3--cw_input'/>
                </div>
            </div>
            <div className='section_1--4'>
                <label className='section_4--label'>Company Social Media Links</label>
                <div className='section_4--container'>
                    <div className='section_4--ig'>
                        <div className='section_4--img_wrap'>
                            <img src={Instagram} className='section_4--img' alt='instagram'/>
                        </div>
                        <input type='text' className='section_4--ig_input'></input>    
                        <label for='section_4--ig_input' className='section_4--ig_label'>Instagram</label>
                    </div>
                    <div className='section_4--fb'>
                        <div className='section_4--img_wrap'>
                            <img src={Facebook} className='section_4--img' alt='facebook'/>
                        </div>
                        <input type='text' className='section_4--fb_input'></input>    
                        <label for='section_4--fb_input' className='section_4--fb_label'>Facebook</label>
                    </div>
                    <div className='section_4--tw'>
                        <div className='section_4--img_wrap'>
                            <img src={Twitter} className='section_4--img' alt='twitter'/>
                        </div>
                        <input type='text' className='section_4--tw_input'></input>    
                        <label for='section_4--tw_input' className='section_4--tw_label'>Twitter</label>
                    </div>
                    <div className='section_4--tt'>
                        <div className='section_4--img_wrap'>
                            <img src={Tiktok} className='section_4--img' alt='tiktok'/>
                        </div>
                        <input type='text' className='section_4--tt_input'></input>    
                        <label for='section_4--tt_input' className='section_4--tt_label'>Tiktok</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section1