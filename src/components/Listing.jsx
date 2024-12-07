import React, { useContext } from 'react';
import { MainContext } from '../Context/Index';
const Listing = ({cat,range}) => {

const { addToCart} = useContext(MainContext);
let {products} =useContext(MainContext);



  if(cat !=null){
    products = products.filter(
      (prod)=>{
        if(prod.category == cat){
          return true ;
        }else{
          return false
        }
      }
    )
  }

  if(Range.to !=0 && (range.to > range.from)){
    products=products.filter(
      (prod)=>{
        if(prod.price >= range.from && prod.price<=range.to){
          return true;

        }else{
          return false;
        }
      }
    )
  }
    return (
        <div className="col-span-4 border border-gray-500 ">
            <div className="bg-white">
  <div className="p-4">
    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
      Customers also purchased
    </h2>
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
     
      {/* More products... */}
      
      {
        products.map(
            (product)=>{
              return( 
                
              <div className="group relative" key={product.id}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.image}
                    alt="Front of men's Basic Tee in black."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                    
                        <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}

                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.rating.rate}/5</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">${product.price}</p>
               
                </div>
                <button onClick={()=>addToCart(product.id)} className=' z-[99999] relative px-3 btn border-t-neutral-500 bg-red-300' > Add Cart</button>
              </div>
              )
            }
        )
      }
    </div>
  </div>
</div>

        </div>
    );
}

export default Listing;
