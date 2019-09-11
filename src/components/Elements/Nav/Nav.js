import React, {Fragment} from 'react';
import './style.css';

export const Nav = () => {
    return (
        <Fragment>
            <div className='nav'>
                <div className='nav_left'>
                    <div className='nav_left_items'>
                        <div className='nav_left_item'>
                            <p>Main</p>
                        </div>
                        <div className='nav_left_item'>
                            <p>APPS</p>
                        </div>
                        <div className='nav_left_item'>
                            <p>Downloaded</p>
                        </div>
                        <div className='nav_left_item'>
                            <p>Support</p>
                        </div>
                    </div>
                </div>
                <div className='nav_right'>

                </div>
            </div>
        </Fragment>
    )
};