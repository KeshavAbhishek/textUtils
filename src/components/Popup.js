import React from 'react'

export default function Popup(props) {
    return (
        <>
            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => {
                var txt = props.text;
                var a = txt;
                var b = txt.split(/\s+/).filter((element) => { return element.length !== 0 });
                if (b.length > 0) {
                    props.setData(`${a.length} characters & ${b.length} words.`);
                    console.log(txt,a.length, b.length);
                }
                else {
                    props.setData('Text box is Empty.');
                }
            }}>
                {props.name}
            </button>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Characters and Words</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {props.data}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
