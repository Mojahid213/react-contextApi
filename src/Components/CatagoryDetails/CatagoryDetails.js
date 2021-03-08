import React, { useContext } from 'react';
import { catagoryContext } from '../../App';

const CatagoryDetails = (product) => {
    // const{product} = props;
    const{name} = product
    return (
        <div>
            <h4>selected product: {name}</h4>
        </div>
    );
};

export default CatagoryDetails;