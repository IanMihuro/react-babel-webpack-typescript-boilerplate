import React from 'react';
import ReactDOM from 'react-dom';

export default function App(): JSX.Element {
    function sum(a:number, b:number): number {
        return a + b;
    }
    return (
        <div>
            <h1>Hello</h1>
            <h2>{sum(11, 12)}</h2>
        </div>
    )
}

const root = document.getElementById('app-root');
ReactDOM.render(<App />, root);
