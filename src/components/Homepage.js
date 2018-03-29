import React,{Component} from 'react';
import {connect} from 'react-redux';
import Loader from './Loader';
class Homepage extends Component {
    render() {

        return (

            <div className="container-fluid container-tab" >
                {this.props.fetching == true ? <Loader /> : ''}
                <div className="panel panel-default" style={{ "marginTop": "-7px" }}>
                    <div className="panel-body">                        
                        <h2 style={{ "color": "#0f3a5f", "marginTop": "5px" }} >
                            <i className="fa fa-tachometer" aria-hidden="true"></i> Tech Review Dashboard
                            <span className="pull-right">
                                <i><b><a href="/lab_control_v2/main.php" >PAMS</a></b></i>
                            </span>
                        </h2>
                        <hr style={{ "marginTop": "12px", "marginBottom": "12px" }} />
                        <div className="class-name">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        fetching: state.fetching
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
