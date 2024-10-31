import React, { Component, createContext, useCallback, useContext, useEffect, useLayoutEffect, useReducer, useState } from 'react';

function bindActionCreator(creator, dispatch) {
    return (...args) => dispatch(creator(args))
}

export  function bindActionCreators(actions, dispatch) {
    let obj = {};
    for( let key in actions ) {
        // obj[key] = bindActionCreator(actions[key], dispatch)
        let action = actions[key];
        obj[key] = (...args) => dispatch(action(args))
    }
    return obj;
}



// 1.通过context传递store
const provContext = createContext(); // 创建context对象
// 2.通过Provider组件传递value(store)
const ProvProvider = provContext.Provider;
// 通过consumer消费value
const ProvConsumer = provContext.Consumer;

export function Provider ({store, children, ...othProps}) {
    return <ProvProvider value={store} {...othProps}>{children}</ProvProvider>
}
// 3.通过子组件接收 context value
// connect内部借用了 context 结合provider和consumer
export const connect = (
    mapStateToProps, 
    mapDispatchToProps, 
    mergeProps, 
    option
) => (WrappedComponent) => (props) =>{
    const store = useContext(provContext);
    const { getState,dispatch } = store;
    // store state
    const stateProps = mapStateToProps(getState(), props);
    // const stateProps = useMemo(() => mapStateToProps(getState(), [getState()]);

    let dispatchProps;
    // const dispatchProps = useMemo(() => bindActionCreators(mapDispatchToProps, dispatch),[store]);
    if(typeof mapDispatchToProps === 'object'){
        dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
    }else if(typeof mapDispatchToProps === 'function'){
        dispatchProps = mapDispatchToProps(dispatch, props);
    }

    // 引起组件的一次更新 useState 设置相同的值并不会引起更新 官方建议用  useReducer
    // const [, forceUpdate] = useReducer(null);
    // const [, forceUpdate] = useState({});
    const forceUpdate = useForceUpdate();
    // useLayoutEffect 是同步调用effect useEffect 是异步执行 
    useLayoutEffect(() => {
        //取消订阅
        const unsubscribe = store.subscribe(() => {
            forceUpdate();
        })
        return () => {
            if (unsubscribe) unsubscribe()
        }
    }, [store])

    return <WrappedComponent {...props} {...stateProps} {...dispatchProps}/>
}

// hook只能用在函数组件或自定义hook
function useForceUpdate() {
    const [state,setState] = useState(0);
    
    const update = useCallback(() => {
        setState(prev => prev+1);
    },[]);

    return update;
}

function useStore(params) {
    const store = useContext(provContext);
    return store;
}

export function useSelector(callback) {
    const store = useStore();
    const { getState } = store;
    const selectState = callback(getState())

    // 引起组件的一次更新 useState 设置相同的值并不会引起更新 官方建议用  useReducer
    // const [, forceUpdate] = useReducer(null);
    // const [, forceUpdate] = useState({});
    const forceUpdate = useForceUpdate();
    // useLayoutEffect 是同步调用effect useEffect 是异步执行 
    useLayoutEffect(() => {
        //取消订阅
        const unsubscribe = store.subscribe(() => {
            forceUpdate();
        })
        return () => {
            if (unsubscribe) unsubscribe()
        }
    }, [store])
    
    return selectState;
}

export function useDispatch(params) {
    const store = useStore();
    const { dispatch } = store;
    return dispatch;
}