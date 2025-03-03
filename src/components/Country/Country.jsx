import { useState } from 'react';
import './Country.css';
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    // console.log(country)
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited);
    }

    return (
        <div className={` ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'purple' : 'white'}}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' :'Going'}</button>
            {visited ? 'I have visited this Country' : 'I want to visit'}
        </div>
    );
};

export default Country;