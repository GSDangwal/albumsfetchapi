import React from "react";
import randomColor from "randomcolor";
import { useState } from "react";

const Rendom = () => {
    const [color, setColor] = useState(randomColor());

    const Handle = () => {
        setColor(
            randomColor()
        )
    }

    return (<>
        <body style={{ backgroundColor: color, width: 100, height: 100 }} onMouseOver={Handle} ></body>

    </>);
}

export default Rendom;