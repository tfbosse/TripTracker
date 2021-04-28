import React, { useEffect, useRef, useState } from 'react';

export const AddLegEnd = ({ advanceForm, isFirstLeg }) => {
    const [endCity, setEndCity] = useState('');
    const [endDate, setEndDate] = useState('');
    const [endState, setEndState] = useState('');

    const cityRef = useRef(null);

    useEffect(() => cityRef.current.focus(), []);

    const changeEndCity = (event) => setEndCity(event.target.value);

    const changeEndDate = (event) => setEndDate(event.target.value);
    
    const changeEndState = (event) => setEndState(event.target.value);

    const submitForm = (event) => {
        event.preventDefault();

        advanceForm();
    };
    
    return (
        <div className='align-items-center d-flex flex-column justify-content-center mt-3 text-light'>
            <h1>{`Tell us about the ${isFirstLeg ? 'first' : 'next'} leg of your trip`}</h1>
            <h2>How did it end?</h2>

            <form>
                <div className='d-flex mb-3'>
                    <input className='form-control form-control-lg mr-3' onChange={changeEndCity} placeholder='ex. Jefferson City' ref={cityRef} type='text' value={endCity} />
                    <select className='form-select form-select-lg' onChange={changeEndState} value={endState}>
                        <option disabled value=''>State...</option>
                        <option value='DC'>DC</option>
                        <option value='TN'>TN</option>
                    </select>
                </div>

                <input className='form-control form-control-lg mb-3' onChange={changeEndDate} placeholder='__/__/____' type='text' value={endDate} />

                <button className='btn btn-light' onClick={submitForm} type='submit'>Continue</button>
            </form>
        </div>
    );
};