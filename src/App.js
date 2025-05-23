import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [DarkMode, setDarkMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const Switch = () => {
    if (DarkMode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "black";
      AlertMsg("Dark mode has been enabled");
      document.title = "TextUtils - DarkMode";
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      AlertMsg("Light mode has been enabled");
      document.title = "TextUtils - Home";
    }
  };

  const secSwitch = () => {
    if (DarkMode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#091723";
      AlertMsg("Blue mode has been enabled");
      document.title = "TextUtils - BlueMode";
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      AlertMsg("Light mode has been enabled");
      document.title = "TextUtils - Home";
    }
  };

  const AlertMsg = (message) => {
    setAlert(message);
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar title="Textutils" about="About" mode={DarkMode} switchMode={Switch} secondSwitch={secSwitch}/>

        <Alert alert={alert} />
        
        <Routes>
          <Route path="/about" element={<About />}>
          </Route>
          
          <Route path="/" element={
              <div className="container my-3">
                <TextForm
                  heading="Enter the text to analize"
                  mode={DarkMode}
                  AlertMsg={AlertMsg}
                />
              </div>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

//<></>this is a jsx or React fragment which allows you to return multiple elements
