import React, {Fragment, useState} from 'react';
import './style.css';
import {SideBar} from "../SideBar/SideBar";
import DashboardSection from "./DashboardSection/DashboardSection";
import DashboardSection2 from "./DashboardSection2";
import DashboardSection3 from "./DashboardSection3";
import DashboardSection4 from "./DashboardSection4";

export const Index = () => {
    const [bool, setBool] = useState(true);
    const [num, setNum] = useState(0);
    const handleChangeBool = () => {
        setBool(!bool);
        console.log(bool)
    };

    const changeDashboard = () => {
        setNum(0)
    }
    const changeDashboard2 = () => {
        setNum(1)
    }
    const changeDashboard3 = () => {
        setNum(2)
    }
    const changeDashboard4 = () => {
        setNum(3)
    }

    return (
        <Fragment>
            <div className='dashboard'>
                <SideBar
                    handleChangeBool={handleChangeBool}
                    bool={bool}
                    changeSection={changeDashboard}
                    changeSection2={changeDashboard2}
                    changeSection3={changeDashboard3}
                    changeSection4={changeDashboard4}
                    num={num}
                />
                {
                    num === 0 ? <DashboardSection bool={bool}/> : null
                }
                {
                    num === 1 ? <DashboardSection2 bool={bool}/> : null
                }
                {
                    num === 2 ? <DashboardSection3 bool={bool}/> : null
                }
                {
                    num === 3 ? <DashboardSection4 bool={bool}/> : null
                }
            </div>
        </Fragment>
    )
};
