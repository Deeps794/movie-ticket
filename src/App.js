import './App.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';


import Header from './components/Core/Header';
import Footer from './components/Core/Footer';
import Router from './routes/Router';

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
