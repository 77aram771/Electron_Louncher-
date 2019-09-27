import React, {Fragment} from 'react';
import '../../../assets/css/Home.css';
import './style.css';
import {Nav} from "../../Elements/Nav/Nav";
import {Index} from "../../Elements/Dashboard";

const Mine = () => (
    <Fragment>
        <div className='mine'>
            <Nav/>
            <Index/>
        </div>
    </Fragment>
);

export default Mine;
