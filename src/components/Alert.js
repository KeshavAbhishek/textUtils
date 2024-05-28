import React from 'react'

function Alert(props) {
    return (
        props.message && <>
            <div className={`alert alert-${props.message["typof"]} alert-dismissible fade show`} role="alert">
                <strong>{props.message["message"]} !</strong>
            </div>
        </>
    )
}

export default Alert