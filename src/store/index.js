import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from '../kredux';
import thunk from '../kredux/thunk';
import logger from '../kredux/logger';
import saga from '../kredux/saga';

const initalUserInfo = {
  isLogin: false,
  user: {
    name: null,
  },
};

function loginReducer(state = { ...initalUserInfo }, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        isLogin: true,
        user: {
          name: 'xiaoming',
        },
      };
    case 'LOGIN_FAILURE':
      return {
        isLogin: false,
        user: {
          name: null,
        },
      };
    default:
      return state;
  }
}
const count = {
  count: 0,
};
//定义修改规则 区分不同类型action调用对应回调
function countReducer(state = { ...count }, action) {
  //debugger //type: "@@redux/INIT0.4.m.0.2"
  switch (action.type) {
    case 'ADD':
      count.count += 1;
      return count;
    case 'MINUS':
      count.count -= 1;
      return count;
    default:
      return state;
  }
}
/* 
  combineReducers结合多个reduce之后当发生dispatch事件时 每个reduce都会调用 所以要保证action.type要唯一
  logger 要作为applyMiddleware的最后一个参数,不然不能保证action是plainObject
*/

// 创建
const sagaMiddleware = createSagaMiddleware();

// const store = createStore(combineReducers({ user: loginReducer, count: countReducer }), applyMiddleware(thunk, logger))
const store = createStore(
  combineReducers({ user: loginReducer, count: countReducer }),
  applyMiddleware(sagaMiddleware),
);

//运行
sagaMiddleware.run(saga);
/* 
  dispatch: ƒ dispatch(action)//默认参数是action
  getState: ƒ getState()
  replaceReducer: ƒ replaceReducer(nextReducer)
  subscribe: ƒ subscribe(listener)
  Symbol(observable): ƒ observable()
*/
export default store;
