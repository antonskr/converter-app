import React from 'react';
import Layout from './Components/Layout/Layout';
import Converter from './Components/Converter/Converter';

const App = ():JSX.Element => {
    return (
        <Layout>
                <Converter />
        </Layout>
    );
}

export default App;
