import { createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shipment from './Components/Shipment/Shipment';

export const catagoryContext = createContext();

function App() {
  const [Count,setCount] = useState('laptop')
  return (
    <catagoryContext.Provider value={[Count, setCount]}>
    <Header></Header>
     <Home Count={Count}></Home>
     <Shipment></Shipment>
     </catagoryContext.Provider>
  );
}

export default App;
