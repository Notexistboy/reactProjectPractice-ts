import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { connect } from '../kreact-redux'
import { bindActionCreators } from 'redux';

// 
/**
* @description: connect函数用来链接react与redux
* @param {Function} mapStateToProps description
* @param {Object|Function} mapDispatchToProps description
* @param {Function} mergeProps mapStateToProps() 与mapDispatchToProps() 的执⾏结果和组件⾃身的props 将传⼊到这个回调函数中
* @return: undefined
*/
export default connect( 
  //mapStateToProps Function
  //state => ({count:state})
  //ownProps 是当前组件本身的props 没有被高阶组件修饰前的props
  // ! ownProps应当谨慎使用，如果ownProps发生变化的话，mapStateToProps会被重新执行
  // ! state也会被重新计算，这个时候影响性能
  //(state,[ownProps])有[]表示可有可无
  (state,ownProps) => {
    return {count:state.count}
  },
  // mapDispatchToProps Object/Function

  // object
  // 如果不指定mapDispatchToProps，默认props会被注入dispatch本身
  // object，dispatch本身不会被注入props
    /* {
      add: () => ({type: "ADD"})
      minus: () => ({type: "MINUS"})
    }, */
  
  // function 也可以同时使用function和object
  // ! ownProps应当谨慎使用，如果ownProps发生变化的话，mapStateToProps会被重新执行
  // ! state也会被重新计算，这个时候影响性能
  
  (dispatch, ownProps) => {
    // res 对象没有实现dispatch
    const add = () => dispatch({ type: "ADD" })
    const minus = () => dispatch({ type: "MINUS" })
    
    let res = {
      add: () => ({type: "ADD"}),
      minus: () => ({type: "MINUS"}) 
    }
    //bindActionCreators redux 提供的方法 帮助加工res 包上一层dispatch 
    res = bindActionCreators(res,dispatch)
    return {
      dispatch,
      ...res
    }
  }
  //mergeProps
  // (stateProps,dispatchProps, ownProps) => {

  // }
)(
  class ReactReduxPage extends Component {
    render() {
      console.log('LoginPage.props',this.props)
      const {count, dispatch, add, minus} = this.props
      return (
        <div>
          <h3>ReactReduxPage</h3>
          {/* 获取状态值 */}
          <p>{count.count}</p>
          <button onClick={() => {dispatch({type:"ADD"})}}>add</button>
          <button onClick={() => {dispatch({type:"MINUS"})}}>minus</button>
          <button onClick={add}>add</button>
          <button onClick={minus}>minus</button>
        </div>
      );
    }
  }
);

