import React, {Fragment, useState} from 'react'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {Button, ModalHeader, ModalBody, ModalFooter, Table} from 'reactstrap';
import Modal from 'react-modal';
import exelImg from '../../../assets/image/exelImg.png'
import './style.css';
import {StoreUi} from "../../UI/Store/StoreUi";
import ExcelReader from "../ExcelReader/ExcelReader";


export const DashboardSection = ({bool}) => {

    const [files, useFile] = useState([]);
    const [modalIsOpen, useModal] = useState(false);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '100%',
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'red'
        }
    };

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)

    const openModal = () => {
        useModal(true)
    };
    const closeModal = () => {
        useModal(false)
    };
    const AddFile = (file) => {

        useFile([...file]);
        console.log('files', files);
        console.log('file', file);
        const ex = JSON.stringify(files, null, 2);
        console.log('ex', ex)
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
                        {/*<div className='DashboardSection_TabPanel_box'>
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
                        </div>*/}
                        <div>
                            <button onClick={openModal}>Open Modal</button>
                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={closeModal}
                                style={customStyles}
                                contentLabel="Example Modal"
                            >

                                <h2>Hello</h2>
                                <button onClick={closeModal}>close</button>
                                <div>
                                    {
                                        files.map((item, index) => {
                                            //console.log('item', item)
                                            return (
                                                <div key={index}>
                                                    <p>{item.Date}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </Modal>
                        </div>
                        <ExcelReader add={AddFile}/>
                        <button onClick={() => console.log(files)}>Click</button>
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
