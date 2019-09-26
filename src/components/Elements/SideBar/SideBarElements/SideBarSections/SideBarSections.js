import React, {Fragment} from 'react';
import './style.css';
import folderImg from '../../../../../assets/image/icon/folder.png'
import folderImg2 from '../../../../../assets/image/icon/folder2.png'
import libraryImg from '../../../../../assets/image/icon/book.png'
import libraryImg2 from '../../../../../assets/image/icon/book2.png'
import frendsImg from '../../../../../assets/image/icon/friends.png'
import frendsImg2 from '../../../../../assets/image/icon/friends2.png'
import loveImg from '../../../../../assets/image/icon/favorite-heart-button.png'
import loveImg2 from '../../../../../assets/image/icon/favorite-heart-button2.png'
import arrowLeft from '../../../../../assets/image/icon/arrow_left.png'



export const SideBarSections = ({changeSection, changeSection2, num}) => {

    const handleClick = () => {
        alert("Don't work now")
    }

    return (
        <Fragment>
            <div className='SideBarSections'>
                <div className='SideBarSections_items'>
                    <div className={num === 0 ? 'SideBarSections_item active' : 'SideBarSections_item'} onClick={() => changeSection()}>
                        <div className='SideBarSections_item_icon'>
                            <img src={num === 0 ? folderImg : folderImg2} alt="icon"/>
                        </div>
                        <div className='SideBarSections_item_text'>
                            <p>Office Applications</p>
                        </div>
                        <div className='SideBarSections_item_arrow'>
                            <img src={arrowLeft} alt="icon"/>
                        </div>
                    </div>
                    <div className={num === 1 ? 'SideBarSections_item active' : 'SideBarSections_item'} onClick={() => changeSection2()}>
                        <div className='SideBarSections_item_icon'>
                            <img src={num === 0 ? libraryImg : libraryImg2} alt="icon"/>
                        </div>
                        <div className='SideBarSections_item_text'>
                            <p>Library</p>
                        </div>
                        <div className='SideBarSections_item_arrow'>
                            <img src={arrowLeft} alt="icon"/>
                        </div>
                    </div>
                    <div className='SideBarSections_item' onClick={() => handleClick()}>
                        <div className='SideBarSections_item_icon'>
                            <img src={frendsImg} alt="icon"/>
                        </div>
                        <div className='SideBarSections_item_text'>
                            <p>Friends</p>
                        </div>
                        <div className='SideBarSections_item_arrow'>
                            <img src={arrowLeft} alt="icon"/>
                        </div>
                    </div>
                    <div className='SideBarSections_item' onClick={() => handleClick()}>
                        <div className='SideBarSections_item_icon'>
                            <img src={loveImg} alt="icon"/>
                        </div>
                        <div className='SideBarSections_item_text'>
                            <p>Favourites</p>
                        </div>
                        <div className='SideBarSections_item_arrow'>
                            <img src={arrowLeft} alt="icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};
