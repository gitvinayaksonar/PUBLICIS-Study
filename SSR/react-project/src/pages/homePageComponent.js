import React from 'react'

export default function Home() {
    const onButtonClick = () => {
        console.log(" u clicked ");
    }
    return (
        <div>
            <h1> Home Page </h1>
            <p> Created by Vinayak Sonar</p>
            <p>Good to go...</p>
            <button onClick = {onButtonClick}> Click me</button>
        </div>
    )
}
