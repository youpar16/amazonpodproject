import React, { useMemo } from 'react'
import './Section2.scss'
import Select, { components } from 'react-select'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Dropdown from '../../images/dropdown.svg'
import Dropup from '../../images/dropup.svg'
import CountryList from 'react-select-country-list'



const Section2 = () => {
    var UsaStates = require('usa-states').UsaStates
    var usStates = new UsaStates()
    var statesNames = usStates.arrayOf('names')
    const country_options = useMemo (() => CountryList().getData(), [])

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
            zIndex: 9999,
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
    const stateCustomStyles = {
        container: (provided, state) => ({
            ...provided,
            width: 240,
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

    return(
        <div>
            <div className='section_2--1'>
                <label className='section_2_1--label'>Main Point of Contact <span className='asterisk'>*</span></label>
                <div className='section_2_1--container'>
                    <div className='section_2_1--first'>
                        <input type='text' required className='section_2_1--first_input'/>
                        <label for='section_2_1--first_input' className='section_2_1--first_label input_label'>First Name</label>
                    </div>
                    <div className='section_2_1--last'>
                        <input type='text' required className='section_2_1--last_input'/>
                        <label for='section_2_1--last_input' className='section_2_1--last_label input_label'>Last Name</label>
                    </div>
                </div>
            </div>
            <div className='section_2--2'>
                <label for='section_2_2--titlerole_input' className='section_2_2--titlerole_label'>Title / Role <span className='asterisk'>*</span></label>
                <input type='text' required className='section_2_2--titlerole_input' />
            </div>
            <div className='section_2--3'>
                <div className='section_2_3--number_container'>
                    <label >Phone <span className='asterisk'>*</span></label>
                    <PhoneInput country="us" disableAreaCodes placeholder=''/>
                </div>
                <div className='section_2_3--email_container'>
                    <label>Business Email <span className='asterisk'>*</span></label>
                    <input type='text' required className='section_2_3--email_input' />
                </div>
            </div>
            <div className='section_2--4'>
                <label>Country <span className='asterisk'>*</span></label>
                <Select 
                    onMenuOpen={() => (dropped = true)}
                    onMenuClose={() => (dropped = false)}
                    styles={customStyles} 
                    components = {{DropdownIndicator}}
                    placeholder='Select Country' 
                    label="Country" 
                    options={
                        country_options.map(element => ({
                            label: element.label,
                            value: element.label,
                        }))
                    } />
            </div>
            <div className='section_2--5'>
                <div className='section_2_5--states'>
                    <label>State <span className='asterisk'>*</span></label>
                    <Select 
                        onMenuOpen={() => (dropped = true)}
                        onMenuClose={() => (dropped = false)}
                        styles={stateCustomStyles}
                        components = {{DropdownIndicator}}
                        placeholder = 'Select State'
                        label = 'State'
                        options = {
                            statesNames.map(element => ({
                                label: element,
                                value: element
                            }))
                        }
                    />
                </div>
                <div className='section_2_5--city'>
                    <label>City <span className='asterisk'>*</span></label>
                    <input type='text' required className='section_2_5--city_input' />
                </div>
                <div className='section_2_5--zipcode'>
                    <label>Zip Code <span className='asterisk'>*</span></label>
                    <input type='number' required className='section_2_5--zipcode_input' />
                </div>
            </div>
            <div className='section_2--6'>
                <label>Add Other Team Members (Enter Business Emails to include them in the system)</label>
                <input type='text' required className='section_2_6--input' />
            </div>
        </div>
    )
}

export default Section2