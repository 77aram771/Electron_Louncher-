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
            excelArray: null
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
            modalIsOpen: !this.state.modalIsOpen
        })
    };
    renderFile = (fileObj) => {

        num++;

        this.setState(prevState => ({
            excelArray: {  // object that we want to update
                id: num,
                ...prevState.excelArray,    // keep all other key-value pairs
                item: fileObj
            }
        }), () => console.log('excelArray', this.state.excelArray));

        ExcelRenderer(fileObj, (err, resp) => {
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
        if (event.target.files.length) {
            let fileObj = event.target.files[0];
            let fileName = fileObj.name;
            if (fileName.slice(fileName.lastIndexOf('.') + 1) === "xlsx") {
                this.setState({
                    uploadedFileName: fileName,
                    isFormInvalid: false
                });
                this.renderFile(fileObj)
            } else {
                this.setState({
                    isFormInvalid: true,
                    uploadedFileName: ""
                })
            }
        }
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    openFileBrowser = () => {
        this.fileInput.current.click();
    }

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
                            <div>
                                <Container>
                                    <form>
                                        <FormGroup row>
                                            <Col xs={4} sm={8} lg={10}>
                                                <InputGroup>
                                                    <InputGroupAddon addonType="prepend">
                                                        <Button
                                                            color="info"
                                                            style={{color: "white", zIndex: 0}}
                                                            onClick={this.openFileBrowser.bind(this)}>
                                                            <i
                                                                className="cui-file">
                                                            </i> Browse&hellip;
                                                        </Button>
                                                        <input
                                                            type="file"
                                                            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                                            hidden
                                                            onChange={this.fileHandler.bind(this)}
                                                            ref={this.fileInput}
                                                            onClick={(event) => {
                                                                event.target.value = null
                                                            }}
                                                            style={{"padding": "10px"}}
                                                        />
                                                    </InputGroupAddon>
                                                    <FormFeedback>
                                                        <Fade in={this.state.isFormInvalid} tag="h6"
                                                              style={{fontStyle: "italic"}}>
                                                            Please select a .xlsx file only !
                                                        </Fade>
                                                    </FormFeedback>
                                                </InputGroup>
                                            </Col>
                                        </FormGroup>
                                    </form>
                                    {this.state.dataLoaded &&
                                    <div>
                                        <button onClick={this.openModal}>Open Modal</button>
                                        <Modal
                                            isOpen={this.state.modalIsOpen}
                                            onRequestClose={this.closeModal}
                                            style={customStyles}
                                            contentLabel="Example Modal"
                                        >
                                            <h2>Hello</h2>
                                            <button onClick={this.closeModal}>close</button>
                                            <Card body outline color="secondary" className="restrict-card">
                                                <OutTable
                                                    data={this.state.rows}
                                                    columns={this.state.cols}
                                                    tableClassName="ExcelTable2007"
                                                    tableHeaderRowClass="heading"
                                                />
                                            </Card>
                                        </Modal>
                                    </div>
                                    }
                                </Container>
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
