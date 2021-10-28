import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Investor from '../Investor/Investor';
import "./investors.css"

const Investors = () => {
    const [investors,setInvestors]= useState([])
    const [cart,setCart]=useState([])

    useEffect(()=>{
        fetch("./fakedb.JSON")
        .then(res=>res.json())
        .then(data=>setInvestors(data))
    },[])
    
    function addInvestor(data) {
        let totalCart=[...cart,data] 
        setCart(totalCart) 
    }
    return (
        <div className="inverstors">
           <div className="inverstor-part">

           <div className="investor">
           {
               investors.map(invest=><Investor
                invest={invest}
                key={invest.pin}
                add={addInvestor}></Investor>)
           }
           </div>
           </div>
           <div className="fund-part">
               <Cart properties={cart}></Cart>
           </div>
        </div>
    );
};

export default Investors;