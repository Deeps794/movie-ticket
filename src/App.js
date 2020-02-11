import './App.css';

import React from 'react';

import Footer from './components/FooterComponent';
import Header from './components/HeaderComponent';
import Router from './routes/Router';

function App() {
    return (
        <div className="container-fluid">
            <Header/>
            <Router/>
            <Footer/>
        </div>
    );
}

export default App;
