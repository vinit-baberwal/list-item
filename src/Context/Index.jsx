import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
const MainContext = createContext();
const Index = (props) => {
   

    const[cart, setCart]= useState([]);
  
    
  const[products,setProducts] = useState ([]);
  useEffect(
    ()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(
          (success)=>{
            setProducts (success.data);
  
          }
        )
        .catch(
          (error)=>{
  
          }
        )
    },
    []
  )

    const addToCart= (pId)=>{
        if(cart.indexOf(pId)== -1){
        setCart([...cart,pId]);
        }
    }
      
    const removeToCart= (pId)=>{
        
    }

    return (
        <MainContext.Provider value={{cart, products ,addToCart}}>
            {props.children}
        </MainContext.Provider>
    );
}


export {MainContext};
export default Index;

