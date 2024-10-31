// 接收修改规则 和中间件
export function createStore(reducer, enhancer) {
    //对原有进行加强 加强store的dispatch enhancer是applyMiddleware的返回值
    if (enhancer) {
        // 首先要拿到store的dispatch
        return enhancer(createStore)(reducer)
    }
    // store state
    let currentState = {}
    // 监听函数数组
    let currentListeners = []
    const getState = () => { 
        return currentState
    }

    // 修改状态 接收action
    const dispatch = (action) => {
        currentState = reducer(currentState, action)
        // dispatch action执行完成后触发subscribe
        currentListeners.forEach(listener => listener())
    }
    // 接收一个listener
    const subscribe = (listener) => {
        currentListeners.push(listener);
        /* 返回值用于取消订阅 */
        return () => {
            currentListeners = [];
        }
    }

    dispatch({ type: "@@redux/INIT0.4.m.0.2" })//随便写 但不能重复

    return {
        getState,
        dispatch,
        subscribe
    }
}
export function applyMiddleware(...middlewares) {   
    return createStore => reducer => {
        const store = createStore(reducer);
        let dispatch = store.dispatch
        // 中间件是在 dispatch时 enhancer中执行
        const middleApi = {
            getState: store.getState, // 只是读取值 不会改变值
            dispatch: (action) => dispatch(action), // 当前作用域下的dispatch
            // dispatch: // 当前作用域下的dispatch
        };
        // middleware执行时 getState和dispatch作为最外面的入参
        // 每个中间件都需要dispatch作为参数 来自上一个中间件的返回值
        // { dispatch, getState }通过middleApi传入 dispatch通过函数聚合洋葱圈形式传入 action是组件中调用传入
        // 处理好的dispatch为 middleware({ dispatch, getState })(dispatch)(action)

        const middlewaresChain = middlewares.map(middleware => middleware(middleApi))
        // 重新赋值函数(重新包装函数)
        dispatch = compose(...middlewaresChain)(store.dispatch)
        // 加强store的dispatch
        return {
            ...store,
            dispatch
        }
    }
}
// 动态更改reducer
export function replaceReducer(params) {
    
}
export function combineReducers(...reducers) {
    const reducerList = Object.keys(reducers);
    return function combination(state, action) {
        // 返回一个新的state
        let nextState = {};
        let hasChanged = false;
        for (let key in reducers ){
            let reducer = reducers[key];
            nextState[key] = reducer(state[key], action);
            hasChanged = hasChanged || nextState[key] !== state[key];
        };
        return hasChanged ? nextState : state;
    }
}
// 聚合函数 compose返回的是函数
function compose(...funcs) {
    if (funcs.length === 0) {
        return arg => arg;
    }
    if (funcs.length === 1) {
        return funcs[0];
    }
    return funcs.reduce((a, b) => (...args) => a(b(...args)))
}