import React, { useContext} from 'react';
import { catagoryContext } from '../../App';

const Header = (props) => {
    const [count,setcount] = useContext(catagoryContext)
    return (
        <div>
            <h2>This is Header:{count}</h2>
            <button onClick={()=>setcount('laptop')}>Laptop</button>
            <button onClick={()=>setcount('mobile')}>Mobile</button>
            <button onClick={()=>setcount('camera')}>Camera</button>
        </div>
    );
};

export default Header;