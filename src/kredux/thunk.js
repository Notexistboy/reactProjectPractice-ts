export default function thunk({ dispatch, getState }) {
    return next => action => {
        // action 数据类型是? 对象 | 函数
        console.log('======actoString.type======', action.type);
        if (typeof action === 'function') {
            return action(dispatch, getState)
        }else{
            const returnValue = next(action);
            return returnValue;
        }
    }
}