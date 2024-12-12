import React from 'react'
import { useState } from 'react'

    const ClassStates = () => {
        let textLabel = "Click me";
    return (
        <div>
            <Button>{textLabel}</Button>
        </div>
    )
    }
    
    const Button = (props) => {
        const [texto, setTexto] = useState(props.children);
        // let texto = props.children
        function handleClick() {
            console.log("Click!");
            setTexto("Clickeado");
        }

        return (
            <button onClick={handleClick}>
                {texto}
            </button>
        )
    }

    // https://stackblitz.com/edit/stackblitz-starters-bavnxq?file=src%2FApp.js

export default ClassStates