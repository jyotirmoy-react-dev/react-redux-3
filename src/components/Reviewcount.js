import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { cancelFetch, adderror } from '../actions/actioncreators';
class Reviewcount extends Component {
    static propTypes = {
        completed_count: PropTypes.any,
        avg_start_count: PropTypes.any,
        avg_complete_count: PropTypes.any,
    };
    static defaultProps = {
        completed_count: '',
        avg_start_count: '',
        avg_complete_count: '',
    };
    componentDidCatch(error, info) {
        this.props.adderror(info);
    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="panel panel-default" style={{ "minHeight": "auto !important", "borderColor": "#2196F3" }}>
                        <div className="panel-heading" style={{ "color": "#fff", "backgroundColor": "#2196F3", "borderColor": "#ddd" }}>
                            <div className="row">
                                <div className="col-xs-3">
                                    <i className="fa fa-hourglass-end fa-5x"></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <div className="huge" >{this.props.completed_count != '' ? this.props.completed_count:'...'}</div><small>Files</small>
                                    <div>Applications Completed Tech Review</div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="panel panel-green" style={{"borderColor": "#e91e63"}}>
                        <div className="panel-heading" style={{"borderColor": "#e91e63","color": "white","backgroundColor": "#e91e63"}}>
                            <div className="row">
                                <div className="col-xs-3">
                                    <i className="fa fa-clock-o fa-5x"></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <div className="huge">{this.props.avg_start_count!=''?this.props.avg_start_count:'...'}</div><small>Days</small>
                                    <div>Avg. Lead time to start review</div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="panel panel-yellow" style={{"borderColor": "#FF9800"}}>
                        <div className="panel-heading" style={{"borderColor": "#FF9800","color": "white","backgroundColor": "#FF9800"}}>
                            <div className="row">
                                <div className="col-xs-3">
                                    <i className="fa fa-exchange fa-5x"></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <div className="huge" >{this.props.avg_complete_count!=''?this.props.avg_complete_count:'...'}</div><small>Days</small>
                                    <div>Avg. duration under tech review</div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    completed_count: state.techlistcount.COMPLETED_COUNT,
    avg_start_count: state.techlistcount.AVG_START_COUNT,
    avg_complete_count: state.techlistcount.AVG_COMPLETE_COUNT,
    fetching: state.fetching
})

const mapDispatchToProps =(dispatch)=> {
    return{
       
        adderror(err){
            dispatch(adderror());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Reviewcount)
