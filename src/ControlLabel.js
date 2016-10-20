import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

class ControlLabel extends Component {
  render() {

    const {className,children, ...others } = this.props;


    let classes={
    	'control-label': true
    };

    return (
      <label
        {...others}
        className={classNames(className, classes)}
      >{children}</label>
    );
  }
}


export default ControlLabel;