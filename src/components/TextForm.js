import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleRevClick = () => {
        let newText = text.split("").reverse().join("");
        setText(newText);
        props.showAlert("String is Reverse","success");
    }
    const handleClearClick = () => {
        let newText ='';
        setText(newText);
        props.showAlert("Text is Cleared","success");
    }
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value)
    }
    const handleCopy = (event) =>{
        var text= document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copy to Clipbord","success");
    }
    const [text, setText] = useState('');

    return (
        <>
            <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'rgb(63 63 147)':'white', color : props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRevClick}>String Reverse</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}> Copy </button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
            </div>
            <div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
                <h2>Your text summery</h2>
                <p>{text.split(" ").filter((elements)=>{return elements.length!==0}).length} Words And , {text.length} Charaters</p>
                <p>{0.008 * text.split(" ").filter((elements)=>{return elements.length!==0}).length} Minutes to read</p>
                <h2>Priview</h2>
                <p>{text.length>0?text:"Nothing To Priview"}</p>
            </div>
        </>
    )
}
