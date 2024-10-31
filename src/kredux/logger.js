export default function logger({dispatch, getState}) {
    return next => action => {
        // return function (next) { return function dispatch (action) {} }
        console.log('======actoString.type======', action.type);
        const prevState = getState();
        console.log('======prevState======', prevState);
        // 拿到dispatch dispatch聚合在next里面
        const returnValue = next(action);
        const nextState = getState();
        console.log('======nextState======', nextState);
        return returnValue; 
    }
    
}
