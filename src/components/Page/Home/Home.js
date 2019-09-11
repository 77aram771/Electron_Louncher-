import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {LeftMenu} from "../../Elements/LeftMenu/LeftMenu";
import Mine from "../Mine/Mine";
import './style.css';
const Home = () => (
    <Fragment>
        <div className='global'>
            <LeftMenu/>
            <Mine/>
        </div>
    </Fragment>
);

export default Home;
