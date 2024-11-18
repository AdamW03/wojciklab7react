import React, { useRef } from 'react';
import '../styles/TestUseRef.css';

// Zadanie nr 2
function TestUseRef() {
    const sectionRef = useRef(null);

    const scrollToSection = () => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="container">
            <h1>Użycie useRef w React</h1>
            <button onClick={scrollToSection} className="scroll-button">
                Przewiń do sekcji
            </button>

            <div style={{ height: '150vh' }}>
                <p>Kliknij aby przewinąć w dół.</p>
            </div>

            {/* Sekcja, do której chcemy przewinąć */}
            <div ref={sectionRef} className="target-section">
                <h2>Jestem sekcją docelową!</h2>
                <p>Tu dotarliśmy po kliknięciu w przycisk.</p>
            </div>
        </div>
    );
}

export default TestUseRef;
