// 是⼀个⽤于管理应⽤程序 Side Effect的库,它的⽬标是让副作⽤管理更容易，执⾏更⾼效，测试更简单，在处理故障时更容易。
// 调用异步操作 call
// 状态更新 put
// 监听
import {call, put, takeEvery } from 'redux-saga/effects';
import LoginService from '../service/user'
// export default function saga({ dispatch, getState }) {
//     return next => action => {
//         // action 数据类型是? 对象 | 函数
//         console.log('======actoString.type======', action.type);
//         if (typeof action === 'function') {
//             return action(dispatch, getState)
//         } else {
//             const returnValue = next(action);
//             return returnValue;
//         }
//     }
// }

function * loginHandle(action) {
    const res = yield call(LoginService.login, { name: "123" });
    yield put({ type: 'LOGIN_SUCCESS' })

}

function * saga(props) {
    console.log("saga", props);
    yield takeEvery('login', loginHandle)
}

export default saga;