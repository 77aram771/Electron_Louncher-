import React, {Fragment} from 'react';
import '../../../assets/css/Home.css';
import './style.css';
import {Nav} from "../../Elements/Nav/Nav";
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
