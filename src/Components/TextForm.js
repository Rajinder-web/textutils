import React,{useState } from 'react'

export default function TextForm(props) {
     const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleClick=()=>{
        let newText= text.toUpperCase();
        setText(newText);
    }
    
     const handleLoClick=()=>{
        let newText1= text.toLowerCase();
        setText(newText1);
    } 
    const handleClearText=()=>{
        setText('');
    }
   
    const [text, setText] = useState('Enter Text Here!');
  return (
    <>
    <h1>{props.heading}</h1>
    <div className="container">
      <div className="form-field">
  <label htmlFor="myBox" className="form-label">Example textarea</label>
  <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="5"></textarea>
</div>
<button className='btn btn-primary my-3 mx-2' onClick={handleClick}>Convert To UpperCase</button>
<button className='btn btn-primary my-3 mx-2' onClick={handleLoClick}>Convert To LowerCase</button>
<button className='btn btn-primary my-3 mx-2' onClick={handleClearText}>ClearText</button>
    </div>
<div className="container my-3">
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} minutes read</p>

 <p>Preview</p>
    <p>{text}</p>
    
</div>
    </>
  )
}
