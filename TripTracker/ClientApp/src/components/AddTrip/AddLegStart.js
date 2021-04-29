import React, { useEffect, useRef, useState } from 'react';

import { useHistory } from 'react-router-dom';

export const AddLegStart = ({ homeState }) => {
    const [startCity, setStartCity] = useState('');
    const [startDate, setStartDate] = useState('');
    const [startState, setStartState] = useState('');

    const { isFirstLeg } = homeState;

    const history = useHistory();

    const cityRef = useRef(null);

    useEffect(() => cityRef.current.focus(), []);

    const changeStartCity = (event) => setStartCity(event.target.value);

    const changeStartDate = (event) => setStartDate(event.target.value);

    const changeStartState = (event) => setStartState(event.target.value);

    const submitForm = (event) => {
        event.preventDefault();

        history.push('/home/addEnd')
    };
    
    return (
        <div className='align-items-center d-flex flex-column justify-content-center mt-3 text-light'>
            <div className='align-items-start d-flex flex-column mb-5'>
                <h1>{`Tell us about the ${isFirstLeg ? 'first' : 'next'} leg of your trip`}</h1>
                <h2>How did it start?</h2>
            </div>

            <form>
                <div className='d-flex mb-3'>
                    <input className='form-control form-control-lg mr-3' onChange={changeStartCity} placeholder='ex. Jefferson City' ref={cityRef} type='text' value={startCity} />
                    <select className='form-select form-select-lg' onChange={changeStartState} value={startState}>
                        <option disabled value=''>State...</option>
                        <option value='DC'>DC</option>
                        <option value='TN'>TN</option>
                    </select>
                </div>

                <input className='form-control form-control-lg mb-3' onChange={changeStartDate} placeholder='__/__/____' type='text' value={startDate} />

                <button className='btn btn-light' onClick={submitForm} type='submit'>Continue</button>
            </form>
        </div>
    );
};