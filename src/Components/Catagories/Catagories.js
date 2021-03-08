import React, { useContext, useEffect, useState } from "react";
import { catagoryContext } from "../../App";
import CatagoryDetails from "../CatagoryDetails/CatagoryDetails";

const allproducts = [
  { name: "Lenovo", catagory: "laptop" },
  { name: "Dell", catagory: "laptop" },
  { name: "Asus", catagory: "laptop" },
  { name: "Acer", catagory: "laptop" },
  { name: "Samsung", catagory: "mobile" },
  { name: "Nokia", catagory: "mobile" },
  { name: "Apple", catagory: "mobile" },
  { name: "Redmi", catagory: "mobile" },
  { name: "Canon", catagory: "camera" },
  { name: "Nikon", catagory: "camera" },
  { name: "Sony", catagory: "camera" },
  { name: "Camel", catagory: "camera" },
];

const Catagories = () => {
  const [catagory] = useContext(catagoryContext);
  const [Products,setProducts] = useState([]);
  useEffect(()=>{
    const matchproduct = allproducts.filter(pd => pd.catagory === catagory && catagory.toLowerCase())
    setProducts(matchproduct)
  },[catagory])
  return (
    <div>
      <h3>Select your catagory: {catagory}</h3>
      {
          Products.map(pd => <CatagoryDetails product={pd}></CatagoryDetails>)
      }
    </div>
  );
};

export default Catagories;
