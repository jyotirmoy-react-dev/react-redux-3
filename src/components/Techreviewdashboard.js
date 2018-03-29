import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getAllCount, getTechReviewList} from '../actions/actioncreators';
import Reviewcount from './Reviewcount';
import Awaittechreview from './Awaittechreview';
import Undertechreview from './Undertechreview';
import Techreviewcomplete from './Techreviewcomplete';
import Errors from './Errors';
import PropTypes from 'prop-types';
class Techreviewdashboard extends Component {
    componentWillMount() {
        this.props.getAllCount();
        this.props.getTechReviewList();
    }
    static propTypes = {
        errors:PropTypes.array,
    };
    static defaultProps = {
        errors:[],
    };
    render () {
        return (
                <div className="row">
                    <div className="col-md-12">
                    
                        <div id="container-fluid">                         
                        
                        <Reviewcount />
                        {this.props.errors.length>0 ? <Errors errorDetails={this.props.errors} />:''}    
                        <Awaittechreview />

                        <Undertechreview />

                        <Techreviewcomplete /> 

                        </div>
                    </div>

                </div>
            
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        fetching:state.fetching,
        errors: state.errors
    }
}
const mapDispatchToProps =(dispatch)=> {
    return{
        getAllCount(){
            dispatch(getAllCount());
        },
        getTechReviewList(){
            dispatch(getTechReviewList());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Techreviewdashboard)

