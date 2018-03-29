import {combineReducers} from 'redux';

import C from '../actions/constants';




export const techlist = (state={
  AWAIT_LIST:[],
  CURRENT_LIST:[],
  COMPLETE_LIST:[]
},action)=>{
  switch (action.type) {
    case C.TECH_REVIEW_LIST:
        let alllist = action.payload;
      return Object.assign({},state,{
        AWAIT_LIST: alllist.AWAIT_LIST,
        CURRENT_LIST: alllist.CURRENT_LIST,
        COMPLETE_LIST: alllist.COMPLETE_LIST
      });
      break;    
    default:
      return state;
  }
}


export const techlistcount = (state={
  COMPLETED_COUNT:'',
  AVG_START_COUNT:'',
  AVG_COMPLETE_COUNT:''
},action)=>{
  switch (action.type) {
    case C.GET_ALL_COUNT:
      let allcount = action.payload;
      return Object.assign({},state,{
        COMPLETED_COUNT:allcount.COMPLETED_COUNT,
        AVG_START_COUNT:allcount.AVG_START_COUNT,
        AVG_COMPLETE_COUNT:allcount.AVG_COMPLETE_COUNT,
      });
      break;
  
    default:
      return state;

  }
}

export const fetching = (state=false,action)=>{
    switch (action.type){
      case C.FETCHING:
        return true;
        break;
      case C.CANCEL_FETCHING:
        return false;
        break;
      default:
        return state;
    }
}






export const loaders = (state=false,action)=>{
  switch (action.type) {
    case C.SET_LOADER:
      return true;
      break;
    case C.UNSET_LOADER:
      return false;
      break;
    default:
      return state;

  }
}

export const errors = (state=[],action)=>{
  switch (action.type) {
    case C.ADD_ERROR:
      return [
        ...state,
        action.payload
      ]
      break;
    case C.CLEAR_ERRORS:
      return [];
      break;
    default:
    return state;

  }
}
export default combineReducers({
    techlist,
    techlistcount,
    fetching,   
    loaders,
    errors
})
