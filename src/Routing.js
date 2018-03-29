import {Router, Route,IndexRoute, hashHistory} from 'react-router';
import React from 'react';
//Custom Imports
import Homepage from './components/Homepage';
import Techreviewdashboard from './components/Techreviewdashboard';
const Routing = ()=>{
  return (
        <Router history={hashHistory}>
        <Route path={'/'} component={Homepage}>
            <IndexRoute component={Techreviewdashboard} />
        </Route>
        </Router>
  );
}

export default Routing;
/*
<Route path={'/approvallist/:type/:enddate/:pm'} component={Approvallist}></Route>
<Route path={'/approvaldetails/:appid/:companyname'} component={Approvaldetails}></Route>
*/
