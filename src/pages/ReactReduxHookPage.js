import React,{useCallback, useContext} from 'react'
// import { connect, useDispatch, useSelector } from 'react-redux'
import { connect, useDispatch, useSelector } from '../kreact-redux'
import { bindActionCreators } from 'redux';

export default function ReactReduxHookPage () {
  /* 
    useSelector 用于从Redux存储的state中提取值并订阅该state。
    useDispatch 除了读取store中的state，还能dispatch actions更新store中的state。
    useStore 用于获取创建的store实例。
  */
  const dispatch = useDispatch();
  const count = useSelector(({count}) => {
    return count
  });
  
  const add = useCallback(() => {
    dispatch({ type: "ADD" })
  },[]);

  return (
    <div>123
      <button onClick={add}>{count.count}</button>
    </div>
  )
}

