import React, { Component } from 'react'
import { createPortal } from 'react-dom'//传送门

class Dialog extends Component {
  constructor(props) {
    super(props)
    const doc = window.document
    this.node = doc.createElement("div") //createProtal要获取当前节点
    doc.body.appendChild(this.node)
  }
  componentWillUnmount() {
    //移除销毁
    window.document.body.removeChild(this.node)
  }
  render() {
    const { hideDialog } = this.props;
    return createPortal(
      <div className="dialog">
        {/* 直接显示组件标签内元素 类似插槽 */}
        {this.props.children}
        {typeof hideDialog === "function" && (
          <button onClick={hideDialog}>关掉弹窗
          </button>
        )}
      </div>
    ,this.node)
  }
}

export default Dialog
