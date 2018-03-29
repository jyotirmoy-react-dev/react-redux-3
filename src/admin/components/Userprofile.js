import React,{Component} from 'react';
import Listingstore from '../../store/Listingstore';
import {observer,inject} from  'mobx-react';
import Tmv2admin from './Tmv2admin';
inject('Listingstore')
@observer
export default class Userprofile extends Component {

    render() {
        return (
          <div className="container-fluid">

                 <div className="row">
                     <div className="col-lg-12">
                         <h3> <span className="glyphicon glyphicon-user"></span> Hi Paul, </h3>
                         <hr/>
                    </div>
                </div>
                 <div className="row">
                 <div className="col-md-12">
                         <br/>
                         <div className="panel panel-default" style={{"borderColor": "#2196f3"}}>
                             <div className="panel-heading2" style={{"backgroundColor": "#2196f3 !important","borderColor": "#2196f3"}}>
                             Add/Edit Approvals
                             </div>
                             <div className="panel-body" style={{"minHeight":"170px"}}>
                                  <div className='row'>
                                      <div className='col-lg-3'>
                                          <Tmv2admin />
                                      </div>
                                      <div className='col-lg-3'>

                                      </div>
                                      <div className='col-lg-3'>

                                      </div>
                                      <div className='col-lg-3'>

                                      </div>
                                  </div>
                             </div>
                         </div>

                     </div>

             </div>
         </div>
        );
    }
}
