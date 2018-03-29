import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap'; 
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { saveNotes } from '../actions/actioncreators';
import {  adderror } from '../actions/actioncreators';
class Savednotes extends Component {
  constructor(props) {
    super(props)
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
      notes:''
    };
  }
  componentDidCatch(error, info) {
    this.props.adderror(info);
    }
  static propTypes = {
    appid: PropTypes.string,
    notes:PropTypes.string,
  };
  static defaultProps = {
    appid: '',
    notes:'',
  };
  handleClose() {
    this.setState({ show: false }, () => {
    });
  }

  handleShow() {
    this.setState({ show: true,notes:this.props.notes }, () => {
      
    });
  }

  updateNotes(e){
    this.setState({notes:e.target.value});
  }

  saveNotes(){
    let requestObj = {
      appid:this.props.appid,
      notes:this.state.notes
    };
    this.handleClose();
    this.props.saveNotes(this.props.appid, this.state.notes);
  }
  
  render() {
    return (
      <div>
        <Button bsStyle="default" bsSize="large" onClick={this.handleShow}>
         <glyphicon className="glyphicon glyphicon-edit"></glyphicon>
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Notes </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <textarea className="form-control" rows="8" onChange={this.updateNotes.bind(this)} value={this.state.notes}>
              
           </textarea>
           
          </Modal.Body>
          <Modal.Footer>
            
            <Button onClick={this.handleClose}>Close</Button>
            {this.props.edit == 'true' ? 
              <button className="btn btn-primary" onClick={this.saveNotes.bind(this)}>Save Notes</button>:''}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
  }
}
function mapDispatchToProps(dispatch) {
  return {
    saveNotes(appid, notes){
      dispatch(saveNotes(appid, notes));
    },
        adderror(err){
            dispatch(adderror());
        }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Savednotes)