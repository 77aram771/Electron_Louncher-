import React, {Fragment} from 'react'
import './style.css';

export const DashboardSection = ({bool}) => {
    return (
        <Fragment>
            <div className={bool ? 'DashboardSection' : 'DashboardSection_z'}>
                <p>Text</p>
            </div>
        </Fragment>
    )
};