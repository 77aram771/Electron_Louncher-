import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../assets/css/Home.css';

const Home = () => (
  <div>
    <Jumbotron>
      <h1 className="display-3">asd, Electron-React-Router!</h1>
      <p className="lead">This is an example for an Electron React Router Boilerplate.</p>
      <Link to="/mine">More Info</Link>
    </Jumbotron>
  </div>
);

export default Home;
