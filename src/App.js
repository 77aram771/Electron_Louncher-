import React from 'react';
import '../assets/css/global.css'
import Routers from "./components/App";
import Default from "./components/examples/default";

const App = () => (
    <Default>
        <Routers/>
    </Default>
);

export default App;
