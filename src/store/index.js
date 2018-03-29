import {applyMiddleware,createStore} from 'redux';
import thunk from 'redux-thunk';
//Local Imports
import C from '../actions/constants';
import appreducer from './Appreducer';

const plannerConsoleMessages =  store => next => action => {
  console.log(`
      Called ${action.type}
    `);
  let result = next(action);
  console.log(`  
    `);

  return result;
}

export default (initialstate={})=>{
  return applyMiddleware(thunk,plannerConsoleMessages)(createStore)(appreducer,initialstate,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}
