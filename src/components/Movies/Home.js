import React from 'react';

import Dashboard from './Dashboard';
import Main from './Main';

function Home() {
    return (
        <React.Fragment>
            <Dashboard />
            <Main />
        </React.Fragment>
    );
}

export default Home;