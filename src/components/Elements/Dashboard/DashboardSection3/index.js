import '@babel/polyfill';
import React, {Fragment, useState} from 'react';
import './style.css';
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import MessIcon from "../../../../assets/image/mess.png";
import MorIcon from "../../../../assets/image/menu_(1).png";
import {FriendsRadio} from "../../../UI/FriendsRadio/FriendsRadio";
import user1 from "../../../../assets/image/icon/user1.png";
import BlockIcon from "../../../../assets/image/block.png";

export default class DashboardSection3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tabIndex: 0};
    }

    render() {
        return (
            <Fragment>
                <div className={this.props.bool ? 'DashboardSection' : 'DashboardSection_z'}>
                    <Tabs className="DashboardSection3_tabs" selectedIndex={this.state.tabIndex}
                          onSelect={tabIndex => this.setState({tabIndex})}>
                        <TabList className='DashboardSection3__tabList'>
                            <Tab
                                className={this.state.tabIndex === 0 ? 'DashboardSection3_tab_active' : 'DashboardSection3_tab'}>
                                <span>Online</span>
                            </Tab>
                            <Tab
                                className={this.state.tabIndex === 1 ? 'DashboardSection3_tab_active' : 'DashboardSection3_tab'}>
                                <span>All</span>
                            </Tab>
                            <Tab
                                className={this.state.tabIndex === 2 ? 'DashboardSection3_tab_active' : 'DashboardSection3_tab'}>
                                <span>Blocked</span>
                            </Tab>
                            <Tab
                                className={this.state.tabIndex === 3 ? 'DashboardSection3_tab_active' : 'DashboardSection3_tab'}>
                                <span>Add Friends</span>
                            </Tab>
                        </TabList>
                        <TabPanel className='DashboardSection_TabPanel'>
                            <div className='DashboardSection3Online'>
                                <div className='DashboardSection3OnlineItems'>
                                    <div className='DashboardSection3OnlineItem'>
                                        <div className='DashboardSection3OnlineItemFriend'>
                                            <FriendsRadio img={user1} status='friends-green'/>
                                            <span>Name Suriname</span>
                                        </div>
                                        <div className='DashboardSection3OnlineItemButton'>
                                            <div className='DashboardSection3OnlineItemMess'
                                                 onClick={() => {
                                                     alert("Don't work now")
                                                 }}>
                                                <img src={MessIcon} alt="icon"/>
                                            </div>
                                            <div className='DashboardSection3OnlineItemMor'
                                                 onClick={() => {
                                                     alert("Don't work now")
                                                 }}>
                                                <img src={MorIcon} alt="icon"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='DashboardSection3OnlineItem'>
                                        <div className='DashboardSection3OnlineItemFriend'>
                                            <FriendsRadio img={user1} status='friends-green'/>
                                            <span>Name Suriname</span>
                                        </div>
                                        <div className='DashboardSection3OnlineItemButton'>
                                            <div className='DashboardSection3OnlineItemMess'
                                                 onClick={() => {
                                                     alert("Don't work now")
                                                 }}>
                                                <img src={MessIcon} alt="icon"/>
                                            </div>
                                            <div className='DashboardSection3OnlineItemMor'
                                                 onClick={() => {
                                                     alert("Don't work now")
                                                 }}>
                                                <img src={MorIcon} alt="icon"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='DashboardSection3OnlineItem'>
                                        <div className='DashboardSection3OnlineItemFriend'>
                                            <FriendsRadio img={user1} status='friends-green'/>
                                            <span>Name Suriname</span>
                                        </div>
                                        <div className='DashboardSection3OnlineItemButton'>
                                            <div className='DashboardSection3OnlineItemMess'
                                                 onClick={() => {
                                                     alert("Don't work now")
                                                 }}>
                                                <img src={MessIcon} alt="icon"/>
                                            </div>
                                            <div className='DashboardSection3OnlineItemMor'
                                                 onClick={() => {
                                                     alert("Don't work now")
                                                 }}>
                                                <img src={MorIcon} alt="icon"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='DashboardSection3OnlineItem'>
                                        <div className='DashboardSection3OnlineItemFriend'>
                                            <FriendsRadio img={user1} status='friends-green'/>
                                            <span>Name Suriname</span>
                                        </div>
                                        <div className='DashboardSection3OnlineItemButton'>
                                            <div className='DashboardSection3OnlineItemMess'
                                                 onClick={() => {
                                                     alert("Don't work now")
                                                 }}>
                                                <img src={MessIcon} alt="icon"/>
                                            </div>
                                            <div className='DashboardSection3OnlineItemMor'
                                                 onClick={() => {
                                                     alert("Don't work now")
                                                 }}>
                                                <img src={MorIcon} alt="icon"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel className='DashboardSection_TabPanel'>
                            <div className='DashboardSection3Online'>
                                <div className='DashboardSection3OnlineItems'>
                                    <div className='DashboardSection3OnlineItem'>
                                        <div className='DashboardSection3OnlineItemFriend'>
                                            <FriendsRadio img={user1} status='friends-red'/>
                                            <span>Name Suriname</span>
                                        </div>
                                        <div className='DashboardSection3OnlineItemButton'>
                                            <div className='DashboardSection3OnlineItemMess'
                                                 onClick={() => {
                                                     alert("Don't work now")
                                                 }}>
                                                <img src={MessIcon} alt="icon"/>
                                            </div>
                                            <div className='DashboardSection3OnlineItemMor'
                                                 onClick={() => {
                                                     alert("Don't work now")
                                                 }}>
                                                <img src={MorIcon} alt="icon"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='DashboardSection3OnlineItem'>
                                        <div className='DashboardSection3OnlineItemFriend'>
                                            <FriendsRadio img={user1} status='friends-yellow'/>
                                            <span>Name Suriname</span>
                                        </div>
                                        <div className='DashboardSection3OnlineItemButton'>
                                            <div className='DashboardSection3OnlineItemMess'
                                                 onClick={() => {
                                                     alert("Don't work now")
                                                 }}>
                                                <img src={MessIcon} alt="icon"/>
                                            </div>
                                            <div className='DashboardSection3OnlineItemMor'
                                                 onClick={() => {
                                                     alert("Don't work now")
                                                 }}>
                                                <img src={MorIcon} alt="icon"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='DashboardSection3OnlineItem'>
                                        <div className='DashboardSection3OnlineItemFriend'>
                                            <FriendsRadio img={user1} status='friends-green'/>
                                            <span>Name Suriname</span>
                                        </div>
                                        <div className='DashboardSection3OnlineItemButton'>
                                            <div className='DashboardSection3OnlineItemMess'
                                                 onClick={() => {
                                                     alert("Don't work now")
                                                 }}>
                                                <img src={MessIcon} alt="icon"/>
                                            </div>
                                            <div className='DashboardSection3OnlineItemMor'
                                                 onClick={() => {
                                                     alert("Don't work now")
                                                 }}>
                                                <img src={MorIcon} alt="icon"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='DashboardSection3OnlineItem'>
                                        <div className='DashboardSection3OnlineItemFriend'>
                                            <FriendsRadio img={user1} status='friends-green'/>
                                            <span>Name Suriname</span>
                                        </div>
                                        <div className='DashboardSection3OnlineItemButton'>
                                            <div className='DashboardSection3OnlineItemMess'
                                                 onClick={() => {
                                                     alert("Don't work now")
                                                 }}>
                                                <img src={MessIcon} alt="icon"/>
                                            </div>
                                            <div className='DashboardSection3OnlineItemMor'
                                                 onClick={() => {
                                                     alert("Don't work now")
                                                 }}>
                                                <img src={MorIcon} alt="icon"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='DashboardSection3OnlineItem'>
                                        <div className='DashboardSection3OnlineItemFriend'>
                                            <FriendsRadio img={user1} status='friends-green'/>
                                            <span>Name Suriname</span>
                                        </div>
                                        <div className='DashboardSection3OnlineItemButton'>
                                            <div className='DashboardSection3OnlineItemMess'
                                                 onClick={() => {
                                                     alert("Don't work now")
                                                 }}>
                                                <img src={MessIcon} alt="icon"/>
                                            </div>
                                            <div className='DashboardSection3OnlineItemMor'
                                                 onClick={() => {
                                                     alert("Don't work now")
                                                 }}>
                                                <img src={MorIcon} alt="icon"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='DashboardSection3OnlineItem'>
                                        <div className='DashboardSection3OnlineItemFriend'>
                                            <FriendsRadio img={user1} status='friends-green'/>
                                            <span>Name Suriname</span>
                                        </div>
                                        <div className='DashboardSection3OnlineItemButton'>
                                            <div className='DashboardSection3OnlineItemMess'
                                                 onClick={() => {
                                                     alert("Don't work now")
                                                 }}>
                                                <img src={MessIcon} alt="icon"/>
                                            </div>
                                            <div className='DashboardSection3OnlineItemMor'
                                                 onClick={() => {
                                                     alert("Don't work now")
                                                 }}>
                                                <img src={MorIcon} alt="icon"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='DashboardSection3OnlineItem'>
                                        <div className='DashboardSection3OnlineItemFriend'>
                                            <FriendsRadio img={user1} status='friends-green'/>
                                            <span>Name Suriname</span>
                                        </div>
                                        <div className='DashboardSection3OnlineItemButton'>
                                            <div className='DashboardSection3OnlineItemMess'
                                                 onClick={() => {
                                                     alert("Don't work now")
                                                 }}>
                                                <img src={MessIcon} alt="icon"/>
                                            </div>
                                            <div className='DashboardSection3OnlineItemMor'
                                                 onClick={() => {
                                                     alert("Don't work now")
                                                 }}>
                                                <img src={MorIcon} alt="icon"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='DashboardSection3OnlineItem'>
                                        <div className='DashboardSection3OnlineItemFriend'>
                                            <FriendsRadio img={user1} status='friends-green'/>
                                            <span>Name Suriname</span>
                                        </div>
                                        <div className='DashboardSection3OnlineItemButton'>
                                            <div className='DashboardSection3OnlineItemMess'
                                                 onClick={() => {
                                                     alert("Don't work now")
                                                 }}>
                                                <img src={MessIcon} alt="icon"/>
                                            </div>
                                            <div className='DashboardSection3OnlineItemMor'
                                                 onClick={() => {
                                                     alert("Don't work now")
                                                 }}>
                                                <img src={MorIcon} alt="icon"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='DashboardSection3OnlineItem'>
                                        <div className='DashboardSection3OnlineItemFriend'>
                                            <FriendsRadio img={user1} status='friends-green'/>
                                            <span>Name Suriname</span>
                                        </div>
                                        <div className='DashboardSection3OnlineItemButton'>
                                            <div className='DashboardSection3OnlineItemMess'
                                                 onClick={() => {
                                                     alert("Don't work now")
                                                 }}>
                                                <img src={MessIcon} alt="icon"/>
                                            </div>
                                            <div className='DashboardSection3OnlineItemMor'
                                                 onClick={() => {
                                                     alert("Don't work now")
                                                 }}>
                                                <img src={MorIcon} alt="icon"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel className='DashboardSection_TabPanel'>
                            <div className='DashboardSection3Online'>
                                <div className='DashboardSection3OnlineItems'>
                                    <div className='DashboardSection3OnlineItem'>
                                        <div className='DashboardSection3OnlineItemFriend'>
                                            <FriendsRadio img={user1} status='friends-red'/>
                                            <span>Name Suriname</span>
                                        </div>
                                        <div className='DashboardSection3OnlineItemButton'>
                                            <div className='DashboardSection3OnlineItemBlock'
                                                 onClick={() => {
                                                     alert("Don't work now")
                                                 }}>
                                                <img src={BlockIcon} alt="icon"/>
                                            </div>
                                            <div className='DashboardSection3OnlineItemMor'
                                                 onClick={() => {
                                                     alert("Don't work now")
                                                 }}>
                                                <img src={MorIcon} alt="icon"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='DashboardSection3OnlineItem'>
                                        <div className='DashboardSection3OnlineItemFriend'>
                                            <FriendsRadio img={user1} status='friends-red'/>
                                            <span>Name Suriname</span>
                                        </div>
                                        <div className='DashboardSection3OnlineItemButton'>
                                            <div className='DashboardSection3OnlineItemBlock'
                                                 onClick={() => {
                                                     alert("Don't work now")
                                                 }}>
                                                <img src={BlockIcon} alt="icon"/>
                                            </div>
                                            <div className='DashboardSection3OnlineItemMor'
                                                 onClick={() => {
                                                     alert("Don't work now")
                                                 }}>
                                                <img src={MorIcon} alt="icon"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='DashboardSection3OnlineItem'>
                                        <div className='DashboardSection3OnlineItemFriend'>
                                            <FriendsRadio img={user1} status='friends-red'/>
                                            <span>Name Suriname</span>
                                        </div>
                                        <div className='DashboardSection3OnlineItemButton'>
                                            <div className='DashboardSection3OnlineItemBlock'
                                                 onClick={() => {
                                                     alert("Don't work now")
                                                 }}>
                                                <img src={BlockIcon} alt="icon"/>
                                            </div>
                                            <div className='DashboardSection3OnlineItemMor'
                                                 onClick={() => {
                                                     alert("Don't work now")
                                                 }}>
                                                <img src={MorIcon} alt="icon"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel className='DashboardSection_TabPanel'>
                            <h2>Any content 4</h2>
                        </TabPanel>
                    </Tabs>
                </div>
            </Fragment>
        )
    }
};
