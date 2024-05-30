import React, { useState } from 'react'
import Popup from './Popup';

export default function TextForm(props) {
    const [text, setText] = useState('');
    const [data, setData] = useState('No Data');
    return (
        <>
            <div className="mb-3">
                <h1 id="heading" style={props.styleheading}>{props.heading}</h1>
                <br />
                <textarea className="form-control" value={text} onChange={(e) => {
                    setText(e.target.value);
                }} id="exampleFormControlTextarea1" rows="10" style={props.style} />
                <br />

                <div id="buttons">
                    <button className="btn btn-primary" onClick={(e) => {
                        if (text) {
                            setText(text.toUpperCase());
                            props.showAlert("Converted all to Upper Case", "success");
                        }
                        else {
                            props.showAlert("No Text Found", "warning");
                        }

                    }}>To Upper Case</button>

                    <button className="btn btn-warning" onClick={(e) => {
                        if (text) {
                            setText(text.toLowerCase());
                            props.showAlert("Converted all to Lower Case", "success");
                        }
                        else {
                            props.showAlert("No Text Found", "warning");
                        }
                    }}>To Lower Case</button>

                    <Popup name="No. of Char(s) & Word(s)" data={data} text={text} setData={setData} />
                </div>
            </div>
        </>
    )
}