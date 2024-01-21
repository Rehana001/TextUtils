import React,{useState} from "react";


export default function TextForm(props) {
    const handleUpclick=()=>{
        // console.log("Upper case was clicked "+text)
        setText("you have clicked on handle up click "+text);
        let newText= text.toUpperCase(); 
        setText(newText)
        props.showAlert("Converted to Upper case","success")
    }
    const handleOnChange=(event)=>{
        // console.log("On change")
        setText(event.target.value)
    }
    const handleLow=()=>{
        // console.log("Upper case was clicked "+text)
        setText("you have clicked on handle up click "+text);
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower case","success")
    }
    const handleClearText=()=>{
        let newText='';
        setText(newText)
        props.showAlert("Text is cleared","success")
    }
    const handleCopy=()=>{
        var text= document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is Copied to clipboard","success")
    }

const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces are removed from text","success")
}
   
    const[text, setText]= useState("");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'#042743':'white',}}>
      <div className="container" >
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea
          className="form-control"
          onChange={handleOnChange}
          style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}
          value={text}
          id="mybox"
          rows="8"
        ></textarea>
        </div>
        <button className="btn btn-primary mx-1"
        onClick={handleLow}
        >
         Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" 
        onClick={handleUpclick}
        >
         Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" 
        onClick={handleCopy}
        >
         Copy Text
        </button>
        <button className="btn btn-primary mx-1" 
        onClick={handleExtraSpaces}
        >
         Remove extra spaces
        </button>
        <button className="btn btn-primary mx-1" 
        onClick={handleClearText}
        >
         Clear Text
        </button>
      </div>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} Characters </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in textbox to preview it here"}</p>
      </div>
      </div>
      </>
      
  );
}
  