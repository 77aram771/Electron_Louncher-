import React, {Fragment} from 'react';
import './style.css';
import {FriendsRadio} from "../../../../UI/FriendsRadio/FriendsRadio";
import user1 from '../../../../../assets/image/icon/user1.png'
import user2 from '../../../../../assets/image/icon/user2.png'
import user3 from '../../../../../assets/image/icon/user3.png'
import user4 from '../../../../../assets/image/icon/user4.png'
import user5 from '../../../../../assets/image/icon/user5.png'
import user6 from '../../../../../assets/image/icon/user6.png'

export const SideBarDirectMessages = () => {

    const handleClickFriends = () => {
        alert(`Don't Work Now`)
    }

    return (
        <Fragment>
            <div className='SideBarDirectMessages'>
                <div className='SideBarDirectMessages_title'>
                    <p>direct messages</p>
                </div>

                <div className='SideBarDirectMessages_friends'>
                    <div className="SideBarDirectMessages_friend" onClick={handleClickFriends}>
                        <FriendsRadio img={user1} status='friends-red' />
                        <span>Name Suriname</span>
                    </div>
                    <div className="SideBarDirectMessages_friend" onClick={handleClickFriends}>
                        <FriendsRadio img={user2} status='friends-green'/>
                        <span>Name Suriname</span>
                    </div>
                    <div className="SideBarDirectMessages_friend" onClick={handleClickFriends}>
                        <FriendsRadio img={user3} status='friends-red'/>
                        <span>Name Suriname</span>
                    </div>
                    <div className="SideBarDirectMessages_friend" onClick={handleClickFriends}>
                        <FriendsRadio img={user4} status='friends-yellow'/>
                        <span>Name Suriname</span>
                    </div>
                    <div className="SideBarDirectMessages_friend" onClick={handleClickFriends}>
                        <FriendsRadio img={user5} status='friends-green'/>
                        <span>Name Suriname</span>
                    </div>
                    <div className="SideBarDirectMessages_friend" onClick={handleClickFriends}>
                        <FriendsRadio img={user6} status='friends-green'/>
                        <span>Name Suriname</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};