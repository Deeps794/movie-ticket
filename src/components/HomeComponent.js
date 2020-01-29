import React from 'react';
import Dashboard from './DashboardComponent';
import Header from './HeaderComponent';
import Main from './MainComponent';

function Home() {
    return (
        <div className="container-fluid">
            <Header />
            <Dashboard />
            <Main />
        </div>
    );
}

export default Home;