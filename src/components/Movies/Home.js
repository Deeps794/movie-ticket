import React from 'react';

import Dashboard from './Dashboard';
import Main from './Main';

function Home() {
    return (
        <div className="container-fluid">
            <Dashboard />
            <Main />
        </div>
    );
}

export default Home;