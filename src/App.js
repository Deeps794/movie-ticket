import './App.css';

import React from 'react';

import Dashboard from './components/DashboardComponent';
import Header from './components/HeaderComponent';
import Main from './components/MainComponent';

function App() {
    return (
        <div className="container-fluid">
            <Header/>
            <Dashboard />
            <Main/>
        </div>
    );
}

export default App;
