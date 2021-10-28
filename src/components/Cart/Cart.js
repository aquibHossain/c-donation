import React from 'react';
import "./cart.css"

const Cart = (props) => {
    let totalAmount=0
    props.properties.forEach(element => {
        totalAmount=totalAmount+parseInt(element.currency)
    });
    return (
        <div>
            <h2><i class="fas fa-users"></i>Total Investor:{props.properties.length}</h2>
            
            <h3>Amount Received:${totalAmount}m</h3>
            {
                props.properties.map(data=><h3 className="names">{data.name}</h3>)
            }
        </div>
    );
};

export default Cart;