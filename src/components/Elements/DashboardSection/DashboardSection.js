import '@babel/polyfill';
import React, {Fragment, useState} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {OutTable, ExcelRenderer} from 'react-excel-renderer';
import exelImg from '../../../assets/image/exelImg.png'
import uploadImage from '../../../assets/image/icon/u.png'
import delIcon from '../../../assets/image/icon/del.png'
import Modal from 'react-modal';
import './style.css';
import {StoreUi} from "../../UI/Store/StoreUi";

let num = 0;
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

export default class DashboardSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: null,
            cols: null,
            modalIsOpen: false,
            excelArray: [],
            numId: 0
        };
        this.fileInput = React.createRef();
    }

    openModal = () => {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        })
    };

    closeModal = () => {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen,
        })
    };

    deleteItem = (vo, id) => {
        const items = this.state.excelArray.filter(item => item.id !== id);
        this.setState({
            excelArray: items,
        });
    };

    renderFile = (id) => {
        let excel = this.state.excelArray[id].item;
        console.log('Log ::: id :::', id);
        console.log('Log ::: ExcelRenderer :::', ExcelRenderer);
        
        return ExcelRenderer(excel, (err, resp) => {
            if (err) {
                console.log(err);
            } else {
                // this.setState({
                //     cols: resp.cols,
                //     rows: resp.rows,
                // });
                console.log('Log ::: resp :::', resp);
            }
        });
    };

    fileHandler = (event) => {
        event.preventDefault();
        if (event.target.files.length) {
            num++;
            let fileObj = event.target.files[0];
            let fileName = fileObj.name;
            if (fileName.slice(fileName.lastIndexOf('.') + 1) === "xlsx") {
                let newItem = {
                    item: fileObj,
                    id: num
                };
                this.setState((prevState) => ({
                    excelArray: [...prevState.excelArray, ...[newItem]],
                }));
            }
        }
    };

    itemHundler = (id) => {
        console.log('id', id);
        this.setState({
            numId: id
        },
            async () => {
                const fusk = await this.renderFile(this.state.numId);

                this.setState(
                    {...fusk},
                    () => {
                        this.openModal();
                    },
                );
            }
        );
        // this.openModal()
    };

    renderExcel = () => {
        return (
            <OutTable
                data={this.state.rows}
                columns={this.state.cols}
                tableClassName="ExcelTable2007"
                tableHeaderRowClass="heading"
            />
        );
    };
    
    

    render() {
        return (
            <Fragment>
                <div className={this.props.bool ? 'DashboardSection' : 'DashboardSection_z'}>
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
                                <span>Lorem</span>
                            </Tab>
                        </TabList>
                        <TabPanel className='DashboardSection_TabPanel'>
                            <h2>Any content 1</h2>
                            <div className='inputBox'>
                                <div className='inputBoxIN'>
                                    <label htmlFor="uploadInput">
                                        <img src={uploadImage} alt="img"/>
                                    </label>
                                    <input
                                        id='uploadInput'
                                        type="file"
                                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                        onChange={this.fileHandler.bind(this)}
                                        ref={this.fileInput}
                                        onClick={(event) => {
                                            event.target.value = null
                                        }}
                                        style={{
                                            "padding": "10px",
                                            'height': '100%'
                                        }}
                                    />
                                </div>
                                <div className='inputBoxitems  scrollbar'>
                                    {
                                        this.state.excelArray.length > 0
                                            ? this.state.excelArray.map((item, index) => {
                                                return (
                                                    <div key={item.id} style={{
                                                        'padding': '0 20px',
                                                        'display': 'flex',
                                                        'flexDirection': 'column',
                                                        'alignItems': 'center',
                                                        'position': 'relative',
                                                    }}>
                                                        <img src={exelImg}
                                                             onClick={() => this.itemHundler(index)}
                                                             style={{'margin': '0 0 10px 0'}}
                                                        />
                                                        <span style={{
                                                            'color': '#8d8d8d',
                                                            'fontSize': '16px'
                                                        }}>{item.item.name.substring(0, item.item.name.length - 5)}
                                                        </span>
                                                        <div
                                                            onClick={() => this.deleteItem(null, item.id)}
                                                            style={{
                                                                'position': 'absolute',
                                                                'top': '-10px',
                                                                'right': '10px',
                                                                "backgroundColor": 'white',
                                                                "borderRadius": "50%"
                                                            }}
                                                        >
                                                            <img src={delIcon} style={{
                                                                'width': '30px'
                                                            }} alt="del"/>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                            :
                                            <div className='TextDontElement'>
                                                <p>Add Excel Pleas</p>
                                            </div>
                                    }
                                    <Modal
                                        isOpen={this.state.modalIsOpen}
                                        onRequestClose={this.closeModal}
                                        style={customStyles}
                                        contentLabel="Example Modal"
                                    >
                                        <button onClick={this.closeModal}>close</button>
                                        {
                                            this.renderExcel()
                                        }
                                    </Modal>
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
    }
};
