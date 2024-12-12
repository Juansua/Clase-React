import { useState } from "react";

// PROPS
function Button(props) {
    const { color , disabled , children } = props;
    // const displayText = children === undefined ? text : children; // PARA USAR CHILDREN

    const [ isDisable, setIsDisable ] = useState(disabled);
    const [ colorState, setColorState ] = useState(color);
    
    return (
    <button onClick={() => {
        setColorState("orange");
    }}
    // className={`btn-${color}`}
    style={{backgroundColor: colorState}}
    disabled={isDisable}>{children}</button>

    )
}

export default Button;