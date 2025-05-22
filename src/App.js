import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Textutils" about="About" />
      
      {/* <div className="container my-3">
        <TextForm heading="Enter the text to analize" />
      </div> */}

      <About/>
    </>
  );
}

export default App;

//<></>this is a jsx or React fragment which allows you to return multiple elements
