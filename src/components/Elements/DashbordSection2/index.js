import '@babel/polyfill';
import React, {Fragment, useState} from 'react';
import './style.css';
import appImage from '../../../assets/image/app.png'
import PlayIcon from '../../../assets/image/play-button-sing.png'
import DeleteIcon from '../../../assets/image/delete.png';
import MoreIcon from '../../../assets/image/menu_(1).png';
import libIcon from '../../../assets/image/libIcon.png';

export default class DashboardSection2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tabIndex: 0};
    }

    render() {
        return (
            <Fragment>
                <div className={this.props.bool ? 'DashboardSection' : 'DashboardSection_z'}>
                    <div className='DashboardSection2Box'>
                        <div className='DashboardSection2Download'>
                            <div className='DashboardSection2DownloadItems'>
                                <div className='DashboardSection2DownloadItem'>
                                    <div className='DashboardSection2DownloadItemApp'>
                                        <div className='DashboardSection2DownloadItemIcon'>
                                            <img src={appImage} alt="app"/>
                                        </div>
                                        <div className='DashboardSection2DownloadItemName'>
                                            <p>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                    <div className='DashboardSection2DownloadItemProcessBar'>
                                        <div className='DashboardSection2DownloadItemProcessBarOut'>
                                            <div className='DashboardSection2DownloadItemProcessBarIn'>

                                            </div>
                                        </div>
                                        <div className='DashboardSection2DownloadItemProcessBarText'>
                                            <p>DOWNLOADING - 1.8GB OF 4.9GB(36%)</p>
                                        </div>
                                    </div>
                                    <div className='DashboardSection2DownloadItemButtons'>
                                        <div className='DashboardSection2DownloadItemPlay'
                                             onClick={() => {
                                                 alert("Don't work now")
                                             }}>
                                            <img src={PlayIcon} alt="icon"/>
                                        </div>
                                        <div className='DashboardSection2DownloadItemDelete'
                                             onClick={() => {
                                                 alert("Don't work now")
                                             }}>
                                            <img src={DeleteIcon} alt="icon"/>
                                        </div>
                                    </div>
                                </div>
                                <div className='DashboardSection2DownloadItem'>
                                    <div className='DashboardSection2DownloadItemApp'>
                                        <div className='DashboardSection2DownloadItemIcon'>
                                            <img src={appImage} alt="app"/>
                                        </div>
                                        <div className='DashboardSection2DownloadItemName'>
                                            <p>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                    <div className='DashboardSection2DownloadItemProcessBar'>
                                        <div className='DashboardSection2DownloadItemProcessBarOut'>
                                            <div className='DashboardSection2DownloadItemProcessBarIn'>

                                            </div>
                                        </div>
                                        <div className='DashboardSection2DownloadItemProcessBarText'>
                                            <p>DOWNLOADING - 1.8GB OF 4.9GB(36%)</p>
                                        </div>
                                    </div>
                                    <div className='DashboardSection2DownloadItemButtons'>
                                        <div className='DashboardSection2DownloadItemPlay'
                                             onClick={() => {
                                                 alert("Don't work now")
                                             }}>
                                            <img src={PlayIcon} alt="icon"/>
                                        </div>
                                        <div className='DashboardSection2DownloadItemDelete'
                                             onClick={() => {
                                                 alert("Don't work now")
                                             }}>
                                            <img src={DeleteIcon} alt="icon"/>
                                        </div>
                                    </div>
                                </div>
                                <div className='DashboardSection2DownloadItem'>
                                    <div className='DashboardSection2DownloadItemApp'>
                                        <div className='DashboardSection2DownloadItemIcon'>
                                            <img src={appImage} alt="app"/>
                                        </div>
                                        <div className='DashboardSection2DownloadItemName'>
                                            <p>Lorem Ipsum</p>
                                        </div>
                                    </div>
                                    <div className='DashboardSection2DownloadItemProcessBar'>
                                        <div className='DashboardSection2DownloadItemProcessBarOut'>
                                            <div className='DashboardSection2DownloadItemProcessBarIn'>

                                            </div>
                                        </div>
                                        <div className='DashboardSection2DownloadItemProcessBarText'>
                                            <p>DOWNLOADING - 1.8GB OF 4.9GB(36%)</p>
                                        </div>
                                    </div>
                                    <div className='DashboardSection2DownloadItemButtons'>
                                        <div className='DashboardSection2DownloadItemPlay'
                                             onClick={() => {
                                                 alert("Don't work now")
                                             }}>
                                            <img src={PlayIcon} alt="icon"/>
                                        </div>
                                        <div className='DashboardSection2DownloadItemDelete'
                                             onClick={() => {
                                                 alert("Don't work now")
                                             }}>
                                            <img src={DeleteIcon} alt="icon"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='DashboardSection2Library'>
                            <div className="DashboardSection2LibraryBox">
                                <div className="DashboardSection2LibraryTitle">
                                    <p>Name</p>
                                </div>
                                <div className='DashboardSection2LibraryDownloads'>
                                    <div className='DashboardSection2LibraryDownloadsItems'>
                                        <div className='DashboardSection2LibraryDownloadsItem'>
                                            <div className='DashboardSection2LibraryDownloadsItemIcon'>
                                                <img src={libIcon} alt="icon"/>
                                            </div>
                                            <div className='DashboardSection2LibraryDownloadsItemName'>
                                                <p>Discard</p>
                                            </div>
                                            <div className='DashboardSection2LibraryDownloadsItemButtons'>
                                                <div className='DashboardSection2LibraryDownloadsItemOpen'
                                                     onClick={() => {
                                                         alert("Don't work Now")
                                                     }}
                                                >
                                                    <p>Open</p>
                                                </div>
                                                <div className='DashboardSection2LibraryDownloadsItemMore'
                                                     onClick={() => {
                                                         alert("Don't work Now")
                                                     }}>
                                                    <img src={MoreIcon} alt="icon"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='DashboardSection2LibraryDownloadsItem'>
                                            <div className='DashboardSection2LibraryDownloadsItemIcon'>
                                                <img src={libIcon} alt="icon"/>
                                            </div>
                                            <div className='DashboardSection2LibraryDownloadsItemName'>
                                                <p>Discard</p>
                                            </div>
                                            <div className='DashboardSection2LibraryDownloadsItemButtons'>
                                                <div className='DashboardSection2LibraryDownloadsItemOpen'
                                                     onClick={() => {
                                                         alert("Don't work Now")
                                                     }}
                                                >
                                                    <p>Open</p>
                                                </div>
                                                <div className='DashboardSection2LibraryDownloadsItemMore'
                                                     onClick={() => {
                                                         alert("Don't work Now")
                                                     }}>
                                                    <img src={MoreIcon} alt="icon"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='DashboardSection2LibraryDownloadsItem'>
                                            <div className='DashboardSection2LibraryDownloadsItemIcon'>
                                                <img src={libIcon} alt="icon"/>
                                            </div>
                                            <div className='DashboardSection2LibraryDownloadsItemName'>
                                                <p>Discard</p>
                                            </div>
                                            <div className='DashboardSection2LibraryDownloadsItemButtons'>
                                                <div className='DashboardSection2LibraryDownloadsItemOpen'
                                                     onClick={() => {
                                                         alert("Don't work Now")
                                                     }}
                                                >
                                                    <p>Open</p>
                                                </div>
                                                <div className='DashboardSection2LibraryDownloadsItemMore'
                                                     onClick={() => {
                                                         alert("Don't work Now")
                                                     }}>
                                                    <img src={MoreIcon} alt="icon"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='DashboardSection2LibraryDownloadsItem'>
                                            <div className='DashboardSection2LibraryDownloadsItemIcon'>
                                                <img src={libIcon} alt="icon"/>
                                            </div>
                                            <div className='DashboardSection2LibraryDownloadsItemName'>
                                                <p>Discard</p>
                                            </div>
                                            <div className='DashboardSection2LibraryDownloadsItemButtons'>
                                                <div className='DashboardSection2LibraryDownloadsItemOpen'
                                                     onClick={() => {
                                                         alert("Don't work Now")
                                                     }}
                                                >
                                                    <p>Open</p>
                                                </div>
                                                <div className='DashboardSection2LibraryDownloadsItemMore'
                                                     onClick={() => {
                                                         alert("Don't work Now")
                                                     }}>
                                                    <img src={MoreIcon} alt="icon"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='DashboardSection2LibraryDownloadsItem'>
                                            <div className='DashboardSection2LibraryDownloadsItemIcon'>
                                                <img src={libIcon} alt="icon"/>
                                            </div>
                                            <div className='DashboardSection2LibraryDownloadsItemName'>
                                                <p>Discard</p>
                                            </div>
                                            <div className='DashboardSection2LibraryDownloadsItemButtons'>
                                                <div className='DashboardSection2LibraryDownloadsItemOpen'
                                                     onClick={() => {
                                                         alert("Don't work Now")
                                                     }}
                                                >
                                                    <p>Open</p>
                                                </div>
                                                <div className='DashboardSection2LibraryDownloadsItemMore'
                                                     onClick={() => {
                                                         alert("Don't work Now")
                                                     }}>
                                                    <img src={MoreIcon} alt="icon"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
};
