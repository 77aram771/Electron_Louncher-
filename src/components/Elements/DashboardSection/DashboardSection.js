import React, {Fragment, useState} from 'react'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {OutTable, ExcelRenderer} from 'react-excel-renderer';
import {
    Jumbotron,
    Col,
    Input,
    InputGroup,
    InputGroupAddon,
    FormGroup,
    Label,
    Button,
    Fade,
    FormFeedback,
    Container,
    Card
} from 'reactstrap';
import exelImg from '../../../assets/image/exelImg.png'
import uploadImage from '../../../assets/image/icon/u.png'
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
            isOpen: false,
            dataLoaded: false,
            isFormInvalid: false,
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
            // cols: null,
            // rows: null,
        })
    };

    renderFile = (id) => {
        console.log('fileObj', id);
        let excel = this.state.excelArray[id].item;
        console.log('excel', excel);
        ExcelRenderer(excel, (err, resp) => {
            if (err) {
                console.log(err);
            } else {
                this.setState({
                    dataLoaded: true,
                    cols: resp.cols,
                    rows: resp.rows,
                });
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
                this.setState({
                    uploadedFileName: fileName,
                    isFormInvalid: false
                });
                let newItem = {
                    item: fileObj,
                    id: num
                };
                this.setState((prevState) => ({
                    excelArray: [...prevState.excelArray, ...[newItem]]
                }));

                setTimeout(() => {
                    this.renderFile(this.state.numId)
                }, 1000)


            } else {
                this.setState({
                    isFormInvalid: true,
                    uploadedFileName: ""
                })
            }
        }
    };

    itemHundler = (id) => {
        console.log('id', id);
        this.setState({
            numId: id
        });
        this.openModal()
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
                                        style={{"padding": "10px", 'height': '100%'}}
                                    />
                                </div>
                                <div className='inputBoxitems  scrollbar'>
                                    {
                                        this.state.excelArray.length > 0
                                            ? this.state.excelArray.map((item) => {
                                                return (
                                                    <div key={item.id} style={{'padding': '0 20px'}}>
                                                        <img src={exelImg}
                                                             onClick={() => this.itemHundler(item.id - 1)}/>
                                                        <Modal
                                                            isOpen={this.state.modalIsOpen}
                                                            onRequestClose={this.closeModal}
                                                            style={customStyles}
                                                            contentLabel="Example Modal"
                                                        >
                                                            <h2>Hello</h2>
                                                            <button onClick={this.closeModal}>close</button>
                                                            <Card body outline color="secondary"
                                                                  className="restrict-card">
                                                                <OutTable
                                                                    data={this.state.rows}
                                                                    columns={this.state.cols}
                                                                    tableClassName="ExcelTable2007"
                                                                    tableHeaderRowClass="heading"
                                                                />
                                                            </Card>
                                                        </Modal>
                                                    </div>
                                                )
                                            })
                                            :
                                            <div className='TextDontElement'>
                                                <p>Add Excel Pleas</p>
                                            </div>

                                    }
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
