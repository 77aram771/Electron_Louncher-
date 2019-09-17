import React, {Fragment} from 'react'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import exelImg from '../../../assets/image/exelImg.png'
import './style.css';
import {StoreUi} from "../../UI/Store/StoreUi";

export const DashboardSection = ({bool}) => {

    const handleClick = () => {
        alert("Don't Work Now")
    };

    return (
        <Fragment>
            <div className={bool ? 'DashboardSection' : 'DashboardSection_z'}>
                <Tabs className="DashboardSection_tabs">
                    <TabList className='DashboardSection_tabList'>
                        <Tab className='DashboardSection_tab_active'>
                            <span>Microsoft Excel</span>
                        </Tab>
                        <Tab className='DashboardSection_tab'>
                            <span>Microsoft Word</span>
                        </Tab>
                        <Tab className='DashboardSection_tab'>
                            <span>Outlook</span>
                        </Tab>
                        <Tab className='DashboardSection_tab'>
                            <span>Lore</span>
                        </Tab>
                    </TabList>

                    <TabPanel className='DashboardSection_TabPanel'>
                        <h2>Any content 1</h2>
                        <div className='DashboardSection_TabPanel_box'>
                            <div className='DashboardSection_TabPanel_box_items'>
                                <div className='DashboardSection_TabPanel_box_item'
                                    onClick={() => handleClick()}
                                >
                                    <img src={exelImg} alt="img"/>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className='DashboardSection_TabPanel_box_item'
                                     onClick={() => handleClick()}
                                >
                                    <img src={exelImg} alt="img"/>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className='DashboardSection_TabPanel_box_item'
                                     onClick={() => handleClick()}
                                >
                                    <img src={exelImg} alt="img"/>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className='DashboardSection_TabPanel_box_item'
                                     onClick={() => handleClick()}
                                >
                                    <img src={exelImg} alt="img"/>
                                    <span>Lorem Ipsum</span>
                                </div>
                                <div className='DashboardSection_TabPanel_box_item'
                                     onClick={() => handleClick()}
                                >
                                    <img src={exelImg} alt="img"/>
                                    <span>Lorem Ipsum</span>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel className='DashboardSection_TabPanel'>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel className='DashboardSection_TabPanel'>
                        <h2>Any content 3</h2>
                    </TabPanel>
                    <TabPanel className='DashboardSection_TabPanel'>
                        <h2>Any content 4</h2>
                    </TabPanel>
                </Tabs>
                <StoreUi/>
            </div>
        </Fragment>
    )
};