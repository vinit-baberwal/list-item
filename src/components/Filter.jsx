import React, { useContext } from 'react';
import { MainContext } from '../Context/Index';

const Filter = ({categories,cat , setCat ,catHandler ,range, rangeHandler}) => {
    const {products}=useContext(MainContext);
    return (
        <div className="border border-red-400 box-border">
            <div className="text-3xl font-bold p-3 text-center" > Categories</div>
            <hr />
            <ul>
                <li onClick={()=>catHandler(null)} className={`font-bold p-2 capitalize duration-150 cursor-pointer border-b
            ${cat==null? 'active-cat': ''}`} >All</li>
                {
                    categories.map(
                        (category,index)=>{
                           return  <li onClick={()=>catHandler(category)} 

                           className={`font-bold p-2 capitalize duration-150 cursor-pointer border-b 
                           ${cat==category ? 'active-cat':''}`} key={index}>{category}</li>

                        }
                    )
                }
            </ul>

               
            <div className="text-3xl font-bold p-3 text-center" > Price</div>
            <hr />
               <input type="number" value={range.from} className="w-full  p-1 border focus:outline-none box-border" 
               onChange={(e)=>{
                rangeHandler({
                    from:parseInt(e.target.value),
                    to:range.to,
                })
               }
                      
               } />
               <div className="text-center" >TO</div>
            
               <input type="number" value={range.to} min={range.from} className="w-full  p-1 border focus:outline-none box-border"
               onChange={(e)=>{
                rangeHandler({
                    to:parseInt(e.target.value),
                    from:range.from,
                })
               }
                      
               }  />



        </div>

        
    );
}

export default Filter;
