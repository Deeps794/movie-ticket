import React from 'react';

import Dashboard from './DashboardComponent';
import Main from './MainComponent';

function Home() {
    return (
        <div className="container-fluid">
            <Dashboard />
            <Main />
        </div>
    );
}

export default Home;