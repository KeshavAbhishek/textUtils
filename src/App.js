import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert'
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState(0);
  const [text, setText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);
  const changeLightDarkMode = () => {
    if(mode===0){
      document.getElementById('root').style.background = '#06446b';
      document.querySelector("#heading").style.color="white";
      document.querySelector("#exampleFormControlTextarea1").style.background="#0b1328";
      document.querySelector("#exampleFormControlTextarea1").style.color="#fff";
      document.querySelector("#lightDarkMode").style.background="#fff";
      document.querySelector("#lightDarkMode").style.color="#000";
      setMode(1);
      setText('Enable Light Mode');
      setAlert({"message": "Dark Mode Enabled", "typof": "success"});
      setTimeout(()=>{
        setAlert(null)
      }, 2000);
    }
    else{
      document.getElementById('root').style.background = '#fff';
      document.querySelector("#heading").style.color="#000";
      document.querySelector("#exampleFormControlTextarea1").style.background="#fff";
      document.querySelector("#exampleFormControlTextarea1").style.color="#000";
      document.querySelector("#lightDarkMode").style.background="#000";
      document.querySelector("#lightDarkMode").style.color="#fff";
      setMode(0);
      setText('Enable Dark Mode');
      setAlert({"message": "Dark Mode Disabled", "typof": "success"});
      setTimeout(()=>{
        setAlert(null)
      }, 2000);
    }
  }
  return (
    <>
      <Navbar title="Text Utils" />
      <br />
      <div className='container'>
        <TextForm heading="Enter text for analysis" setAlert = {setAlert}/>
      </div>
      <br />
      <button type="button" className="btn btn-dark" id='lightDarkMode' onClick={changeLightDarkMode}>{text}</button>
      <div className="container">
        <Alert message = {alert}/>
      </div>
    </>
  );
}

export default App;
