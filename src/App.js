import './App.css';

import React from 'react';
import { BrowserRouter, useHistory } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Router from './routes/Router';

function App() {
    return (
        <div className="container-fluid">
            <BrowserRouter history={useHistory}>
                <Header />
                <Router />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
