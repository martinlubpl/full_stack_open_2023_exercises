import React from 'react'
const errorStyle = {
    border: '3px solid red',
    borderRadius: '5px',
    padding: 5
}

export const ErrorMessage = ({message}) => {
    if (message === null) {
        return null
    }
    return (
        <div style={errorStyle}>{message}</div>
    )
}

export default ErrorMessage