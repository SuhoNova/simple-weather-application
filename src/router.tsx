import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import App from './App'
import { Header } from './components/Header';
import './css/styles.css';

export const AppRouter: React.StatelessComponent<{}> = () => {
    return (

        <BrowserRouter>
            <div>
                <Header />
                <App />
            </div>
        </BrowserRouter>

    );
}