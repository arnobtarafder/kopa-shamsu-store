import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import { useEffect, useState } from 'react';
import Card from './Card/Card';

function App() {
  const [guns, setGuns] = useState([]);
  // console.log(guns);
  useEffect( () => {
    fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
    .then((response) => response.json())
    .then((data) => setGuns(data))
  }, []);
  

  return (
      <div>
        <Navbar></Navbar>

        {
          guns.map( (gun) => 
                  //  <h1 key = {gun.id}> {gun.name} </h1>
                   <Card key = {gun.id} data = {gun}></Card>
                    
                    )
        }
      </div>
  );
}

export default App;
