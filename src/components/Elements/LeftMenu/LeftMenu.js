import React, {Fragment} from 'react';
import './style.css';
import iconSearch from '../../../assets/image/icon/Ellipse_1.png'
import iconPlus from '../../../assets/image/icon/plus.png'
import iconSettings from '../../../assets/image/icon/settings.png'
import iconUser from '../../../assets/image/icon/Layer_7.png'

function handleClickSearch() {
    alert(`Don't Work Now`)
}

function handleClickPlus() {
    alert(`Don't Work Now`)
}

function handleClickSettings() {
    alert(`Don't Work Now`)
}

function handleClickUser() {
    alert(`Don't Work Now`)
}

export const LeftMenu = () => (
    <Fragment>
        <div className='leftMenu'>
            <div className='leftMenu_items'>
                <div className='leftMenu_item' onClick={handleClickSearch}>
                    <img src={iconSearch} alt="img"/>
                </div>
                <div className='leftMenu_item' onClick={handleClickPlus}>
                    <img src={iconPlus} alt="img"/>
                </div>
                <div className='leftMenu_item' onClick={handleClickSettings}>
                    <img src={iconSettings} alt="img"/>
                </div>
                <div className='user' onClick={handleClickUser}>
                    <img src={iconUser} alt="img"/>
                </div>

            </div>
        </div>

    </Fragment>
);

