import React,{useState} from "react";

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    
    const UpperCase= ()=>{
       let upperCase=text.toUpperCase();
       setText(upperCase);
    }
    
    const handleOnchange= (event)=>{
        setText(event.target.value);
    }

    return (
        <div>
        <h1>
          {props.heading}
        </h1>
      <div className="mb-3">
        <textarea className="form-control" onChange={handleOnchange} value={text} id="exampleFormControlTextarea1" rows="8">

        </textarea>
      </div> 
      <button className="btn btn-primary" onClick={UpperCase}>Convert to UpperCase</button>
    </div>
  );
}
