import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import { useState } from 'react';

function App() {
  const nayoks=['Kalis','Al-fred','Nicolas','Maria','Captain']
  return (
    
    <div className="App">
      <header className="App-header">
      <MovieCounter></MovieCounter>
      
      <aside>
      <Nayok name= {nayoks[0]}></Nayok>
      <Nayok name={nayoks[1]}></Nayok>
      <Nayok name={nayoks[2]}></Nayok>
      <Nayok name={nayoks[3]}></Nayok>
      <Nayok name={nayoks[4]}></Nayok>
      </aside>
      </header>
     
    </div>
  );
}

function Nayok(props) {
  const [count,setCount] = useState (0);
  const handleClick = () => setCount(count + 1);
  const nayokStyle = {
 border:'2px solid red',
 margin: '20px',
 padding:'10px' 
}
const btnStyle = {
  borderRadius:'5px',
  textSizeAdjust:'20px', 
  color:'white', 
  background:'Blue'
}
  return (
    <div style={nayokStyle}>
      <h1>Boss Nayok : {props.name}</h1>
      <button style={btnStyle} onClick={handleClick}>Action : {count}</button>
      <p>Nice Work</p>
    </div>
  )
  
}
function MovieCounter() {
  const [count,setCount] = useState (0);
  const handleClick = () => setCount(count + 1);
  return(
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h3>Number Of Movie : {count} </h3>
    </div>
  )

  
}

export default App;
