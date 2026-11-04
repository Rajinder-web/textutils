import React,{useState } from 'react'

export default function TextForm(props) {
     const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleClick=()=>{
        let newText= text.toUpperCase();
        setText(newText);
        if(newText.length===0){
            props.showAlert('No text to convert!', 'warning');
            return;
        }
        props.showAlert('Converted to uppercase!', 'success');
    }
    
     const handleLoClick=()=>{
        let newText1= text.toLowerCase();
        setText(newText1);
        if(newText1.length===0){
            props.showAlert('No text to convert!', 'warning');
            return;
        }
        props.showAlert('Converted to lowercase!', 'success');
    } 
    const handleClearText=()=>{
        setText('');
        if(text.length===0){
            props.showAlert('No text to clear!', 'warning');
            return;
        } 
        props.showAlert('Text Cleared!', 'success');
    }   
    const handleCopyText=()=>{
        navigator.clipboard.writeText(text);
        if(text.length===0){
            props.showAlert('No text to copy!', 'warning');
            return;
        }
        props.showAlert('Copied to clipboard!', 'success');
    } 
    const handleRemoveExtraSpacce=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        if(text.length===0){
            props.showAlert('No text to remove extra spaces!', 'warning');
            return;
        }
        props.showAlert('Extra spaces removed!', 'success');
    }         
    const [text, setText] = useState('Enter Text Here!');
  return (
    <>
      
      <h2 style={{ color: props.mode === 'light' ? 'black' : 'white' }}>{props.heading}</h2>
      <div className="container">
        <div className="form-field">
          <textarea className="form-control" id="myBox" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'gray', color: props.mode === 'light' ? 'black' : 'white' }}  value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className='btn btn-primary my-3 mx-2' onClick={handleClick}>Convert To UpperCase</button>
        <button className='btn btn-primary my-3 mx-2' onClick={handleLoClick}>Convert To LowerCase
        </button>
        <button className='btn btn-primary my-3 mx-2' onClick={handleCopyText}>CopyText</button>
        <button className='btn btn-primary my-3 mx-2' onClick={handleRemoveExtraSpacce}>Remove Extra Spaces</button>
        <button className='btn btn-primary my-3 mx-2' onClick={handleClearText}>ClearText</button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h1>Your Text Summary</h1>
        <p>{text.length > 0 ? text.split(" ").length : 0} words and {text.length} characters</p>
        <p>{0.008 * (text.length > 0 ? text.split(" ").length : 0)} minutes read</p>
        <p>Preview</p>
        <p>{text.length > 0 ? text : 'Enter text to preview'}</p>
      </div>
    </>
  )
}
