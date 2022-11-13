import React, { useState } from 'react'
import './index.css'


const Avatar = ({ name }) => {
    const colorArr = ['#f4511e', '#ff3b30', '#4cd964', '#2196f3', '#ffcc00', '#9c27b0', '#673ab7', '#5ac8fa', '#009688', '#cddc39', '#ff6b22', '#8e8e93']
    const [color, setColor] = useState(colorArr[Math.floor(Math.random() * colorArr.length)])
    return (
        <div id="container" style={{ backgroundColor: color }}>
            <div id="name">
                {name[0]}
            </div>
        </div>
    )
}

export default Avatar