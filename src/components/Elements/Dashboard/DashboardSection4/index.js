import '@babel/polyfill';
import React, {Fragment, useState} from 'react';
import './style.css';

export default class DashboardSection4 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <div className={this.props.bool ? 'Index' : 'DashboardSection_z'}>
                    <div className='DashboardSection4Box'>
                        <h1>DashboardSection4</h1>
                    </div>
                </div>
            </Fragment>
        )
    }
};
