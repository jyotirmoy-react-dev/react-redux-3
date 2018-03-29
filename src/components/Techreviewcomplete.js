import React, { Component } from 'react';
import { BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table';
import {connect} from 'react-redux';
import Savednotes from './Savednotes';
import PropTypes from 'prop-types';
import { cancelFetch, adderror } from '../actions/actioncreators';
class Techreviewcomplete extends Component {
    static propTypes = {
        reviewcompletelist: PropTypes.array,
    };
    static defaultProps = {
        reviewcompletelist: [],
    };
    componentWillReceiveProps = (newProps) => {
        if (newProps.reviewcompletelist !== this.props.reviewcompletelist) {
            console.log('====================================');
            console.log('Component Did Recieve Props');
            console.log('====================================');
            this.props.cancelFetch();
        }
    }
    componentDidCatch(error, info) {
        this.props.adderror(info);
    }
    
    
    render() {
        function bdataFormater(cell,row){
            return (<span>{cell}</span>);
        }
        function notesFormater(cell,row){
            return (<Savednotes notes={cell} appid={row.UNIQUE_ID} edit='false' />);
        }
        return (
            <div className="row" id="ar_tab">
                <div className="col-lg-12">
                    <div className="panel panel-success"  >
                        <div className="panel-heading" >
                            <h3 className="panel-title">
                                <span className="glyphicon glyphicon-open-file"></span> Applications Tech Review Complete
                                        </h3>
                        </div>
                        <div className="panel-body">

                            <div >
                                <BootstrapTable data={this.props.reviewcompletelist} striped={true} hover={true} pagination={true} search={true} exportCSV={true} bodyStyle={{ 'zIndex': '-1 !important', 'overflow': 'visible' }}>
                                    <TableHeaderColumn dataField="SAMPLE_NUMBER" isKey={true} dataSort={true}>Sample Number</TableHeaderColumn>
                                    <TableHeaderColumn dataField="FILEOWNER" dataSort={true}>File Owner</TableHeaderColumn>
                                    <TableHeaderColumn dataField="FROM_DATE" dataSort={true} >From Date</TableHeaderColumn>
                                    <TableHeaderColumn dataField="SET_TO_DATE" dataSort={true} >To Date</TableHeaderColumn>
                                    <TableHeaderColumn dataField="DEPARTMENT" dataSort={true} >Department</TableHeaderColumn>
                                    <TableHeaderColumn dataField="CURRENT_STEP" dataSort={true} >Current Step</TableHeaderColumn>
                                    <TableHeaderColumn dataField="INITIAL_STATUS" dataSort={true} >Initial Status</TableHeaderColumn>
                                    <TableHeaderColumn dataField="COMPLETE_STATUS" dataSort={true}  >Final Status</TableHeaderColumn>
                                    <TableHeaderColumn dataField="NOTES" dataSort={true} dataFormat={notesFormater} >Notes</TableHeaderColumn>
                                    
                                </BootstrapTable>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    reviewcompletelist: state.techlist.COMPLETE_LIST,
    fetching:state.fetching
})

const mapDispatchToProps = (dispatch)=>{
    return {

        cancelFetch(){
            dispatch(cancelFetch());
        },
        adderror(err){
            dispatch(adderror());
        }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Techreviewcomplete);