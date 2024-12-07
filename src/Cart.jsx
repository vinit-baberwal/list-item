import React, { useContext } from 'react';
import { MainContext } from './Context/Index';

const Cart = () => {
    const{products,cart } = useContext(MainContext);
    let cartProducts = [];




    if(cart.lenght !=0){
         cartProducts = products.filter(
            (product)=>{
                if(cart.indexOf(product.id) == -1) return false;
             else return true;   
            }
        ) 
    };
    return (
        <div>
            {
                cartProducts.map (
                    (prod)=>{
                        return(  
                        <div className="group relative" key={prod.id}>
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                          <img
                            src={prod.image}
                            alt="Front of men's Basic Tee in black."
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                          />
                        </div>
                        <div className="mt-4 flex justify-between">
                          <div>
                            <h3 className="text-sm text-gray-700">
                            
                                <span aria-hidden="true" className="absolute inset-0" />
                              {prod.title}
        
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">{prod.rating.rate}/5</p>
                          </div>
                          <p className="text-sm font-medium text-gray-900">${prod.price}</p>
                       
                        </div>
                           </div>
                        )
                    }
                )
            }
            
        </div>
    );
}

export default Cart;
