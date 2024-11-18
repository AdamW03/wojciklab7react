import React from 'react';
import { useState } from 'react';

// Zadanie nr 2
function TestUseState() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div>
            <h1>Licznik: {count}</h1>
            <button onClick={increment}>Zwiększ</button>
            <button onClick={decrement}>Zmniejsz</button>
        </div>
    );
}

export default TestUseState;