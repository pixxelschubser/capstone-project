import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from 'components';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './Styles/GlobalStyles';

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles />
        <Router>
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
