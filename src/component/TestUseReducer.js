import React from 'react';
import { useReducer } from 'react';
import '../styles/TestUseReducer.css';

// Zadanie nr 2
const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

function TestUseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="container">
            <h1 className="heading">Licznik: {state.count}</h1>
            <button className="button increment" onClick={() => dispatch({ type: 'increment' })}>Zwiększ</button>
            <button className="button decrement" onClick={() => dispatch({ type: 'decrement' })}>Zmniejsz</button>
        </div>
    );
}

export default TestUseReducer;
