import ControlLabel from '../src';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


function demo1() {
    return (
        <div className="demo-control-label">
            <ControlLabel>control label</ControlLabel> 
        </div>
    );
}


ReactDOM.render(demo1(), document.getElementById('ReactControlLabelDemo1'));
