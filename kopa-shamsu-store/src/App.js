import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import { useEffect, useState } from 'react';
import Card from './Card/Card';
import Modal from 'react-modal';
import {AiFillCloseSquare} from 'react-icons/ai'
import Cart from './Cart/Cart';


const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '500px', // <-- This sets the height
    overlfow: 'scroll' // <-- This tells the modal to scroll
  }
};

Modal.setAppElement('#root');


function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  
  const cartF = (cart) => {
    const newCart = [cart];
   //  console.log(newCart);  
  //  setCart(newCart);
  return newCart;
     //  console.log(gun);
  }  


  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // console.log(cart);

  // const handleAddToCart = (gun) => {
  //   // console.log(gun);
  //   const newCart = [...cart, gun];
  //   // console.log(newCart);
  //   setCart(newCart);
  // }

   const handleAddToCart = (gun) => {
     const newCart = [...cart, gun];
    //  console.log(newCart);  
    setCart(newCart);
      //  console.log(gun);
   }  


  // console.log(guns);
  useEffect( () => {
    // fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
    fetch('guns.json')
    .then((response) => response.json())
    .then((data) => setGuns(data))
  }, []);
  

  return (
      <div>
        <Navbar cart = {cart} openModal = {openModal}></Navbar>

        {/* <div>
          {
            cart.map(item =>(<h1 key = {item.id}>{item.name}</h1>))
          }
        </div> */}

     <div className="card-container">
     {
         guns && guns.map( (gun) => (
            
                  //  <h1 key = {gun.id}> {gun.name} </h1>
                  <Card key = {gun.id} gunData = {gun} handleAddToCart = {handleAddToCart}></Card>
          )
                    
                    )
        }

     </div>
    
      <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal">

       <button className='modal-close-button' onClick={closeModal}><AiFillCloseSquare className='icon' size={30}/ >  </button>
        <div>
        {cart.length === 0 && (
          <div className='cart-warning'>
            <p> Cart is empty </p>
          </div>
        )}
          {/* {cart.length === 4 && (
          <div className='cart-warning'>
            <p> You can't buy more than 4 weapons </p>
          </div>

        )} */}

          {
            // cart.map(item =>(<h1 key = {item.id}>{item.name} {item.price}</h1>))
            cart.map(item => (
                      <Cart key = {item.id} cartItem = {item} >  </Cart>))
          }
        </div>

      </Modal>
      </div>
  );
}

export default App;
