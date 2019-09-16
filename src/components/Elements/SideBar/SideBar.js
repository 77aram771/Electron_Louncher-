import React, {Fragment} from 'react';
import './style.css'
import {SideBarDirectMessages} from "./SideBarElements/SideBarDirectMessages/SideBarDirectMessages";
import {SideBarSections} from "./SideBarElements/SideBarSections/SideBarSections";
import arrow from '../../../assets/image/icon/arrow_right.png';

export const SideBar = ({bool, handleChangeBool}) => {
    return (
        <Fragment>
            <div style={ bool ? {
                width: 20 + '%',
                height: 100 + '%',
                position: 'relative'
            }: {
                position: 'relative',
                width: 0,
                height: 100 + '%',
            }}>
                <div className={bool ? 'sidebar' : 'sidebar_z'}>
                    <SideBarSections/>
                    <SideBarDirectMessages/>
                </div>
                <div className={bool ? 'sidebar_button' : 'sidebar_button_z'} onClick={() => handleChangeBool()}>
                    <img src={arrow} alt="arrow"/>
                </div>
            </div>

        </Fragment>
    )
};