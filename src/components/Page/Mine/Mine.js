import React, {Fragment} from 'react';
import {Jumbotron} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../../../assets/css/Home.css';
import './style.css';
import {Nav} from "../../Elements/Nav/Nav";
import {SideBar} from "../../Elements/SideBar/SideBar";
import {Dashboard} from "../../Elements/Dashboard/Dashboard";

const Mine = () => (
    <Fragment>
        <div className='mine'>
            <Nav/>
            <Dashboard/>
        </div>
    </Fragment>
);

export default Mine;
