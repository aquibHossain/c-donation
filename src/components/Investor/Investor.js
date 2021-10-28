import React from 'react';
import "./investor.css"

const Investor = (props) => {
    const {name,phone,company,currency,country,img}=props.invest
    return (
        <div className="person">               
             <div >
               <img src={img} alt="" />
             </div>
             <div>
               <hr />
                <h2>Name:{name}</h2>
                <h3>Company:{company}</h3>
                <h4>Amount:{currency}m</h4>
                <p>Phone:{phone}</p>
                <p>Country:{country}</p>
                <button onClick={()=>props.add(props.invest)} className="addButton"><i class="fas fa-user"></i> Add Investor</button>
             </div>
        </div>
    );
};

export default Investor;