import React, { Component } from 'react';
import {connect} from 'react-redux';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Savednotes from './Savednotes';
import { progressFileStep} from '../actions/actioncreators';
import PropTypes from 'prop-types';
import { cancelFetch, adderror } from '../actions/actioncreators';
class Undertechreview extends Component {
    
    static propTypes = {
        underreviewlist: PropTypes.array,
    };
    static defaultProps = {
        underreviewlist: [],
    };
    componentWillReceiveProps = (newProps) => {
        if (newProps.underreviewlist !== this.props.underreviewlist) {
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
        let self = this;
        function bdataFormater(cell,row){
            let samplenumber = row.SAMPLE_NUMBER;
            let appid = row.UNIQUE_ID;
            let step = 'Start Tech Review';
            return (<button className="btn btn-warning" onClick={()=>{
                self.props.progressFileStep(appid, samplenumber, step)
            }}>Complete Tech Review</button>);
        }
        function notesFormater(cell,row){
            return (<Savednotes notes={cell} appid={row.UNIQUE_ID} edit='true' />);
        }
        return (
            <div className="row" id="sot_tab">
                                <div className="col-lg-12">
                                    <div className="panel panel-warning"  >
                                        <div className="panel-heading">
                                            <h3 className="panel-title">
                                                <span className="glyphicon glyphicon-open-file"></span> Applications Currently Under Tech Review
                                        </h3>
                                        </div>
                                        <div className="panel-body">
                                                <div >
                                                <BootstrapTable data={this.props.underreviewlist} striped={true} hover={true}    pagination={true} search={true} exportCSV={true}   bodyStyle={{'zIndex': '-1 !important','overflow':'visible'}}>
                                                <TableHeaderColumn dataField="SAMPLE_NUMBER"  isKey={true}  dataSort={true}>Sample Number</TableHeaderColumn>
                                                <TableHeaderColumn dataField="FILEOWNER"  dataSort={true}>File Owner</TableHeaderColumn>
                                                <TableHeaderColumn dataField="FROM_DATE"  dataSort={true} >From Date</TableHeaderColumn>
                                                <TableHeaderColumn dataField="SET_TO_DATE"  dataSort={true} >To Date</TableHeaderColumn>
                                                <TableHeaderColumn dataField="DEPARTMENT"  dataSort={true} >Department</TableHeaderColumn>
                                                <TableHeaderColumn dataField="CURRENT_STEP"  dataSort={true} >Current Step</TableHeaderColumn>
                                                <TableHeaderColumn dataField="INITIAL_STATUS"  dataSort={true} >Initial Status</TableHeaderColumn>
                                                <TableHeaderColumn dataField="COMPLETE_STATUS"   dataSort={true}  >Final Status</TableHeaderColumn>
                                                <TableHeaderColumn dataField="NOTES"  dataSort={true} dataFormat={notesFormater} >Notes</TableHeaderColumn>
                                                <TableHeaderColumn dataField="UNIQUE_ID"  dataSort={true} dataFormat={bdataFormater} >Edit</TableHeaderColumn>
                                                </BootstrapTable>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>



                            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => ({
    underreviewlist: state.techlist.CURRENT_LIST,
    fetching:state.fetching
});

const mapDispatchToProps = (dispatch)=>{
    return {
        progressFileStep(appid,samplenumber,step){
            dispatch(progressFileStep(appid,samplenumber,step));
        },
        cancelFetch(){
            dispatch(cancelFetch());
        },
        adderror(err){
            dispatch(adderror());
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Undertechreview)