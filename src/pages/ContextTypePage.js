import React, { Component } from 'react'
import {ThemeContext} from '../ThemeContext'

export default class ContextTypePage extends Component {
  //只能订阅一个 context 并且是类组件
  //需要能访问到context 静态值 直接挂在当前类名上 而不是实例对象
  static contextType = ThemeContext
  render() {
    console.log(this)
    //在任何生命周期都能访问到
    const {themeColor} = this.context
    /* 
      context: {} 
      props: {}
      refs: {}
      state: {theme: {…}}
      updater: {isMounted: ƒ, enqueueSetState: ƒ, enqueueReplaceState: ƒ, enqueueForceUpdate: ƒ}
      _reactInternalFiber: FiberNode {tag: 1, key: null, stateNode: ContextTypePage, elementType: ƒ, type: ƒ, …}
      _reactInternalInstance: {_processChildContext: ƒ}
      isMounted: (...)
      replaceState: (...)
    */
    return (
      <div>
        <h3>ContextTypePage</h3>
        <div style={{color:themeColor}}>123</div>
      </div>
    )
  }
}
//另一种写法
//ContextTypePage.contextType = ThemeContext
//export default ContextTypePage