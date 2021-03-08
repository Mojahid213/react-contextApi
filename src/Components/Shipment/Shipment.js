import React, { useContext } from 'react';
import { catagoryContext } from '../../App';

const Shipment = () => {
    const[count,setCount] = useContext(catagoryContext);
    return (
        <div>
            <h2>This is shipment</h2>
            <button onClick={()=>setCount(count+1)}>Increament</button>
        </div>
    );
};

export default Shipment;