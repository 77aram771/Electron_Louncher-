import React, {Fragment, useState} from 'react';
import './style.css';
import {SideBar} from "../SideBar/SideBar";
import DashboardSection from "../DashboardSection/DashboardSection";
import DashboardSection2 from "../DashbordSection2";

export const Dashboard = () => {
    const [bool, setBool] = useState(true);
    const [num, setNum] = useState(0);
    const handleChangeBool = () => {
        setBool(!bool);
        console.log(bool)
    };

    const changeDashbord = () => {
        setNum(0)
    }
    const changeDashbord2 = () => {
        setNum(1)
    }
    // const changeDashbord = () => {
    //     setNum(2)
    // }
    // const changeDashbord = () => {
    //     setNum(3)
    // }

    return (
        <Fragment>
            <div className='dashboard'>
                <SideBar
                    handleChangeBool={handleChangeBool}
                    bool={bool}
                    changeSection={changeDashbord}
                    changeSection2={changeDashbord2}
                    num={num}
                />
                {
                    num === 0 ? <DashboardSection bool={bool}/> : null
                }
                {
                    num === 1 ? <DashboardSection2 bool={bool}/> : null
                }


            </div>
        </Fragment>
    )
};
