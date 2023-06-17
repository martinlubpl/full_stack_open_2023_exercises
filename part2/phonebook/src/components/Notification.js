import React from 'react'
const notificationStyle = {
    border: '3px solid green',
    borderRadius: '5px',
    padding: 5
}

const Notification = ({ message }) => {
    if (message === null) {
        return null
    }
    return (
        <div style={notificationStyle}>{message}</div>
    )
}

export default Notification