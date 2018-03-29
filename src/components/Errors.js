import React,{Component} from 'react';
import {Alert} from 'react-bootstrap';
import PropTypes from 'prop-types';
export default class Errors extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleDismiss = this.handleDismiss.bind(this);
    this.handleShow = this.handleShow.bind(this);

    this.state = {
      show: true
    };
  }
  static propTypes = {
    errorDetails:PropTypes.string,
  };
  static defaultProps = {
    errorDetails:''
  };
  handleDismiss() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    if (this.state.show) {
    return (
      <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
        <p>
        <label>Error: </label>
        {this.props.errorDetails}
        </p>
      </Alert>
    );
  }

  return <span></span>;
  }
}
