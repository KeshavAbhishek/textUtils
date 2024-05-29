import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert'
import About from './components/About';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState(0);
  const [text, setText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);
  const changeLightDarkMode = () => {
    if (mode === 0) {
      document.getElementById('root').style.background = '#06446b';
      document.querySelector("#heading").style.color = "white";
      document.querySelector("#exampleFormControlTextarea1").style.background = "#0b1328";
      document.querySelector("#exampleFormControlTextarea1").style.color = "#fff";
      document.querySelector("#lightDarkMode").style.background = "#fff";
      document.querySelector("#lightDarkMode").style.color = "#000";
      setMode(1);
      setText('Enable Light Mode');
      setAlert({ "message": "Dark Mode Enabled", "typof": "success" });
      setTimeout(() => {
        setAlert(null)
      }, 2000);
    }
    else {
      document.getElementById('root').style.background = '#fff';
      document.querySelector("#heading").style.color = "#000";
      document.querySelector("#exampleFormControlTextarea1").style.background = "#fff";
      document.querySelector("#exampleFormControlTextarea1").style.color = "#000";
      document.querySelector("#lightDarkMode").style.background = "#000";
      document.querySelector("#lightDarkMode").style.color = "#fff";
      setMode(0);
      setText('Enable Dark Mode');
      setAlert({ "message": "Dark Mode Disabled", "typof": "success" });
      setTimeout(() => {
        setAlert(null)
      }, 2000);
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Text Utils" />
        <br />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter text for analysis" setAlert={setAlert} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <br />
        <button type="button" className="btn btn-dark" id="lightDarkMode" onClick={changeLightDarkMode}>
          {text}
        </button>
        <Alert message={alert} />
      </Router>
    </>
  );
}

export default App;
