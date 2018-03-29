import request from 'superagent';
import moment from 'moment';
import "babel-polyfill";
import C from './constants';
const serviceURL = '../model/techreview_dashboard/';
//const serviceURL = 'http://nsfaaws6.nsf.org/lab_control_v2/model/techreview_dashboard/';
const sampleUrl = 'http://localhost:3000/api/allocateNewPms?access_token=wwv598H4sZCguusFcxQJdeRG4bZufB35I7ODMHV1pKLyMQPqwYkjlhe74k31SBVy';


var API_KEY = '1x;Ig|9}sAL#mIPQFB3ZT+}T%fX>|=J[TJ!@<p@}}]q$s7NQw!@XZ[O/6Gm+K>~';
//Change and Filter Events
export const cancelFetch = () => {
  return {
    type: C.CANCEL_FETCHING
  }

};
export const startFetch = ()=>{
  return {
    type: C.FETCHING
  }
};
export const getAllCount = () => (dispatch,getState) => {
    dispatch({
      type:C.FETCHING
    });
  request.get(serviceURL +'techreview_class.php?getallcount=get')
    .set('Api-Key',API_KEY)
            .then((res)=>{
                let response = JSON.parse(res.text);
                dispatch({
                  type:C.GET_ALL_COUNT,
                  payload:response
                });
            })
            .catch((err)=>{
                dispatch(adderror(err.message));
              dispatch({
                type: C.CANCEL_FETCHING
              });
            }).finally(()=>{
              
            });

}

export const getTechReviewList = () => (dispatch,getState)=>{
  dispatch({
    type:C.FETCHING
  });
  request.get(serviceURL +'techreview_class.php?getTechReviewList=get')
    .set('Api-Key',API_KEY)
      .then((res)=>{
        let response = JSON.parse(res.text);
        dispatch({
          type: C.TECH_REVIEW_LIST,
          payload:response
        });
      })
      .catch((err)=>{
        dispatch(adderror(err.message));
        dispatch({
          type: C.CANCEL_FETCHING
        });
    }).finally(() => {
       
    });
}

export const progressFileStep = (appid,samplenumber,step) => (dispatch,getState)=>{
  let send_data = {
          'samplenumber': samplenumber,
          'appid': appid,
          'step': step};
  dispatch({
    type: C.FETCHING
  });
  request.post(serviceURL +'techreview_class.php')
        .set('Api-Key',API_KEY)
        .type('form')
        .send(send_data)
        .then((res)=>{
          
          dispatch(getTechReviewList());
        })
        .then(()=>{
          dispatch(getAllCount());
        })
        .catch((err)=>{
          dispatch(adderror(err.message));
          dispatch({
            type: C.CANCEL_FETCHING
          });
    }).finally(() => {
      
    });
}

export const saveNotes = (appid,note)=>(dispatch,getState)=>{
  let send_data = {
    appid:appid,
    notes:note
  };
  dispatch({
    type: C.FETCHING
  });
  request.post(serviceURL +'updateNotes.php')
      .set('Api-Key',API_KEY)
      .type('form')
      .send(send_data)
      .then((res)=>{
        dispatch(getTechReviewList());
      })
      .catch((err)=>{
       dispatch(adderror(err.message));
        dispatch({
          type: C.CANCEL_FETCHING
        });
      });
}

//Error Handling
export const adderror = (message)=>{
  return{
    type:C.ADD_ERROR,
    payload:message
  }
}
export const clearerror = ()=>{
  return {
    type:C.CLEAR_ERRORS
  }
}
