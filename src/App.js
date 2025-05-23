import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React,{useState} from 'react'


function App() {
  const [DarkMode, setDarkMode] = useState('light')

  const Switch= ()=>{
    if(DarkMode==="light"){
      setDarkMode("dark")
      document.body.style.backgroundColor="black"
    }
    else{
      setDarkMode("light")
      document.body.style.backgroundColor="white"
    }
  }

  return (
    <>
      <Navbar title="Textutils" about="About" mode={DarkMode} switchMode={Switch}/>
      
      <div className="container my-3">
        <TextForm heading="Enter the text to analize" mode={DarkMode}/>
      </div>

      {/* <About/> */}
    </>
  );
}

export default App;

//<></>this is a jsx or React fragment which allows you to return multiple elements
