import React, {Fragment} from 'react';
import './style.css';

export const UserRadio = ({img}) => {
    const handleClickUser = () => {
        alert(`Don't Work Now`)
    };
    return (
        <Fragment>
            <div className='user' onClick={handleClickUser}>
                <img src={img} alt="img"/>
            </div>
        </Fragment>
    )
};
