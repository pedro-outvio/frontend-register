import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputRef extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    if (this.props.active) {
      this.textInput.current.focus();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.active !== this.props.active) {
      if (nextProps.active) {
        this.textInput.current.focus();
      }
    }
  }

  render() {
    const { active, ...rest } = this.props;

    return <input {...rest} ref={this.textInput} autoComplete="new-password" />;
  }
}

InputRef.propTypes = {
  active: PropTypes.bool,
};

InputRef.defaultProps = {
  active: false,
};

export default InputRef;
