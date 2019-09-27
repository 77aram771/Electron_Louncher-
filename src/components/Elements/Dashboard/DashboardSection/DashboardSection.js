import '@babel/polyfill';
import React, {Fragment, useState} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import './style.css';
import {StoreUi} from "../../../UI/StoreUI/StoreUi";
import Excel from "../../Excel";

export default class DashboardSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tabIndex: 0};
    }

    render() {
        return (
            <Fragment>
                <div className={this.props.bool ? 'DashboardSection' : 'DashboardSection_z'}>
                    <Tabs className="DashboardSection_tabs" selectedIndex={this.state.tabIndex}
                          onSelect={tabIndex => this.setState({tabIndex})}>
                        <TabList className='DashboardSection_tabList'>
                            <Tab
                                className={this.state.tabIndex === 0 ? 'DashboardSection_tab_active' : 'DashboardSection_tab'}>
                                <span>Microsoft Excel</span>
                            </Tab>
                            <Tab
                                className={this.state.tabIndex === 1 ? 'DashboardSection_tab_active' : 'DashboardSection_tab'}>
                                <span>Microsoft Word</span>
                            </Tab>
                            <Tab
                                className={this.state.tabIndex === 2 ? 'DashboardSection_tab_active' : 'DashboardSection_tab'}>
                                <span>Outlook</span>
                            </Tab>
                            <Tab
                                className={this.state.tabIndex === 3 ? 'DashboardSection_tab_active' : 'DashboardSection_tab'}>
                                <span>Lorem</span>
                            </Tab>
                        </TabList>
                        <TabPanel className='DashboardSection_TabPanel'>
                            <h2>Any content 1</h2>
                            <Excel/>
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
    }
};
