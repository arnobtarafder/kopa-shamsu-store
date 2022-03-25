// import React from 'react';

// const Cart = (props) => {
//     console.log(props.item);
//     return (
//         <div>
//             {/* <h1>{cartData.name}</h1> */}
//         </div>
//     );
// };

// export default Cart;


import React from 'react';
import './Cart.css'

const Cart = ({cartItem}) => {
    console.log(cartItem);
    const { name, img, price } = cartItem;
    return (
        <div className='modal-info'>
            <img className='modal-image-container' src={img} alt="" />
            <div>
            <h3>Name: {name}</h3>
            <p>Price: ${price}</p>
            </div>
        </div>
    );
};

export default Cart;