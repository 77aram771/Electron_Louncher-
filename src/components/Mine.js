import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../assets/css/Home.css';

const Mine = () => (
    <div>
        <Jumbotron>
            <h1 className="display-3">MIne</h1>
            <Link to="/help">More Info</Link>
        </Jumbotron>
    </div>
);

export default Mine;
