import React from "react";
import "./Card.css";
// import { BsFillCartFill } from "react-icons/bs";
import {ImCart} from "react-icons/im"

// , handleAddToCart
const Card = ({gunData, handleAddToCart}) => {
  // console.log(props.gunData);
  // console.log(gunData);
  // const { handleAddToCart } = gunData;
  const { name, img, bullet, action, price, id, capacity, category } = gunData;

  // const handleAddToCart = (id) => {
  //   console.log(id);
  // }

  return (
    <div className='card'>
      <div className="image-container">
        <img src={img} alt="" />
      </div>

      <div className="gun-info">    
        <h1>{name}</h1>
        <p>Bullet Type: {bullet}</p>
        <p>Capacity: {capacity}</p>
        <p>Action: {action}</p>
      </div>

      <div className="add-to-cart">
        <button onClick={() => handleAddToCart(gunData)}> <ImCart className="icon" /></button>
        <h1>৳ {price} </h1>
      </div>
    </div>
  );
};

export default Card;