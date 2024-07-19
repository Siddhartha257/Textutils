import React ,{useState} from 'react'


export default function TextFrom(props){
    const[text,setText] = useState("");
    const Toupper =() => {
        let newText = text.toUpperCase()
        setText(newText)
    }
    const clearText=()=>{
      setText('')
    }
    const Tolower=()=>{
        let newText=text.toLowerCase()
        setText(newText)
    }
    const Handleonchange=(event)=>{
        setText(event.target.value)
    }
    const Extraspace =()=>{
        let newText = text.replace(/\s+/g, ' ').trim()
        setText(newText)
    }
    return(
        <>
        <div className='container'style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea class="form-control" id="mybox" value={text} onChange={Handleonchange} rows="8" style={{backgroundColor: props.mode==='dark'? '#343a40':'white', color:props.mode==='dark'?'white':'black'}} ></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={Toupper}>Convert to upper case</button>
            <button className='btn btn-primary mx-2' onClick={Tolower}>Convert to lower case</button>
            <button className='btn btn-primary mx-2' onClick={Extraspace}>Remove Extra Spaces</button>
            <button className='btn btn-danger mx-2' onClick={clearText}>Clear Text</button>
        </div>
        <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1> Your text Summary </h1>
            <p>{text.split(" ").length} words {text.length}  characters</p>
            <p>{ text.split(" ").length * 0.08} minutes to read</p>
            <h1>Preview</h1>
            <p>{text}</p>
        </div>
        </>
    )
};