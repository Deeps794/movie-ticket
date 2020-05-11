import './App.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Router from './Routes/Router';

function App() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <Header />
                <Router />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
