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
                        if (text) {
                            setText(text.toUpperCase());
                            props.setAlert({ "message": "Converted all to Upper Case", "typof": "success" });
                            setTimeout(() => {
                                props.setAlert(null)
                            }, 2000);
                        }
                        else {
                            props.setAlert({ "message": "No Text Found", "typof": "warning" });
                            setTimeout(() => {
                                props.setAlert(null)
                            }, 2000);
                        }

                    }}>To Upper Case</button>

                    <button className="btn btn-warning" onClick={(e) => {
                        if (text) {
                            setText(text.toLowerCase());
                            props.setAlert({ "message": "Converted all to Lower Case", "typof": "success" });
                            setTimeout(() => {
                                props.setAlert(null)
                            }, 2000);
                        }
                        else {
                            props.setAlert({ "message": "No Text Found", "typof": "warning" });
                            setTimeout(() => {
                                props.setAlert(null)
                            }, 2000);
                        }
                    }}>To Lower Case</button>

                    <Popup name="No. of Char(s) & Word(s)" data={data} text={text} setData={setData} />
                </div>
            </div>
        </>
    )
}