import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("");

  const UpperCase = () => {
    let upperCase = text.toUpperCase();
    setText(upperCase);
    props.AlertMsg("Coverted to UpperCase")
  };

  const LowerCase = () => {
    let upperCase = text.toLowerCase();
    setText(upperCase);
    props.AlertMsg("Converted to LowerCase");
  };

  const clearText= ()=>{
    setText("");
    props.AlertMsg("Text Cleared");
  }

  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container"  style={{color:props.mode==="dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" style={{ backgroundColor: props.mode === "light" ? "white" : "grey" , color:props.mode==="light"?"black":"white"}} onChange={handleOnchange} value={text} id="exampleFormControlTextarea1" rows="8">

          </textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={UpperCase}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={LowerCase}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={clearText}>
          Clear Text
        </button>
      <br></br>
      <div className="container my-2">
        <h2>Your Text Summary Here</h2>
        <p>{text.split(" ").length-1} Words, {text.length} Characters</p>

        <h2>Preview</h2>
        <p>{text===""?"Enter something above to display here":text}</p>
      </div>
      </div>
    </>
  );
}
