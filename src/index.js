import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './Routing';
//import {observer,Provider,inject} from  'mobx-react';
//applying redux
import storeFactory from './store'
import {fetchtmv2All,fetchtmv2Details,adderror} from './actions/actioncreators';
import {Provider} from 'react-redux';
let store = storeFactory();
window.store = store;
/*
store.dispatch(
  fetchtmv2All()
);

store.dispatch(
  fetchtmv2Details('716')
);
*/
const handleError = (error) =>
{
  store.dispatch(
    adderror(error.message)
  )
}

window.addEventListener('error',handleError)
ReactDOM.render(<Provider store={store}>
  <Routing />
  </Provider>, document.getElementById('root'));
