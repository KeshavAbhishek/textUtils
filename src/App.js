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
  const showAlert = (message, typof)=>{
    setAlert({"message" : message, "typof": typof});
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const styleHeadingDark = {
    "color": "white"
  }

  const textAreaStyleDark = {
    "background" : "#0b1328",
    "color": "#fff"
  }

  const themeButtonDark = {
    "background" : "#fff",
    "color" : "#000"
  }

  const styleHeadingLight = {
    "color": "#000"
  }

  const textAreaStyleLight = {
    "background" : "#fff",
    "color": "#000"
  }

  const themeButtonLight = {
    "background" : "#000",
    "color" : "#fff"
  }

  const styleAlignClicked = {
    "transform": "translateX(-9rem)"
  }

  const styleAlignUnclicked = {
    "right": "-9rem"
  }


  const [themeButtonStyle, setThemeButtonStyle] = useState(themeButtonLight);
  const [themeAboutHeading, setThemeAboutHeading] = useState(styleHeadingLight);
  const [themeTextArea, setThemeTextArea] = useState(textAreaStyleLight);


  const [styleAlign, setStyleAlign] = useState(styleAlignUnclicked);

  const changeLightDarkMode = () => {
    if (mode === 0) {
      document.getElementById('root').style.background = '#06446b';
      setThemeButtonStyle(themeButtonDark);
      setThemeAboutHeading(styleHeadingDark);
      setThemeTextArea(textAreaStyleDark);
      setMode(1);
      setText('Enable Light Mode');
      showAlert("Dark Mode Enabled", "success");
      document.querySelector("#aligns").style.filter = "invert(1)";
    }
    else {
      document.getElementById('root').style.background = '#fff';
      setThemeButtonStyle(themeButtonLight);
      setThemeAboutHeading(styleHeadingLight);
      setThemeTextArea(textAreaStyleLight);
      setMode(0);
      setText('Enable Dark Mode');
      showAlert("Dark Mode Disabled", "success");
      document.querySelector("#aligns").style.filter = "invert(0)";
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Text Utils" />
        <br />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter text for analysis" showAlert={showAlert} style = {themeTextArea} styleheading = {themeAboutHeading}/>} />
            <Route exact path="/about" element={<About style={themeAboutHeading} />} />
          </Routes>
        </div>
        {/* <br /> */}
        <button type="button" className="btn" id="lightDarkMode" onClick={changeLightDarkMode} style={themeButtonStyle}>
          {text}
        </button>
        <Alert message={alert} />
        <div id='aligns' style={styleAlign}>
          <ul>
          <i class="fa-solid fa-arrow-left" onClick={()=>{
            setStyleAlign(styleAlignClicked);
          }}></i>
          <i className="fa-solid fa-align-left" onClick={()=>{
            setStyleAlign(styleAlignUnclicked);
            document.querySelector('textarea').style.textAlign='left';
            showAlert("Left aligned successfully", "success");
          }}></i>
          <i className="fa-solid fa-align-center" onClick={()=>{
            setStyleAlign(styleAlignUnclicked);
            document.querySelector('textarea').style.textAlign='center';
            showAlert("Center aligned successfully", "success");
          }}></i>
          <i className="fa-solid fa-align-right" onClick={()=>{
            setStyleAlign(styleAlignUnclicked);
            document.querySelector('textarea').style.textAlign='right';
            showAlert("Right aligned successfully", "success");
          }}></i>
          </ul>
        </div>
      </Router>
    </>
  );
}

export default App;
