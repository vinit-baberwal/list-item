import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Listing from "./components/Listing";
import axios from "axios";


function Home() {
  const[categories,setCategories] = useState([]);
  const[cat,setCat]= useState (null);
  const[range,setRange]= useState({
    from:0,
    to:0
  })
   useEffect(
    ()=>{
      axios.get ("https://fakestoreapi.com/products/categories")
      .then(
        (success)=>{
         setCategories(success.data);
        }
      )
      .catch(
        (error)=>{

        }
      )
    
    }
   )

  return (
    <div className=" gap-4 max-w-[1200px] mx-auto grid grid-cols-5">
     <Filter range={range} rangeHandler={setRange} categories={categories} cat={cat} catHandler={setCat} />
     <Listing  cat={cat} range={range }/>
    </div>
  );
}

export default Home;
