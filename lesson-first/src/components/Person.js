import React from 'react';

const Person = ({name,age,city,status}) => {
    return (
        <div>
            <p>Name : {name}</p>
            <p>Age : {age}</p>
            <p>City : {city}</p>
            <p>Status : {status}</p>
        </div>
    );
};

export default Person;