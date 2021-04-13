import React, { useState } from 'react';

import { ApiUrl, HttpStatusCodes } from '../../constants/ApiConstants';

import { createPost } from '../../utilities/ApiUtils';

export const AddTrip = ({ advanceForm }) => {
    const [tripName, setTripName] = useState('');
    
    const addTrip = (event) => {
        event.preventDefault();

        let body = {
            Name: tripName
        };

        fetch(ApiUrl, createPost(body))
            .then(response => response.json())
            .then(data => {
                if (data.code === HttpStatusCodes.Created) {
                    advanceForm();
                }
            });

        setTripName('');
    }

    const changeTripName = (event) => setTripName(event.target.value);
    
    return (
        <div className='align-items-center d-flex flex-column justify-content-center mt-3 text-light'>
            <h1>Add a new trip</h1>

            <form>
                <div className='d-flex'>
                    <input className='form-control form-control-lg' onChange={changeTripName} placeholder='Trip Name...' type='text' value={tripName} />
                    <button className='btn btn-light ml-3' onClick={addTrip} type='submit'>Add</button>
                </div>
            </form>
        </div>
    );
};