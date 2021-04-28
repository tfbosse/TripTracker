import React, { useEffect, useRef, useState } from 'react';

export const AddLegVehicle = ({ addNextLeg, resetForm, isFirstLeg }) => {
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');

    const yearRef = useRef(null);

    useEffect(() => yearRef.current.focus(), []);
    
    const changeMake = (event) => setMake(event.target.value);

    const changeModel = (event) => setModel(event.target.value);

    const changeYear = (event) => setYear(event.target.value);

    const submitLeg = (event) => {
        event.preventDefault();

        addNextLeg();
    }

    const submitTrip = (event) => {
        event.preventDefault();

        resetForm();
    };

    return (
        <div className='align-items-center d-flex flex-column justify-content-center mt-3 text-light'>
            <h1>{`Tell us about the ${isFirstLeg ? 'first' : 'next'} leg of your trip`}</h1>
            <h2>What vehicle did you take?</h2>

            <form>
                <input className='form-control form-control-lg mb-3' onChange={changeYear} placeholder='ex. 2001' ref={yearRef} type='text' value={year} />

                <input className='form-control form-control-lg mb-3' onChange={changeMake} placeholder='ex. Nissan' type='text' value={make} />

                <input className='form-control form-control-lg mb-3' onChange={changeModel} placeholder='ex. Skyline' type='text' value={model} />

                <button className='btn btn-light mr-3' onClick={submitLeg} type='submit'>Next Leg</button>
                <button className='btn btn-light' onClick={submitTrip} type='submit'>Finish</button>
            </form>
        </div>
    );
};