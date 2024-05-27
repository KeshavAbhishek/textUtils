import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState(0);
  const [text, setText] = useState('Enable Dark Mode');
  const changeLightDarkMode = () => {
    if(mode===0){
      // document.getElementById('root').style.filter = 'grayscale(1)';
      document.getElementById('root').style.background = '#06446b';
      document.querySelector("#heading").style.color="white";
      document.querySelector("#exampleFormControlTextarea1").style.background="#0b1328";
      document.querySelector("#exampleFormControlTextarea1").style.color="#fff";
      document.querySelector("#lightDarkMode").style.background="#fff";
      document.querySelector("#lightDarkMode").style.color="#000";
      setMode(1);
      setText('Enable Light Mode');
    }
    else{
      // document.getElementById('root').style.filter = 'grayscale(0)';
      document.getElementById('root').style.background = '#fff';
      document.querySelector("#heading").style.color="#000";
      document.querySelector("#exampleFormControlTextarea1").style.background="#fff";
      document.querySelector("#exampleFormControlTextarea1").style.color="#000";
      document.querySelector("#lightDarkMode").style.background="#000";
      document.querySelector("#lightDarkMode").style.color="#fff";
      setMode(0);
      setText('Enable Dark Mode');
    }
  }
  return (
    <>
      <Navbar title="Text Utils" />
      <br />
      <div className='container'>
        <TextForm heading="Enter text for analysis" />
      </div>
      <br />
      <button type="button" className="btn btn-dark" id='lightDarkMode' onClick={changeLightDarkMode}>{text}</button>
    </>
  );
}

export default App;
