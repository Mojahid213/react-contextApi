import React, { useContext } from 'react';
import { catagoryContext } from '../../App';
import Catagories from '../Catagories/Catagories';

const Home = (props) => {
    const count = useContext(catagoryContext);
    return (
        <div style={{border:'1ps solid black',backgroundColor:'purple'}}>
            <h2>This is home: {count}</h2>
            <Catagories count={count}></Catagories>
        </div>
    );
};

export default Home;