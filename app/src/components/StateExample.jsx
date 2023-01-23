import { useState } from "react";

function StateExample() {
    // Example of React State
    const [count, setCount] = useState(0);

    // Example of interacting with state
    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>Increment Counter</button>
        </div>
    )
}

export default StateExample;