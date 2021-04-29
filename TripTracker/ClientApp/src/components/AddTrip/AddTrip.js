import React, { useEffect, useRef, useState } from 'react';

import { useHistory } from 'react-router-dom';

import { ApiUrl, HttpStatusCodes } from '../../constants/ApiConstants';

import { createPost } from '../../utilities/ApiUtils';
import { isNullUndefinedOrEmpty } from '../../utilities/ObjectUtilities';

export const AddTrip = ({ homeDispatch }) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isTripNameValid, setIsTripNameValid] = useState(true);
    const [tripName, setTripName] = useState('');

    const nameRef = useRef(null);

    const history = useHistory();

    // eslint-disable-next-line
    useEffect(() => homeDispatch({ fieldName: 'isFirstLeg', value: true }), []); // dispatch function does not change, so is not a dependency
    useEffect(() => nameRef.current.focus(), []);
    
    const addTrip = (event) => {
        event.preventDefault();

        const isValid = validateTripName(tripName);
        setIsTripNameValid(isValid);

        if (isValid) {
            let body = {
                Name: tripName
            };
    
            setIsLoading(true);
            fetch(ApiUrl, createPost(body))
                .then(response => response.json())
                .then(data => {
                    if (data.code === HttpStatusCodes.Created) {
                        history.push('/home/addStart');
                    }
                })
                .finally(() => {
                    setIsLoading(false);
                })
        }
    }

    const changeTripName = (event) => {
        setTripName(event.target.value);
        setIsTripNameValid(validateTripName(event.target.value));
    }

    const validateTripName = (name) => {
        if (isNullUndefinedOrEmpty(name)){
            setErrorMessage('Please enter a trip name!');
            return false;
        } 
        if (typeof(name) === 'string' && name.length > 256) {
            setErrorMessage('Please limit the trip name to 256 characters or fewer!');
            return false;
        } 

        setErrorMessage('');
        return true;
    };
    
    return (
        <div className='align-items-center d-flex flex-column justify-content-center mt-3 text-light'>
            <h1 className='mb-3'>Add a new trip</h1>

            <form>
                <div className='d-flex'>
                    <input className='form-control form-control-lg mr-3' onChange={changeTripName} placeholder='Trip Name...' ref={nameRef} type='text' value={tripName} />

                    <button className='btn btn-light' onClick={addTrip} type='submit'>Add</button>

                    {isLoading 
                        && <div className='ml-3 mt-2'>
                            <span className='spinner-border'></span>
                        </div>
                    }
                </div>

                {!isTripNameValid && <span className='ml-1 mt-1'>{errorMessage}</span>}
            </form>
        </div>
    );
};