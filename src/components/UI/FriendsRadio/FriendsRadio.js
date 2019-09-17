import React, {Fragment} from 'react';
import './style.css';

export const FriendsRadio = ({img, status}) => {


    return (
        <Fragment>
            <div className={status}>
                <img src={img} alt="img"/>
            </div>
        </Fragment>
    )
};
