import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import Router from './routes/Router';

function App() {

    const header = document.getElementById('header');
    const headerHeight = header ? header.clientHeight : 0;

    return (
        <BrowserRouter>
            <Header />
            <div className='container-fluid' style={{ paddingTop: '74px', paddingBottom: '51px' }}>
                <Router />
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
