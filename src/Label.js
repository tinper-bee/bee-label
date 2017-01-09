import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

const defaultProps = {
   clsPrefix: 'u-label'
}
class Label extends Component {
  render() {

    const {className,children,clsPrefix, ...others } = this.props;

    let classes = {};

    let classNames = classnames(clsPrefix,classes);

    return (
      <label
        {...others}
        className={classNames}
      >{children}</label>
    );
  }
}

Label.defaultProps = defaultProps;

export default Label;