import React, { useEffect, useRef, useState } from 'react';

import { useHistory } from 'react-router-dom';

import { DateMonthOptions } from '../../constants/DateConstants';
import { StateAbbreviations } from '../../constants/LocationConstants';

import { getDateDays, getDateYears } from '../../utilities/DateUtils';
import { isNullUndefinedOrEmpty } from '../../utilities/ObjectUtils';

export const AddLegStart = ({ homeState }) => {
    const [cityStateErrorMessage, setCityStateErrorMessage] = useState('');
    const [dateErrorMessage, setDateErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [startCity, setStartCity] = useState('');
    const [startDateDay, setStartDateDay] = useState(0);
    const [startDateMonth, setStartDateMonth] = useState(0);
    const [startDateYear, setStartDateYear] = useState(0);
    const [startState, setStartState] = useState('');

    const { isFirstLeg } = homeState;

    const history = useHistory();

    const cityRef = useRef(null);

    useEffect(() => cityRef.current.focus(), []);

    const changeStartCity = (event) => {
        setStartCity(event.target.value);
        validateLocation(event.target.value, startState);
    };

    const changeStartDateDay = (event) => {
        setStartDateDay(event.target.value);
        validateDate(startDateMonth, event.target.value, startDateYear);
    };

    const changeStartDateMonth = (event) => {
        setStartDateMonth(event.target.value);
        validateDate(event.target.value, startDateDay, startDateYear);
    };

    const changeStartDateYear = (event) => {
        setStartDateYear(event.target.value);
        validateDate(startDateMonth, startDateDay, event.target.value);
    };

    const changeStartState = (event) => {
        setStartState(event.target.value);
        validateLocation(startCity, event.target.value);
    };

    const submitForm = (event) => {
        event.preventDefault();

        const isValid = validateLocation(startCity, startState)
            & validateDate(startDateMonth, startDateDay, startDateYear);

        if (isValid) {
            setIsLoading(true);
            history.push('/home/addEnd');
        }      
    };

    const validateDate = (month, day, year) => {
        if (month === 0) {
            setDateErrorMessage('Please select a month!');
            return false;
        }
        if (day === 0) {
            setDateErrorMessage('Please select a day!');
            return false;
        }
        if (year === 0) {
            setDateErrorMessage('Please select a year!');
            return false;
        }

        setDateErrorMessage('');
        return true;
    }

    const validateLocation = (city, state) => {
        if (isNullUndefinedOrEmpty(city)){
            setCityStateErrorMessage('Please enter a city!');
            return false;
        } 
        if (isNullUndefinedOrEmpty(state)) {
            setCityStateErrorMessage('Please select a state!');
            return false;
        }
        if (typeof(city) === 'string' && city.length > 256) {
            setCityStateErrorMessage('Please limit the city to 256 characters or fewer!');
            return false;
        }

        setCityStateErrorMessage('');
        return true;
    };

    return (
        <div className='align-items-center d-flex flex-column justify-content-center mt-3 text-light'>
            <div className='align-items-start d-flex flex-column mb-5'>
                <h1>{`Tell us about the ${isFirstLeg ? 'first' : 'next'} leg of your trip.`}</h1>
                <h2>How did it start?</h2>
            </div>

            <form>
                <div className='d-flex'>
                    <input className='form-control form-control-lg mr-3' onChange={changeStartCity} placeholder='ex. Jefferson City' ref={cityRef} type='text' value={startCity} />
                    <select className='form-select form-control-lg' onChange={changeStartState} value={startState}>
                        <option disabled value=''>State</option>
                        {[...StateAbbreviations].map((abbreviation) => <option value={abbreviation}>{abbreviation}</option>)}
                    </select>
                </div>
                {cityStateErrorMessage && <span className='ml-1 mt-1'>{cityStateErrorMessage}</span>}
                
                <div>
                    <select className='form-select form-control-lg mr-3 mt-3' onChange={changeStartDateMonth} value={startDateMonth}>
                        <option disabled value={0}>Month</option>
                        {[...DateMonthOptions].map((month, index) => <option value={index + 1}>{month}</option>)}
                    </select>

                    <select className='form-select form-control-lg mr-3 mt-3' onChange={changeStartDateDay} value={startDateDay}>
                        <option disabled value={0}>Day</option>
                        {getDateDays(startDateMonth)}
                    </select>

                    <select className='form-select form-control-lg mt-3' onChange={changeStartDateYear} value={startDateYear}>
                        <option disabled value={0}>Year</option>
                        {getDateYears(2000)}
                    </select>
                </div>
                {dateErrorMessage && <span className='ml-1 mt-1'>{dateErrorMessage}</span>}

                <div className='d-flex mt-3'>
                    <button className='btn btn-light' onClick={submitForm} type='submit'>Continue</button>
                    
                    {isLoading
                        && <div className='ml-3'>
                            <span className='spinner-border'></span>
                        </div>
                    }
                </div>
                
            </form>
        </div>
    );
};