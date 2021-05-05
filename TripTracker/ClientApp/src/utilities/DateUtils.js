import React from 'react';

export const getDateDays = (month) => {
    let days = 31;
    if (month === '2') days = 28;
    else if (['4', '6', '9', '11'].includes(month)) days = 30;
    
    return (
        <>
            {[...Array(days)].map((e, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
        </>
    );
};

export const getDateYears = (startDate) => {
    return(
        <>
            {[...Array(new Date().getFullYear() - startDate + 1)].map((e, i) => <option key={i} value={i + startDate}>{i + startDate}</option>)}
        </>
    );
};