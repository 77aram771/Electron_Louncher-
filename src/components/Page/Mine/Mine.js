import React, {Fragment} from 'react';
import {Jumbotron} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../../../assets/css/Home.css';
import './style.css';
import {Nav} from "../../Elements/Nav/Nav";

const Mine = () => (
    <Fragment>
        <div className='mine'>
            <Nav/>
        </div>
    </Fragment>
);

export default Mine;
