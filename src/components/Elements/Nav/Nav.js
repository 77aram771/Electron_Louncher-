import React, {Fragment} from 'react';
import './style.css';

export const Nav = () => {
    return (
        <Fragment>
            <div className='nav'>
                <div className='nav_left'>
                    <div className='nav_left_items'>
                        <div className='nav_left_item_active'>
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
                    <div className='nav_right_search_box'>
                        <div className='nav_right_search'>
                            <label htmlFor="search">
                                <input
                                    id='search'
                                    type="text"
                                    placeholder='Find or start a conversation'
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};