import React from 'react';
import Home from './Page/Home/Home';
import Mine from './Page/Mine/Mine';
import Help from './Page/Help/Help';
import {MemoryRouter, Switch, Route} from 'react-router';
import '../assets/css/global.css'

const App = () => (
    <MemoryRouter>
        <Switch>
            <Route path="/mine" component={Mine}/>
            <Route path="/help" component={Help}/>
            <Route path="/" component={Home}/>
        </Switch>
    </MemoryRouter>
);

export default App;
