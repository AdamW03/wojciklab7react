import React from 'react';
import '../styles/ReUseComponent.css';

// Zadanie nr 1
function ReusableComponent({ title, content, children }) {
    return (
        <div className="ReusableDiv">
            <h2>{title}</h2>
            <p>{content}</p>
            <div>{children}</div>
        </div>
    );
}

export default ReusableComponent;
