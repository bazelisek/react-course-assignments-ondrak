import { useState } from "react";
import Output from "./Output";

export default function Greeting() {
    const [changedText, setChangedText] = useState(false);

    function onChange() {
        setChangedText(true);
    }

    return (
        <div>
            <h2>Hello World!</h2>
            {changedText ? <p>Changed!</p> : <Output>It&apos;s good to see you!</Output>}
            <button onClick={onChange}>Change text</button>
        </div>
    );
}