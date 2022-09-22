import React, { useState, useMemo } from 'react'
import './Section5.scss'
import Select, { components } from 'react-select'
import classNames from 'classnames'
import CountryList from 'react-select-country-list'
import Plus from '../../images/plus.svg'



const Section5 = ( props ) => {
    var UsaStates = require('usa-states').UsaStates
    var usStates = new UsaStates()
    var statesNames = usStates.arrayOf('names')
    const country_options = useMemo (() => CountryList().getData(), [])
    const [isChecked, setIsChecked] = useState({
        age_1: false,
        age_2: false,
        age_3: false,
        age_4: false,
        age_5: false,
        age_6: false,
        gender_1: false,
        gender_2: false,
        gender_3: false,
        gender_4: false,
        gender_5: false,        
    })

    const checkHandler = (e) =>{
        setIsChecked({...isChecked, [e.target.id]: !isChecked[e.target.id]})
    }

    const DropdownIndicator = props => {
        return (
            <components.DropdownIndicator {...props}>
                <img src={Plus} alt='plus'/>
            </components.DropdownIndicator>
        )
    }

    const customStyles = {
        container: (provided, state) => ({
            ...provided,
            width: '100%',
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
            backgroundColor: '#232F3E',
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            width: 50,
            height: 54,
            display: 'flex',
            justifyContent: 'center',
            marginTop: -1,
            marginRight: -1,

        }),

        indicatorSeparator: (provided, state) => ({

        }),

        valueContainer: (provided, state) => ({
            ...provided,
            height: '100%',
            maxHeight: 50,
            overflowY: 'scroll'
        }),

        multiValue: (provided, state) => ({
            ...provided,
            backgroundColor: '#7BAFD4',

        })
    }

    const languageOptions = [
        { value: "sq", label: "shqiptar"},
        { value: "ar", label: "العربية"},
        { value: "bn", label: "বাংলা"},
        { value: "ch", label: "中文"},
        { value: "nl", label: "Nederlandse"},
        { value: "en", label: "English"},
        { value: "fr", label: "Français"},
        { value: "de", label: "German"},
        { value: "gr", label: "ελληνική"},
        { value: "gu", label: "Avañe'ẽ"},
        { value: "hi", label: "हिंदुस्तानी"},
        { value: "it", label: "Italiano"},
        { value: "ko", label: "한국어"},
        { value: "ms", label: "Melayu"},
        { value: "fa", label: "پارسی"},
        { value: "pt", label: "Português"},
        { value: "ro", label: "Română"},
        { value: "ru", label: "русский"},
        { value: "sr", label: "Српско-хрватски"},
        { value: "es", label: "Español"},
        { value: "sw", label: "Kiswahili"},
        { value: "sv", label: "Swedish"},
        { value: "ta", label: "தமிழ்"},
        { value: "tr", label: "Türk"},
    ]

    const stateList = [
        statesNames.map(element => ({
            label: element,
            value: element
        }))
    ]

    stateList[0].unshift({label: 'All States', value: 'All States'})

    const { children } = props
    return(
        <div>
            <div className='section_5--1'>
                <label>Age <span className='asterisk'>*</span></label>
                <div className='section_5_1--container'>
                    <div id='age_1' onClick={checkHandler} className={classNames("age_choice" , {"active" : isChecked.age_1})}>Under 18</div>
                    <div id='age_2' onClick={checkHandler} className={classNames("age_choice" , {"active" : isChecked.age_2})}>18-24</div>
                    <div id='age_3' onClick={checkHandler} className={classNames("age_choice" , {"active" : isChecked.age_3})}>25-34</div>
                    <div id='age_4' onClick={checkHandler} className={classNames("age_choice" , {"active" : isChecked.age_4})}>35-44</div>
                    <div id='age_5' onClick={checkHandler} className={classNames("age_choice" , {"active" : isChecked.age_5})}>45-54</div>
                    <div id='age_6' onClick={checkHandler} className={classNames("age_choice" , {"active" : isChecked.age_6})}>55+</div>
                </div>
            </div>
            <div className='section_5--2'>
                <label>Gender <span className='asterisk'>*</span></label>
                <div className='section_5_2--container'>
                    <div id='gender_1' onClick={checkHandler} className={classNames("gender_choice" , {"active" : isChecked.gender_1})}>Male</div>
                    <div id='gender_2' onClick={checkHandler} className={classNames("gender_choice" , {"active" : isChecked.gender_2})}>Female</div>
                    <div id='gender_3' onClick={checkHandler} className={classNames("gender_choice" , {"active" : isChecked.gender_3})}>Non-Binary</div>
                    <div id='gender_4' onClick={checkHandler} className={classNames("gender_choice" , {"active" : isChecked.gender_4})}>Transgender</div>
                    <div id='gender_5' onClick={checkHandler} className={classNames("gender_choice" , {"active" : isChecked.gender_5})}>Other</div>
                </div>
            </div>
            <div className='section_5--3'>
                <label>Target Audience Profile</label>
                <textarea type='text' required className='section_5_3--input' />
            </div>
            <div className='section_5--4'>
                <label>Language(s) <span className='asterisk'>*</span></label>
                <Select 
                        styles={customStyles}
                        components = {{DropdownIndicator}}
                        label = 'Language'
                        options = {languageOptions}
                        isMulti
                        isClearable = {false}
                    />
            </div>
            <div className='section_5--5'>
                <label>Geographic Location <span className='asterisk'>*</span></label>
                <Select 
                    styles={customStyles} 
                    components = {{DropdownIndicator}}
                    placeholder='Select Country' 
                    label="Country" 
                    options={
                        country_options.map(element => ({
                            label: element.label,
                            value: element.label,
                        }))
                    }
                    isMulti
                    isClearable = {false}
                    />
                <label className='input_label'>Country</label>
            </div>
            <div className='section_5--6'>
                <Select 
                    styles={customStyles}
                    components = {{DropdownIndicator}}
                    placeholder = 'Select State(s)'
                    label = 'State'
                    options = {
                        stateList[0]
                        
                    }
                    isMulti
                    isClearable = {false}
                />
                <label className='input_label'>State</label>
            </div>
            <div className='section_5--7'>
                <div className='section_5_7--city_container'>
                    <input type='text' required className='section_5_7--input' />
                    <label className='input_label'>City</label>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Section5