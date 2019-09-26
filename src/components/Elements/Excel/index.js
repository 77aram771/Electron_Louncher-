import React, {Fragment, Component} from 'react';
import {OutTable, ExcelRenderer} from 'react-excel-renderer';
import exelImg from '../../../assets/image/exelImg.png'
import uploadImage from '../../../assets/image/icon/u.png'
import delIcon from '../../../assets/image/icon/del.png'
import Modal from 'react-modal';
import './style.css';
import {Button} from 'reactstrap';

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

export default class Excel extends Component {
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

    itemHandler = (id) => {
        console.log('id', id);
        this.setState({
                numId: id
            },
            async () => {
                const Excel = await this.renderFile(this.state.numId);

                this.setState(
                    {...Excel},
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
                                    <div key={item.id} className='inputBoxitem'>
                                        <img src={exelImg}
                                             onClick={() => this.itemHandler(index)}
                                             style={{'margin': '0 0 10px 0'}}
                                        />
                                        <span style={{
                                            'color': '#8d8d8d',
                                            'fontSize': '16px'
                                        }}>{item.item.name.substring(0, item.item.name.length - 5)}
                                                        </span>
                                        <div
                                            onClick={() => this.deleteItem(null, item.id)}
                                            className='inputBoxitemDelete'
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
                        <Button color="danger" style={{
                            'margin': '0 0 20px 0'
                        }} onClick={this.closeModal}>close</Button>
                        {
                            this.renderExcel()
                        }
                    </Modal>
                </div>
            </div>
        )
    }
}
