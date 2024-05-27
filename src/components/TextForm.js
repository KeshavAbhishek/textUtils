import React, { useState } from 'react'
import Popup from './Popup';

export default function TextForm(props) {
    const [text, setText] = useState('');
    const [data, setData] = useState('No Data');
    return (
        <>
            <div className="mb-3">
                <h1 id="heading">{props.heading}</h1>
                <br />
                <textarea className="form-control" value={text} onChange={(e) => {
                    setText(e.target.value);
                }} id="exampleFormControlTextarea1" rows="10" />
                <br />
                
                <div id="buttons">
                    <button className="btn btn-primary" onClick={(e) => {
                        setText(text.toUpperCase());
                    }}>To Upper Case</button>

                    <button className="btn btn-warning" onClick={(e) => {
                        setText(text.toLowerCase());
                    }}>To Lower Case</button>

                    <Popup name = "No. of Char(s) & Word(s)" data={data} text = {text} setData = {setData}/>
                </div>
            </div>
        </>
    )
}