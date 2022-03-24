import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import { useEffect, useState } from 'react';
import Card from './Card/Card';
import Modal from 'react-modal';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');


function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

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
        {/* <button onClick={openModal}>Open Modal</button> */}


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
     {/* <div>
     {
       cart && cart.map( (item) => (
         //  console.log(item);
         
         <h1 key = {item.id}> {item.name} </h1>
         
         )
         
         )
        }
      </div> */}
      <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal">

       <button onClick={closeModal}>close</button>
        <div>
          {
            cart.map(item =>(<h1 key = {item.id}>{item.name}</h1>))
          }
        </div>

      </Modal>
      </div>
  );
}

export default App;
