import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './elements/Main';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);

reportWebVitals();
