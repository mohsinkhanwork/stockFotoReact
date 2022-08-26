import React from 'react';
import ReactDOM from 'react-dom';

function Hello() {
    return (
        <div className="container">
        hello
        </div>
    );
}

export default Hello;

if (document.getElementById('hello')) {
    ReactDOM.render(<Hello />, document.getElementById('hello'));
}
