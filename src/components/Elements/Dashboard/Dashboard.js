import React, {Fragment, useState} from 'react';
import './style.css';
import {SideBar} from "../SideBar/SideBar";
import {DashboardSection} from "../DashboardSection/DashboardSection";

export const Dashboard = () => {

    const [bool, setBool] = useState(true);

    const handleChangeBool = () => {
        setBool(!bool);
        console.log(bool)
    };


    return (
        <Fragment>
            <div className='dashboard'>
                <SideBar handleChangeBool={handleChangeBool} bool={bool}/>
                <DashboardSection bool={bool}/>
            </div>
        </Fragment>
    )
};