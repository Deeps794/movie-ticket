import './App.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Footer from './components/FooterComponent';
import Header from './components/HeaderComponent';
import Router from './routes/Router';

function App() {
    return (
        <div className="container-fluid">
            <Header />
            <BrowserRouter>
                <Router />
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
