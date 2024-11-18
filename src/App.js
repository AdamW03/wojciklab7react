import React from 'react';
import './App.css';
import ReUseComponent from "./component/ReUseComponent";
import TestUseState from "./component/TestUseState";
import TestUseReducer from "./component/TestUseReducer";
import TestUseEffect from "./component/TestUseEffect";
import TestUseContext from "./component/TestUseContext";
import TestUseRef from "./component/TestUseRef";

function App() {
    return (
        <div className="App">
            {/*Zadanie nr 1*/}
            <ReUseComponent  title="Zadanie 1">
                <ReUseComponent title="Pierwszy komponent" content="To jest pierwszy komponent.">
                    <button>Przycisk</button>
                </ReUseComponent>

                <ReUseComponent title="Drugi komponent" content="To jest drugi komponent.">
                    <ul>
                        <li>Element 1</li>
                        <li>Element 2</li>
                        <li>Element 3</li>
                    </ul>
                </ReUseComponent>


                <ReUseComponent title="Trzeci komponent" content="To jest trzeci komponent.">
                    <p>Inna zawartość tutaj.</p>
                </ReUseComponent>
            </ReUseComponent>

            {/*Zadanie nr 2*/}
            <ReUseComponent title="Zadanie 2">
                <ReUseComponent title="Test useState">
                    <TestUseState />
                </ReUseComponent>
                <ReUseComponent title="Test useReducer">
                    <TestUseReducer />
                </ReUseComponent>
                <ReUseComponent title="Test useEffect">
                    <TestUseEffect />
                </ReUseComponent>
                <ReUseComponent title="Test useContext">
                    <TestUseContext />
                </ReUseComponent>
                <ReUseComponent title="Test useRef">
                    <TestUseRef />
                </ReUseComponent>
            </ReUseComponent>
        </div>
    );
}

export default App;
