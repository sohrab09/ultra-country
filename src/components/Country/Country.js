import React from 'react';

const Country = (props) => {
    const {name, population, region, flag} = props.country;
    const flagStyle = {height: "60px"}
    const countryStyle = {
        border: "1px solid purple",
        borderRadius: "5px",
        color: "purple",
        margin: "10px",
        padding: "10px"
}
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <h3>Country Name is: {name}</h3>
            <img style={flagStyle} src={flag} alt=""/>
            <p>Population is {population}</p>
            <p>Region is: {region}</p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;