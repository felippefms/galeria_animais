import React from 'react';
import Header from './Header';

import axios from 'axios';

import './DeviceList.css';

function DeviceList(){
    
    return(
        <div id='DevicelistdWrapper'>
            <Header></Header>
            <p>DeviceList</p>
        </div>
    )
}

export default DeviceList;